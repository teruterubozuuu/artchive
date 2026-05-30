import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
    emailAndPassword: {
        enabled:true,
        autoSignIn:true,
        minPasswordLength: 8,
        maxPasswordLength: 20,
    }, database: new Pool({
        connectionString: process.env.DATABASE_URL
    }),
        user: {
        modelName: "users", // tell better-auth my table is "users" not "user"
    }
    // Add social provider (Google)
})

export type Session = typeof auth.$Infer.Session;