"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/lib/toast";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try{
      // TODO: Add logic or fetch api endpoint for sending password reset link
      toast.success("Password link sent to email")
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Forgot Password?</CardTitle>
          <CardDescription>
            Enter your email to receive a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={email ?? ""}
                  onChange={(e => setEmail(e.target.value))}
                  required
                />
                <Button type="submit" className="cursor-pointer">Submit</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
