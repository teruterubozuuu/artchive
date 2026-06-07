import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function PostForm() {
  return (
    <form className="mt-5 flex lg:flex-row flex-col gap-3 h-150">
      <div className="flex-1 flex flex-col gap-3">
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input id="title" placeholder="e.g Wenclair Fanart" />
        </Field>
        <Field>
          <FieldLabel htmlFor="tags">Tags</FieldLabel>
          <Input id="tags" placeholder="e.g Wednesday" />
        </Field>
        <Field className="flex flex-col flex-1">
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Textarea
            className="resize-none lg:min-h-100 max-h-50 lg:max-h-none flex-1 w-full break-all whitespace-pre-wrap p-3"
            placeholder="Look at this artwork that I made!"
          />
        </Field>
      </div>
      <div className="flex-1 flex flex-col">
        <Field className="flex flex-col flex-1">
          <FieldLabel htmlFor="image-upload">Upload Image</FieldLabel>

          <div className="border-3 min-h-50 border-dashed flex items-center justify-center flex-1 rounded-md bg-muted text-muted-foreground">
            No image
          </div>

          <Input
            type="file"
            accept="image/png, image/jpeg"
            className="cursor-pointer"
            id="image-upload"
          />
        </Field>
      </div>
    </form>
  );
}
