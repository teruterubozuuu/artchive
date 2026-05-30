import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from '@/lib/toast'

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword){
      toast.error("Passwords do not match")
      return;
    }

    
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reset</CardTitle>
          <CardDescription>
            Enter a new password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={password ?? ""}
                  onChange={(e => setPassword(e.target.value))}
                  required
                />
                <FieldLabel htmlFor='confirm-password'>Confirm Password</FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword ?? ""}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                />
                <Button type="submit">Submit</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
