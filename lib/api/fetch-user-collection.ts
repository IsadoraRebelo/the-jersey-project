/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@/supabase/client';

export const fetchUserCollection = async (id: number) => {
  try {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('jerseys')
      .select('*')
      .contains('collections', [id]);

    if (error) {
      throw new Error(error.message);
    } else if (data.length === 0) {
      throw new Error('No jerseys found');
    }

    return { data };
  } catch (error) {
    console.error('Error fetchUserCollection:', error);
    throw new Error('Error fetchUserCollection');
  }
};
