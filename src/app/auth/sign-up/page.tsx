'use client'

import AuthForm from "../AuthForm";

export default function SignUpPage() {
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign Up form submitted!");
  };

  return <AuthForm title="Sign Up" buttonText="Sign Up" onSubmit={handleSignUp} isSignUp />;
}
