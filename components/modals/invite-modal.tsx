"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@dabaz/components/ui/dialog";
import { useModal } from "@dabaz/hooks/use-modal-store";

export const InviteModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createServer";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-medium tracking-normal">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-neutral-600 dark:text-neutral-400">
            Give your server a personality with a name and an image. You can always change it later.
          </DialogDescription>
        </DialogHeader>
        Invite Modal
      </DialogContent>
    </Dialog>
  )
}