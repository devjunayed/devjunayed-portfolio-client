"use client";

import Modal from "@/components/ui/modal/modal";
import { Download } from "lucide-react";
import React, { useState } from "react";

const ResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const resumeOriginalUrl =
    "https://drive.google.com/file/d/1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR/view?usp=sharing";
  const resumeUrl =
    "https://drive.google.com/file/d/1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR/preview";
  const downloadUrl =
    "https://drive.usercontent.google.com/u/0/uc?id=1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR&export=download";

 

  return (
    <div>
      <Modal
        closeButton={true}
        title="Md Junayed's Resume"
        modalButtonText="My Resume"
        modalButtonIcon={<Download />}
        openInNewTab={true}
        openInNewTabText="Open in New Tab"
        openInNewTabUrl={resumeOriginalUrl}
        download={true}
        downloadText="Download"
        downloadUrl={downloadUrl}
        open={isOpen}
        setOpen={setIsOpen}
      >
        <iframe
          className="w-full min-h-[70vh]"
          src={resumeUrl}
          allow="autoplay"
        ></iframe>
      </Modal>
     
    </div>
  );
};

export default ResumeButton;
