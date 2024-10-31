'use server';

import { createClient } from '@/supabase/server';

import { LoginUserInput, loginFormSchema } from '@/types/forms/auth';

export async function loginWithEmailAndPassword({
  data,
}: {
  data: LoginUserInput;
  emailRedirectTo?: string;
}) {
  const parsed = loginFormSchema.safeParse(data);

  if (!parsed.success) {
    return JSON.stringify({ error: 'Invalid form data' });
  }
  try {
    const supabase = await createClient();
    const result = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    return JSON.stringify(result);
  } catch (error) {
    console.error('Error during login:', error);
    return JSON.stringify({ error: 'Unexpected error occurred' });
  }
}
