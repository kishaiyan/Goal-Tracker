'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Join Goal Tracker</h2>
          <p className="text-gray-600 mt-2">Create an account to start achieving your goals.</p>
        </div>
        <SignUp
          signInUrl="/login"
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2',
              card: 'bg-white shadow-lg rounded-xl p-6',
              headerTitle: 'hidden',
              headerSubtitle: 'hidden',
              socialButtonsBlockButton:
                'border border-gray-300 rounded-full py-2 text-gray-600 hover:bg-gray-50',
            },
          }}
        />
      </div>
    </div>
  );
}