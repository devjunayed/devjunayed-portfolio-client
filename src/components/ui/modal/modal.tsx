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
import { BookOpen, Database, Download, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

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

  codeLinkClient?: string;
  codeLinkServer?: string;
  webLink?: string;

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
  codeLinkClient,
  codeLinkServer,
  webLink,
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
        <DialogTrigger asChild>
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
        <DialogContent className="text-black min-w-8/12 min-h-[90vh] max-h-[90vh]   bg-gray-500/60 ">
          <DialogHeader>
            <DialogTitle className="text-white">{title}</DialogTitle>
            <DialogDescription asChild className="py-2">
              <div>{children}</div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="bg-black/10 ">
            <div className="flex flex-row-reverse w-full justify-between">
              <div className="flex gap-4">
                {openInNewTab && openInNewTabUrl?.length !== 0 && (
                  <Button
                    key="open"
                    className="cursor-pointer"
                    onClick={onOpenInNewTab}
                  >
                    {openInNewTabText ?? "Open in New Tab"}
                  </Button>
                )}

                {download && downloadUrl?.length !== 0 && (
                  <Button
                    key="download"
                    className="cursor-pointer "
                    type="button"
                    onClick={onDownload}
                  >
                    {downloadText !== "" ? downloadText : "Download"}
                  </Button>
                )}

                {closeButton && closeButton !== undefined && (
                  <Button
                    key="close"
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    {closeButtonText ?? "Close"}
                  </Button>
                )}
              </div>

              <div className="flex gap-4">
                {webLink && webLink !== undefined && (
                  <Tooltip key={"webLink"}>
                    <TooltipTrigger>
                      <Link
                        className="btn flex flex-col justify-center items-center text-gray-300 bg-black rounded  p-1"
                        href={webLink as string}
                      >
                        <div className="flex gap-2  ">
                          <LayoutTemplate size={24} />
                          +
                          <Database size={24} />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Visit Site</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {codeLinkClient && codeLinkClient !== undefined && (
                  <Tooltip key={"clientSide"}>
                    <TooltipTrigger>
                      <Link
                        className="btn flex flex-col justify-center items-center bg-black text-white p-1 rounded  "
                        href={codeLinkClient}
                      >
                        <div className="flex gap-2 ">
                          <IoLogoGithub size={24} />
                          +
                          <LayoutTemplate size={24} />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Client Side Code</p>
                    </TooltipContent>
                  </Tooltip>
                )}

                {codeLinkServer && codeLinkServer !== undefined && (
                  <Tooltip key={"serverSide"}>
                    <TooltipTrigger>
                      <Link
                        className="btn flex flex-col justify-center items-center text-white bg-black p-1 rounded"
                        href={codeLinkServer}
                      >
                        <div className="flex gap-2 ">
                          <IoLogoGithub size={24} />
                          +
                          <Database size={24} />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Server Side Code</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
