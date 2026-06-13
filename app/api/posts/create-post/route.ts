import { auth } from "@/lib/auth";
import { PostSchema } from "@/lib/schemas/post.schema";
import { supabase, supabaseAdmin } from "@/utils/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const images = formData
      .getAll("image")
      .filter((image): image is File => image instanceof File && image.size > 0);
    const uploadedImageUrls: string[] = [];

    if (images.length === 0) {
      return NextResponse.json(
        { error: "At least one image is required" },
        { status: 400 },
      );
    }

    for (const image of images) {
      const fileExt = image.name.split(".").pop() ?? "jpg";
      const fileName = `${userId}/${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabaseAdmin()
        .storage
        .from("posts")
        .upload(fileName, image);

      if (uploadError) {
        return NextResponse.json(
          { error: "Image upload failed", message: uploadError.message },
          { status: 400 },
        );
      }

      const { data } = supabase()
        .storage
        .from("posts")
        .getPublicUrl(fileName);

      uploadedImageUrls.push(data.publicUrl);
    }

    const rawData = {
      title: formData.get("title"),
      description: formData.get("description"),
      image: uploadedImageUrls,
      tags: formData.getAll("tags").filter(Boolean),
    };

    const result = PostSchema.safeParse(rawData);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid post data", issues: result.error },
        { status: 400 },
      );
    }

    const { data: postData, error: postError } = await supabaseAdmin()
      .from("posts")
      .insert({
        user_id: userId,
        title: result.data.title,
        description: result.data.description,
        image: uploadedImageUrls,
        tags: result.data.tags,
      })
      .select()
      .single()

    if (postError) {
      return NextResponse.json(
        { error: "Error Publishing Post", message: postError.message},
        { status: 400 },
      );
    }

    return NextResponse.json({ ok: true, post: postData }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
