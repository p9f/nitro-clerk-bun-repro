import { createClerkClient } from "@clerk/backend";

export default defineEventHandler((event) => {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  });

  return "Start by editing <code>server/routes/index.ts</code>.";
});
