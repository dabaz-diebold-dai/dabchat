"use client";

import { useState, useEffect } from "react";

import { CreateServerModal } from "@dabaz/components/modals/create-server-modal";
import { InviteModal } from "@dabaz/components/modals/invite-modal";
import { EditServerModal } from "@dabaz/components/modals/edit-server-modal";
import { MembersModal } from "@dabaz/components/modals/members-modal";
import { CreateChannelModal } from "@dabaz/components/modals/create-channel-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
    </>
  )
}