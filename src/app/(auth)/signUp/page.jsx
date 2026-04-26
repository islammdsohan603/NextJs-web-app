'use client';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import { authClient } from '@/lib/auth-client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SocailLink from '@/components/shared/SocailLink';

const SignUpPage = () => {
  const route = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL: '/login',
      rememberMe: true,
    });

    if (data) {
      alert('succsfully');
      route.push('/login');
    }

    if (error) {
      alert('signup failde');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-[#0b1120] to-slate-900 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg mb-4">
              <Check className="text-white" />
            </div>

            <h1 className="text-3xl font-bold text-white">Create Account</h1>

            <p className="text-slate-400 mt-2 text-sm">
              Sign up to access your dashboard and manage your account.
            </p>
          </div>

          {/* Form */}
          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired>
              <Label className="text-slate-200">Full Name</Label>
              <Input
                name="name"
                placeholder="Enter your full name"
                className="rounded-xl"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              validate={value => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return 'Please enter a valid email address';
                }
                return null;
              }}
            >
              <Label className="text-slate-200">Email Address</Label>
              <Input
                name="email"
                placeholder="john@example.com"
                className="rounded-xl"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              validate={value => {
                if (value.length < 8) {
                  return 'Password must be at least 8 characters';
                }
                if (!/[A-Z]/.test(value)) {
                  return 'Password must contain at least one uppercase letter';
                }
                if (!/[0-9]/.test(value)) {
                  return 'Password must contain at least one number';
                }
                return null;
              }}
            >
              <Label className="text-slate-200">Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="rounded-xl"
              />
              <Description className="text-xs text-slate-400">
                Minimum 8 characters, 1 uppercase, and 1 number.
              </Description>
              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="w-full mt-2 rounded-2xl py-3 text-base font-semibold bg-linear-to-r from-cyan-500 to-blue-600 text-white hover:scale-[1.02] transition-transform duration-300"
            >
              <Check />
              Create Account
            </Button>
          </Form>

          {/* sosial  */}
          <div>
            <SocailLink />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Already have an account?{' '}
              <Link
                href={`/login`}
                className="text-cyan-400 cursor-pointer hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
