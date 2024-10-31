import { RegisterWrapper } from '@/components/register-wrapper';
import React from 'react';
import { fetchJerseyImg } from '@/api/fetch-jersey-img';

import { ImgUpload } from './img-form';

export default async function UploadImagePage() {
  const { data } = await fetchJerseyImg(1);

  if (!data) {
    return <> </>;
  }
  return (
    <RegisterWrapper title="Upload Img" subTitle={'Upload a image to a jersey'}>
      <ImgUpload imgUrl={data.image} jerseyId={1} />
    </RegisterWrapper>
  );
}
