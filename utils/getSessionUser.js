import { authOptions } from "./authOptions";
import { getServerSession } from "next-auth/next";
async function getSessionUser() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  return { user: session.user, userId: session.user.id };
}

export default getSessionUser;
