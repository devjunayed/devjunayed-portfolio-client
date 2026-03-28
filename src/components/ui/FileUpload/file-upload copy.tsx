/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Image } from "antd";
import { toast } from "react-toastify";
import type { UploadFile, UploadProps } from "antd";

type FileType = NonNullable<UploadFile["originFileObj"]>;

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface FileUploadProps {
  maxUpload?: number;
  imgbbUrl: string;
  className?: string;
  handleFileUpload: (files: string[]) => void;
  initialFileUrls?: string[];
  resetKey: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  maxUpload = 3,
  imgbbUrl,
  className,
  handleFileUpload,
  initialFileUrls = [],
  resetKey,
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<any[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  
  // Track if initial files have been set to prevent re-setting them
  const initialFilesSet = useRef(false);
  const lastResetKey = useRef(resetKey);
  const lastInitialUrls = useRef<string[]>([]);

  // Memoize the update function to avoid unnecessary re-renders
  const updateImageUrls = useCallback((urls: string[]) => {
    setImageUrls(urls);
    handleFileUpload(urls);
  }, [handleFileUpload]);

  // Handle reset key changes - this should reset everything
  useEffect(() => {
    if (resetKey !== lastResetKey.current) {
      setFileList([]);
      setImageUrls([]);
      initialFilesSet.current = false;
      lastResetKey.current = resetKey;
      lastInitialUrls.current = [];
    }
  }, [resetKey]);

  // Handle initial file URLs - only set them once unless they actually change
  useEffect(() => {
    const urlsChanged = JSON.stringify(initialFileUrls) !== JSON.stringify(lastInitialUrls.current);
    
    // Only set initial files if:
    // 1. They haven't been set before, OR
    // 2. The URLs actually changed, OR  
    // 3. We just reset (initialFilesSet.current is false)
    if (!initialFilesSet.current || urlsChanged) {
      if (initialFileUrls.length > 0) {
        const initialFiles = initialFileUrls.map((url, index) => ({
          uid: `initial-${Date.now()}-${index}`, // More unique uid with timestamp
          name: url,
          status: "done",
          url,
          thumbUrl: url,
        }));
        
        setFileList(initialFiles);
        updateImageUrls(initialFileUrls);
        initialFilesSet.current = true;
        lastInitialUrls.current = [...initialFileUrls];
      } else if (urlsChanged) {
        // If initialFileUrls changed to empty array, clear everything
        setFileList([]);
        updateImageUrls([]);
        initialFilesSet.current = true;
        lastInitialUrls.current = [];
      }
    }
  }, [initialFileUrls, updateImageUrls]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    // Extract URLs from the file list
    const urls: string[] = [];
    const validFiles: any[] = [];

    newFileList.forEach((file) => {
      let fileUrl: string | null = null;
      let fileToAdd: any = null;
      
      // Handle uploaded files (with response)
      if (file.response && file.response.url) {
        fileUrl = file.response.url;
        fileToAdd = file.response;
      }
      // Handle files being uploaded (status: uploading)
      else if (file.status === 'uploading') {
        fileToAdd = file;
      }
      // Handle initial files or already uploaded files
      else if (file.url && file.status === 'done') {
        fileUrl = file.url;
        fileToAdd = file;
      }
      
      if (fileToAdd) {
        validFiles.push(fileToAdd);
      }
      
      if (fileUrl) {
        urls.push(fileUrl);
      }
    });

    setFileList(validFiles);
    // Only update URLs for completed files
    if (urls.length !== imageUrls.length || !urls.every((url, i) => url === imageUrls[i])) {
      updateImageUrls(urls);
    }
  };

  const customRequest = async ({ file, onSuccess, onError }: any) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(imgbbUrl, { 
        method: "POST", 
        body: formData 
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const uploadedFile = {
          uid: data.data.id,
          name: data.data.title,
          status: "done",
          url: data.data.display_url,
          thumbUrl: data.data.thumb.url,
        };

        toast.success("Image uploaded");
        onSuccess(uploadedFile);
      } else {
        throw new Error(data.error?.message || "Upload failed");
      }
    } catch (error: any) {
      onError(error);
      console.error("Upload error:", error);
      toast.error("Image upload failed");
    }
  };

  const handleRemove = (file: any) => {
    // Remove the file from the list
    const newFileList = fileList.filter((f: any) => f.uid !== file.uid);
    setFileList(newFileList);
    
    // Update URLs after removal
    const newUrls = newFileList
      .filter((f: any) => f.status === 'done') // Only include completed files
      .map((f: any) => f.url || f.name)
      .filter((url: string) => url && url.includes("https://"));
    
    updateImageUrls(newUrls);
    
    // Prevent the component from returning true (which would trigger default removal)
    return false;
  };

  const uploadButton = (
    <div className={className}>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        customRequest={customRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove}
        multiple
      >
        {fileList.length >= maxUpload ? null : uploadButton}
      </Upload>
      
      {previewImage && (
        <Image
          alt=""
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default FileUpload;