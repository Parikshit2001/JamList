import prisma from "@/app/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const user = await prisma.user.create({
    data: {
      name: "sultan",
    },
  });
  console.log(user);
  return new Response("Hello, Next.js!");
}
