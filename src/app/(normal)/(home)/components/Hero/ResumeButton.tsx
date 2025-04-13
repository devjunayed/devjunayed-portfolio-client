"use client";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { Modal } from "antd";
import { Download } from "lucide-react";
import React, { useState } from "react";

const ResumeButton = () => {
  const [modalOpen, setIsModalOpen] = useState(false);
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
        onOk={() =>
          (window.location.href =
            "https://drive.usercontent.google.com/u/0/uc?id=1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR&export=download")
        }
        onCancel={() => setIsModalOpen(false)}
        okText="Download"
      >
        <iframe
          className="w-full min-h-[80vh]"
          src={`https://drive.google.com/file/d/1xJkrc8C28eoSqYr5or6VpOcZqMdSb4rR/preview`}
        ></iframe>
      </Modal>
    </div>
  );
};

export default ResumeButton;
