import { RegisterWrapper } from '@/lib/components/register-wrapper';
import React from 'react';

import { LoginForm } from './login-form';

export default function LoginPage() {
  return (
    <RegisterWrapper title="Welcome Back" subTitle={'Sign in to your account'}>
      <LoginForm />
      <div className="mt-7 text-center text-sm">
        Forgot your password?
        <a href="/signup" className="ml-1 text-primary40 underline">
          Recover It now
        </a>
      </div>
      <div className="mt-1 text-center text-sm">
        {"Don't have an account?"}
        <a href="/signup" className="ml-1 text-primary40 underline">
          Sign In Now
        </a>
      </div>
    </RegisterWrapper>
  );
}
