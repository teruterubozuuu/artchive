import z from "zod";

const UserSchema = z.object({
    id: z.uuid(),
    email: z.string(),
    username: z.string(),
    password: z.string(),
})

export type User = z.infer<typeof UserSchema>;