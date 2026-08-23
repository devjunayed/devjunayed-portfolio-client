"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { Download } from "lucide-react";
import React, { useState } from "react";

type ModalProps = {
  title?: string;
  children?: React.ReactNode;

  openInNewTab?: boolean;
  openInNewTabText?: string;
  openInNewTabUrl?: string;

  download?: boolean;
  downloadText?: string;
  downloadUrl?: string;

  closeButton?: boolean;
  closeButtonText?: string;
};

const Modal = ({
  title,
  children,
  openInNewTab,
  openInNewTabText,
  openInNewTabUrl,
  download,
  downloadText,
  downloadUrl,
  closeButton,
  closeButtonText,
}: ModalProps) => {
  const [modalOpen, setIsModalOpen] = useState(false);

  const onDownload = () => {
    if (downloadUrl?.length !== 0 && downloadUrl !== undefined) {
      window.location.href = downloadUrl;
    }
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onOpenInNewTab = () => {
    window.open(openInNewTabUrl, "_blank");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          {" "}
          <UiVerseButton
            onClick={() => setIsModalOpen(true)}
            text="My Resume"
            icon={<Download />}
          />
        </DialogTrigger>
        <DialogContent className="text-black min-w-8/12   bg-gray-500/60 ">
          <DialogHeader>
            <DialogTitle className="text-white">{title}</DialogTitle>
            <DialogDescription className="py-2">{children}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="bg-black/10">
            {openInNewTab && openInNewTabUrl?.length !== 0 && (
              <Button
                key="open"
                className="cursor-pointer"
                onClick={onOpenInNewTab}
              >
                {openInNewTabText !== "" ? openInNewTabText : "Open in New Tab"}
              </Button>
            )}

            {download && downloadUrl?.length !== 0 && (
              <Button
                key="download"
                className="cursor-pointer"
                type="button"
                onClick={onDownload}
              >
                {downloadText !== "" ? downloadText : "Download"}
              </Button>
            )}

            {closeButton && (
              <Button key="close" className="cursor-pointer" onClick={onCancel}>
                {closeButtonText?.length !== 0 ? closeButtonText : "Close"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
