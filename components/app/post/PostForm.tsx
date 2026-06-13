"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/lib/toast";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function PostForm() {
  const router = useRouter();
  const [imagePrevs, setImagePrevs] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagePrevsRef = useRef<string[]>([]);

  const MAX_IMAGES = 10;
  const imageCount = imagePrevs.length;
  const gridClass =
    imageCount === 1
      ? "grid grid-cols-1"
      : imageCount === 2
        ? "grid grid-cols-2"
        : imageCount === 3
          ? "grid grid-cols-3"
          : "grid grid-cols-4";
  const aspectClass = imageCount === 1 ? "aspect-auto" : "aspect-square";

  // Clean old URLs from browser's memory if not needed anymore
  useEffect(() => {
    return () => {
      imagePrevsRef.current.forEach((image) => URL.revokeObjectURL(image));
    };
  }, []);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Grab everything in the form instantly
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/posts/create-post", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.message ?? data?.error ?? "Failed to publish post",
        );
      }

      toast.success("Published Post");
      router.push("/home");
    } catch (error) {
      console.error("Failed to Publish Post", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to Publish Post",
      );
    }
  };

  const handleRemoveImage = (image: string) => {
    URL.revokeObjectURL(image);
    setImagePrevs((prev) => {
      const next = prev.filter((item) => item !== image);
      imagePrevsRef.current = next;
      return next;
    });

    if (selectedImage === image) {
      setSelectedImage(null);
    }
  };

  return (
    <form
      className="mt-5 flex lg:flex-row flex-col gap-3 lg:h-150"
      onSubmit={handleSubmit}
      id="create-post-form"
    >
      <div className="flex-1 flex flex-col gap-3">
        <Field>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <Input id="title" name="title" placeholder="e.g Wenclair Fanart" />
        </Field>
        <Field>
          <FieldLabel htmlFor="tags">Tags</FieldLabel>
          <Input id="tags" name="tags" placeholder="e.g Wednesday" />
        </Field>
        <Field className="flex flex-col flex-1">
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Textarea
            className="resize-none lg:min-h-100 max-h-50 lg:max-h-none flex-1 w-full break-all whitespace-pre-wrap p-3"
            placeholder="Look at this artwork that I made!"
            name="description"
            id="description"
          />
        </Field>
      </div>
      <div className="flex-1 flex flex-col">
        <Field>
          <FieldLabel htmlFor="image">Image</FieldLabel>

          {imagePrevs.length > 0 && (
            <div
              className={`${gridClass} gap-2 max-h-100 overflow-y-auto lg:max-h-150`}
            >
              {imagePrevs.map((image) => (
                <div
                  key={image}
                  className={`group relative  overflow-hidden ${aspectClass} rounded-md`}
                >
                  <img
                    src={image}
                    className="h-full w-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  />

                  <Button
                    type="button"
                    className="absolute right-2 top-2 h-6 w-6 rounded-full p-0 lg:opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer"
                    onClick={() => handleRemoveImage(image)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <Label
            htmlFor="image"
            className="flex cursor-pointer items-center justify-center rounded-md py-2 bg-primary text-black hover:bg-primary/80 font-semibold"
          >
            <Plus /> Add Image
          </Label>
          <Input
            type="file"
            accept="image/png, image/jpeg"
            className="hidden "
            multiple
            id="image"
            name="image"
            onChange={(e) => {
              const files = Array.from(e.target.files ?? []);
              if (files.length === 0) {
                return;
              }
              if (imagePrevs.length + files.length > MAX_IMAGES) {
                toast.warning("You can only upload up to 10 images");
                return;
              }
              const previewUrls = files.map((file) =>
                URL.createObjectURL(file),
              );
              setImagePrevs((prev) => [...prev, ...previewUrls]);
            }}
          />

          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10"
              onClick={() => setSelectedImage(null)}
            >
              <Button
                variant="ghost"
                type="button"
                className="absolute right-4 top-4 text-white cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </Button>

              <img
                src={selectedImage}
                className="max-h-full max-w-full object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </Field>
      </div>
    </form>
  );
}
