import React from 'react';

import { RegisterWrapper } from '@/components/register-wrapper';

import { SignUpForm } from './signup-form';

export default function RegisterPage() {
  return (
    <RegisterWrapper title="Get started" subTitle={'Create a new account'}>
      <SignUpForm />
      <div className="mt-7 text-center text-sm">
        Have a account?
        <a href="/login" className="ml-1 text-primary40 underline">
          Sign In Now
        </a>
      </div>
    </RegisterWrapper>
  );
}
