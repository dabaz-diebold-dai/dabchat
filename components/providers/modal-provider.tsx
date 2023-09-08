"use client";

import { useState, useEffect } from "react";

import { CreateServerModal } from "@dabaz/components/modals/create-server-modal";
import { InviteModal } from "@dabaz/components/modals/invite-modal";

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
    </>
  )
}