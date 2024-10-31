/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@/supabase/client';

export const fetchJerseyImg = async (id: number) => {
  try {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('jerseys')
      .select('image')
      .eq('id', [id])
      .single();

    if (error) {
      return { data: null };
    }

    return { data };
  } catch (error) {
    console.error('Error fetchJerseyImg:', error);
    throw new Error('Error fetchJerseyImg');
  }
};
