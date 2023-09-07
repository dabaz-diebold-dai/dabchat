import { initialProfile } from "@dabaz/lib/initial-profile";
import { db } from "@dabaz/lib/db";
import { redirect } from "next/navigation";

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

  return ( 
    <div className="text-3xl">create a server</div>
  );
}
 
export default Setup;