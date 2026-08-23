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
import { BookOpen, Download } from "lucide-react";
import React, { useState } from "react";

type ModalProps = {
  title?: string;

  modalButtonText?: string;
  modalButtonIcon?: React.ReactNode;


  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

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
  modalButtonText,
  modalButtonIcon,
  open,
  setOpen,
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

  const onDownload = () => {
    if (downloadUrl?.length !== 0 && downloadUrl !== undefined) {
      window.location.href = downloadUrl;
    }
  };


  const onOpenInNewTab = () => {
    window.open(openInNewTabUrl, "_blank");
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          {" "}
          <UiVerseButton
            onClick={() => setOpen(true)}
            text={
              modalButtonText?.length !== 0 && modalButtonText !== undefined
                ? modalButtonText
                : "Open Modal"
            }
            icon={modalButtonIcon ?? <BookOpen />}
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

            {closeButton && closeButton !== undefined && (
              <Button key="close" className="cursor-pointer" onClick={()=> setOpen(!open)}>
                { closeButtonText ?? "Close"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
