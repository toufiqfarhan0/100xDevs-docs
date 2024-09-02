import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
