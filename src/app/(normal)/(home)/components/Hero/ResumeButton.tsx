"use client";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { Button, Modal } from "antd";
import { Download } from "lucide-react";
import React, { useState } from "react";

const ResumeButton = () => {
  const [modalOpen, setIsModalOpen] = useState(false);

  const resumeOriginalUrl =
    "https://drive.google.com/file/d/1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR/view?usp=sharing";
  const resumeUrl =
    "https://drive.google.com/file/d/1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR/preview";
  const downloadUrl =
    "https://drive.usercontent.google.com/u/0/uc?id=1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR&export=download";

  const onDownload = () => {
    window.location.href = downloadUrl;
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onOpenInNewTab = () => {
    window.open(resumeOriginalUrl, "_blank");
  };

  return (
    <div>
      <UiVerseButton
        onClick={() => setIsModalOpen(true)}
        text="My Resume"
        icon={<Download />}
      />
      <Modal
        className="bg-transparent"
        title={"Md Junayed's Resume"}
        width={{
          xs: "95%",
          sm: "85%",
          md: "75%",
          lg: "55%",
          xl: "55%",
          xxl: "55%",
        }}
        style={{ backgroundColor: "transparent", top: 20 }}
        open={modalOpen}
        onCancel={onCancel}
        footer={[
          <Button key="open" onClick={onOpenInNewTab}>
            Open in New Tab
          </Button>,
          <Button key="download" type="primary" onClick={onDownload}>
            Download
          </Button>,
          <Button key="close" onClick={onCancel}>
            Close
          </Button>,
        ]}
      >
        <iframe
          className="w-full min-h-[76vh]"
          src={resumeUrl}
          allow="autoplay"
        ></iframe>
      </Modal>
    </div>
  );
};

export default ResumeButton;
