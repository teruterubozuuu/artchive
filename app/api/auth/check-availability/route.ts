// app/api/auth/check-availability/route.ts
import { supabase } from "@/utils/supabase/client";// your supabase/drizzle client
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, username } = await req.json();

  // Adjust table/column names to match your schema
  const { data: existingEmail } = await supabase()
    .from("users")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existingEmail) {
    return NextResponse.json({ error: "email_taken" }, { status: 409 });
  }

  const { data: existingUsername } = await supabase()
    .from("users")
    .select("id")
    .eq("name", username)


  if (existingUsername) {
    return NextResponse.json({ error: "username_taken" }, { status: 409 });
  }

  return NextResponse.json({ ok: true });
}