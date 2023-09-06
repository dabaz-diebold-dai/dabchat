import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@dabaz/components/mode-toggle";
import { Button } from "@dabaz/components/ui/button";

export default function Home() {
  return (
    <div>
      <UserButton
        afterSignOutUrl="/" 
      />
      <ModeToggle />
    </div>
  )
}
