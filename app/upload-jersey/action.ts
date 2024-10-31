'use server';

import { createClient } from '@/supabase/server';

import { UNEXPECTTED_ERROR } from '@/utils/constants';

export async function uploadImage({
  formData,
  jerseyId,
}: {
  formData: FormData;
  jerseyId: number;
}) {
  try {
    const file = formData.get('file') as File;

    if (!file) {
      return { error: 'File is missing' };
    }

    const supabase = await createClient();

    const fileExt = file.name.split('.').pop();
    const filePath = `jersey-${jerseyId}.${fileExt}`;

    const { error: errorStorage } = await supabase.storage
      .from('jersey_imgs')
      .upload(filePath, file, {
        upsert: true,
      });

    if (errorStorage) {
      console.error('Error uploadImage', errorStorage);
      return { error: errorStorage.message };
    }
    const { data: imgUrl } = supabase.storage
      .from('jersey_imgs')
      .getPublicUrl(filePath);

    console.log('imagge', imgUrl);
    const { error } = await supabase
      .from('jerseys')
      .update({
        image: imgUrl.publicUrl,
      })
      .eq('id', jerseyId);

    return { error: error?.message };
  } catch (error) {
    console.error('Error uploadImage', error);
    throw new Error(UNEXPECTTED_ERROR);
  }
}
