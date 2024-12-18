'use client'

import { useRouter } from "next/navigation";
import AuthForm from "../components/AuthForm";

export default function SignUpPage() {
  const router = useRouter()
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/auth/login')
  };

  return <AuthForm title="Daftar" buttonText="Daftar" onSubmit={handleSignUp} isRegister />;
}
