import { Toaster } from '@/components/ui/sonner';

interface props {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const RegisterWrapper = ({ children, title, subTitle }: props) => {
  return (
    <>
      <Toaster position="top-right" className="top-right" />
      <div className="grid h-screen lg:grid-cols-2">
        <div className="flex h-full w-full items-center justify-center bg-primaryForeground">
          <div className="h-fit w-[60%]">
            <h1 className=" mb-0 text-3xl">{title}</h1>
            <h2 className="mb-5 mt-1 text-sm">{subTitle}</h2>
            {children}
          </div>
        </div>
        <div className="hidden h-screen border-l lg:relative lg:block"></div>
      </div>
    </>
  );
};
