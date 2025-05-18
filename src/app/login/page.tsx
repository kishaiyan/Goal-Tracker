'use client';

import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to continue tracking your goals.</p>
        </div>
        <div className='flex w-full items-center'>
          <SignIn
            signUpUrl="/sign-up"
            redirectUrl="/dashboard"
          />

        </div>
      </div>
    </div>
  );
}