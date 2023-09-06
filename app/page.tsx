import { UserButton } from "@clerk/nextjs";
import { Button } from "@dabaz/components/ui/button";

export default function Home() {
  return (
    <div>
      <UserButton
        afterSignOutUrl="/" 
      />
    </div>
  )
}
