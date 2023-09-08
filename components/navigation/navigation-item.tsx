"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@dabaz/lib/utils";
import { ActionTooltip } from "@dabaz/components/action-tooltip";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
};

export const NavigationItem = ({
  id,
  imageUrl,
  name
}: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  }

  return (
    <ActionTooltip
      side="right"
      align="center"
      label={name}
    >
      <button
        onClick={() => onClick()}
        className="group relative flex items-center"
      >
        <div className={cn(
          "absolute left-0 bg-primary rounded-r-md transition-all w-[4px]",
          params?.serverId !== id && "group-hover:h-[1.25rem]",
          params?.serverId === id ? "h-[2.25rem]" : "h-[0.5rem]"
        )} />
        <div className={cn(
          "relative group flex mx-3 h-[3rem] w-[3rem] rounded-xl transition-all overflow-hidden",
          params?.serverId === id && "bg-primary/10 text-primary rounded-xl"
        )}>
          <Image
            fill
            src={imageUrl}
            alt="channel"
          />
        </div>
      </button>
    </ActionTooltip>
  )
}