'use client'

import AuthForm from "../components/AuthForm";

export default function SignInPage() {
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign In form submitted!");
  };

  return <AuthForm title="Masuk" buttonText="Masuk" onSubmit={handleSignIn} />;
}
