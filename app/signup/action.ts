'use server';
import { createClient } from '@/supabase/server';

import { CreateUserInput, signupFormSchema } from '@/types/forms/auth';

export async function signUpWithEmailAndPassword({
  data,
}: {
  data: CreateUserInput;
  emailRedirectTo?: string;
}) {
  const parsed = signupFormSchema.safeParse(data);

  if (!parsed.success) {
    return JSON.stringify({ error: 'Invalid form data' });
  } else if (data.invite_code !== '1234') {
    return JSON.stringify({ error: 'You need an invite code to register' });
  }
  try {
    const supabase = createClient();
    const result = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          username: data.name,
        },
      },
    });
    return JSON.stringify(result);
  } catch (error) {
    console.error('Error during sign up:', error);
    return JSON.stringify({ error: 'Unexpected error occurred' });
  }
}
