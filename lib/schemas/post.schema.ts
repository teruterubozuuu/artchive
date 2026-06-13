import {z} from "zod";

export const PostSchema = z.object({
    title: z.string().max(100, "Title is too long"),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    image: z.array(z.string())
})

export type PostType = z.infer<typeof PostSchema>;