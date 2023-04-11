import { verifyPassword } from "@/lib/utils";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  const user = await db.user.findUnique({
    where: {
      email,
    },
    include: {
      role: true,
    },
  });

  if (user) {
    const ispasswordCorrect = await verifyPassword(password, user.password);
    if (ispasswordCorrect) {
      return NextResponse.json({ verified: true, user }, { status: 200 });
    }
  }

  return NextResponse.json({ verified: false, user: null }, { status: 401 });
}
