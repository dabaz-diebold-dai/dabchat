import { initialProfile } from "@dabaz/lib/initial-profile";
import { db } from "@dabaz/lib/db";
import { redirect } from "next/navigation";
import { InitialModal } from "@dabaz/components/modals/initial-modal";

const Setup = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
}
 
export default Setup;