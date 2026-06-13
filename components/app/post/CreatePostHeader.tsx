import { Button } from "@/components/ui/button";
import React from "react";

export default function CreatePostHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between bg-background w-full py-2 border-b">
      <span className="font-semibold">Create Post</span>
      <Button className="cursor-pointer px-5" type="submit" form="create-post-form">Publish</Button>
    </div>
  );
}
