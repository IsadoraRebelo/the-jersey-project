import { Toaster } from 'react-hot-toast';

interface props {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const RegisterWrapper = ({ children, title, subTitle }: props) => {
  return (
    <div className="grid h-screen lg:grid-cols-2">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            background: '#121212',
            padding: '16px',
            color: '#f0f0f0',
          },
        }}
      />
      <div className="flex h-full w-full items-center justify-center bg-primaryForeground">
        <div className="h-fit w-[60%]">
          <h1 className="text-primary40 mb-0 text-3xl">{title}</h1>
          <h2 className="text-primary mb-5 mt-1 text-sm">{subTitle}</h2>
          {children}
        </div>
      </div>
      <div className="hidden h-screen border-l border-bPrimary lg:relative lg:block"></div>
    </div>
  );
};
