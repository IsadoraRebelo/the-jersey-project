'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { uploadImage } from './action';

export const ImgUpload = ({
  imgUrl,
  jerseyId,
}: {
  imgUrl: string;
  jerseyId: number;
}) => {
  interface FormValues {
    image: FileList;
  }

  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [previewUrl, setPreviewUrl] = useState<string | null>(imgUrl);

  const onSubmitHandler = (values: { image: FileList }) => {
    const file = values.image[0];

    if (!file) {
      toast.error('Please select an avatar to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    startTransition(async () => {
      const { error } = await uploadImage({ formData, jerseyId });

      if (error) {
        toast.error(error);
        return;
      }
      toast.success(`Image uploaded successfully`);
      router.refresh();
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      {previewUrl && (
        <div className={`relative m-auto mt-5 h-[400px] w-[400px] pt-20`}>
          <Image
            alt={'Image preview'}
            src={previewUrl}
            fill
            className="object-cover"
          />
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          {...register('image')}
          onChange={handleFileChange}
          type="file"
          name="image"
          className="h-15 mt-5 cursor-pointer py-3"
        />
        <div className="flex justify-center">
          <Button
            className="tracking-wider"
            variant={'terciary'}
            type="submit"
            disabled={isPending}
          >
            Upload Image
          </Button>
        </div>
      </form>
    </>
  );
};
