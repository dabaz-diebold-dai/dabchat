import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { currentProfile } from "@dabaz/lib/current-profile"
import { db } from "@dabaz/lib/db";

import { Separator } from "@dabaz/components/ui/separator";
import { ScrollArea } from "@dabaz/components/ui/scroll-area";
import { ModeToggle } from "@dabaz/components/mode-toggle";

import { NavigationAction } from "@dabaz/components/navigation/navigation-action";
import { NavigationItem } from "@dabaz/components/navigation/navigation-item";

export const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  return (
    <div
      className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-[#E3E5E8] dark:bg-[#1E1F22] py-4"
    >
      <NavigationAction />
      <Separator
        className="h-[0.1rem] bg-neutral-300 dark:bg-neutral-700 rounded-md w-10 mx-auto"
      />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[3rem] w-[3rem]"
            }
          }}
        />
      </div>
    </div>
  )
}