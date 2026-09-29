import type { Metadata } from "next";

import { AuthForm } from "@/components/auth-form";
import { SocialSignIn } from "@/components/social-sign-in";

export const metadata: Metadata = { title: "Sign In · ByteSpace" };

export default function SignInPage() {
  return (
    <AuthForm
      eyebrow="Sign In"
      title="Welcome Back"
      fields={[
        { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
        { name: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "current-password" },
      ]}
      submitLabel="Sign In"
      footer={{ text: "New user?", linkLabel: "Create an account", href: "/join" }}
    >
      <SocialSignIn />
    </AuthForm>
  );
}
