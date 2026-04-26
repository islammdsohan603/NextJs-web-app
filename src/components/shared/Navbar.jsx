import React from 'react';
import NavbLink from './NavbLink';

const navbar = [
  { id: 1, name: 'Home', link: '/' },
  { id: 3, name: 'SignUp', link: '/signUp' },
  { id: 2, name: 'LogIn', link: '/login' },
];

const Navbar = () => {
  return (
    <div>
      <header className="bg-linear-to-bl from-[#03045e] to-[#10002b] py-6">
        <nav className="flex items-center justify-between w-10/12 mx-auto">
          <h1 className="text-lg font-bold">Auth</h1>
          <ul className="flex items-center gap-4">
            {navbar.map(navItem => (
              <NavbLink href={navItem.link} key={navItem.id}>
                {' '}
                {navItem.name}{' '}
              </NavbLink>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
