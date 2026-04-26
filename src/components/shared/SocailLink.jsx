import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';

const SocialLink = () => {
  const handleGoogleSign = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
    console.log(data, 'data');
  };
  const handleGitHubSign = async () => {
    const data = await authClient.signIn.social({
      provider: 'github',
    });
    console.log(data, 'data');
  };

  return (
    <div className="flex flex-col gap-4 w-full mt-6">
      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10"></div>
        <p className="text-sm text-slate-400">Or continue with</p>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>

      {/* Google Button */}
      <button
        onClick={handleGoogleSign}
        className="w-full cursor-pointer flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md py-3 text-white font-medium hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
      >
        <FaGoogle size={22} />
        <span>Continue with Google</span>
      </button>

      {/* GitHub Button */}
      <button
        onClick={handleGitHubSign}
        className="w-full cursor-pointer flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md py-3 text-white font-medium hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
      >
        <IoLogoGithub size={24} />
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
};

export default SocialLink;
