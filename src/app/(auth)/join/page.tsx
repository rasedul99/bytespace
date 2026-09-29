import type { Metadata } from "next";

import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Create an Account · ByteSpace" };

export default function JoinPage() {
  return (
    <AuthForm
      eyebrow="Create an Account"
      title={
        <>
          Welcome to
          <br /> ByteSpace
        </>
      }
      fields={[
        { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
        { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
        { name: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "new-password" },
      ]}
      footer={{ text: "Already have an account?", linkLabel: "Login", href: "/sign-in" }}
    />
  );
}
