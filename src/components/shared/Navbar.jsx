'use client';

import React from 'react';
import NavbLink from './NavbLink';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

import userImage from '@/assest/user.png';
import Link from 'next/link';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <header className="bg-linear-to-bl from-[#03045e] to-[#10002b] py-6">
      <nav className="flex items-center justify-between w-10/12 mx-auto">
        <Link href={'/'}>
          {' '}
          <h1 className="text-lg font-bold text-white">Auth</h1>
        </Link>

        {/* Navbar Links */}
        <ul className="flex items-center gap-6">
          {/* User না থাকলে Login + Signup দেখাবে */}
          {!session?.user && (
            <>
              <NavbLink href="/signUp">SignUp</NavbLink>
              <NavbLink href="/login">LogIn</NavbLink>
            </>
          )}

          {/* User Section */}
          <div className="text-white">
            {isPending ? (
              <p>Loading...</p>
            ) : session?.user ? (
              <div className="flex items-center gap-4">
                <h1 className="font-semibold">{session.user.name}</h1>

                <Image
                  src={userImage}
                  alt="userImage"
                  className="rounded-full"
                />

                <button
                  onClick={handleLogout}
                  className="bg-red-500 cursor-pointer px-4 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
