'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { CreateUserInput, signupFormSchema } from '@/types/forms/auth';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { signUpWithEmailAndPassword } from './action';

export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<CreateUserInput>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      invite_code: '',
    },
  });

  const onSubmitHandler: SubmitHandler<CreateUserInput> = (values) => {
    startTransition(async () => {
      const { error } = await signUpWithEmailAndPassword({
        data: values,
      });

      if (error) {
        toast.error(error);
        return;
      }
      toast.success('Registered successfully');
      router.push('/');
      router.refresh();
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  id="password"
                  placeholder="•••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Monza" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="invite_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invite Code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button
            className="text-tPrimary w-[50%] bg-[#10883f] tracking-wider"
            variant={'secondary'}
            type="submit"
            disabled={isPending}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
