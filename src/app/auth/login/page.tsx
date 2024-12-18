'use client'

import { useRouter } from "next/navigation";
import AuthForm from "../components/AuthForm";

export default function SignInPage() {
  const router = useRouter()
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/')
  };

  return <AuthForm title="Masuk" buttonText="Masuk" onSubmit={handleSignIn} />;
}
