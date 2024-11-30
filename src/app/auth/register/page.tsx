'use client'

import AuthForm from "../components/AuthForm";

export default function SignUpPage() {
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign Up form submitted!");
  };

  return <AuthForm title="Daftar" buttonText="Daftar" onSubmit={handleSignUp} isRegister />;
}
