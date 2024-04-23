"use client"

import { useEffect, useState } from "react"
import InviteModal from "@/components/modals/invite-modal";
import CreateServerModal from "@/components/modals/create-server-modal"
import EditServerModal from "@/components/modals/edit-server-modal";
import MembersModal from "@/components/modals/members-modal";
import CreateChannelModal from "@/components/modals/create-channel-model";
import LeaveServerModal from "@/components/modals/leave-server-modal";
import DeleteServerModal from "@/components/modals/delete-server-modal";
import DeleteChannelModal from "@/components/modals/delete-channel-modal";
import EditChannelModal from "@/components/modals/edit-channel-model";
import MessageFileModal from "@/components/modals/message-file-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null
  }

  return (
    <>
      <CreateServerModal />
      <CreateChannelModal />
      <MembersModal />
      <EditServerModal />
      <InviteModal />
      <DeleteServerModal />
      <LeaveServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
    </>
  )
}