'use client'

import AuthForm from "../AuthForm";

export default function SignInPage() {
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign In form submitted!");
  };

  return <AuthForm title="Sign In" buttonText="Sign In" onSubmit={handleSignIn} />;
}
