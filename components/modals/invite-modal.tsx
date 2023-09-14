"use client"

import { Check, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@dabaz/components/ui/dialog";
import { useModal } from "@dabaz/hooks/use-modal-store";
import { Label } from "@dabaz/components/ui/label";
import { Input } from "@dabaz/components/ui/input";
import { Button } from "@dabaz/components/ui/button";
import { useOrigin } from "@dabaz/hooks/use-origin";

export const InviteModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const origin = useOrigin();

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(`/api/servers/${server?.id}/invite-code`)

      onOpen("invite", { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-medium tracking-normal">
            Invite Your Friends
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-600 dark:text-neutral-400">
            Send a server invite link to your friends.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6">
          <Label
            className="tracking-wide text-sm text-neutral-600 dark:text-neutral-400"
          >
            Server invite link
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Input
              disabled={isLoading}
              className="bg-neutral-300/50 dark:bg-neutral-700/50 text-black dark:text-neutral-50 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={inviteUrl}
            />
            <Button disabled={isLoading} onClick={onCopy} size="icon" className="bg-neutral-300/50 dark:bg-neutral-700/50">
              {copied 
                ? <Check className="w-4 h-4 text-black dark:text-neutral-50" /> 
                : <Copy className="w-4 h-4 text-black dark:text-neutral-50" />
              }
            </Button>
          </div>
          <Button
            onClick={onNew}
            disabled={isLoading}
            variant="link"
            size="sm"
            className="text-sm text-neutral-600 dark:text-neutral-400 mt-4"
          >
            Generate a new link
            <RefreshCw className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}