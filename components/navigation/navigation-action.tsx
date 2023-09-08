"use client";

import { Plus } from "lucide-react";

import { ActionTooltip } from "@dabaz/components/action-tooltip";
import { useModal } from "@dabaz/hooks/use-modal-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip
        side="right"
        align="center"
        label="Add a server"
      >
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[3rem] w-[3rem] rounded-xl group-hover:rounded-md transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-blue-600">
            <Plus
              className="group-hover:text-white transition text-blue-600"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  )
}