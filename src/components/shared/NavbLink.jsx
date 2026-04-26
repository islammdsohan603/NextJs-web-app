'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`
          px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
          border border-transparent
          hover:border-pink-500 hover:text-pink-400 hover:bg-white/5
          ${
            isActive
              ? 'bg-pink-600 text-white shadow-lg shadow-pink-500/30'
              : 'text-gray-200'
          }
        `}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavbLink;
