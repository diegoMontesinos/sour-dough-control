import React from 'react';

import Image from 'next/image';
import dynamic from 'next/dynamic';

import ActiveLink from './common/ActiveLink';

const NavLink: React.FC<{ href: string }> = ({
  href,
  children,
}) => (
  <ActiveLink
    href={href}
    activeClassName="bg-gray-900 text-white"
    inactiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
  >
    <a className="px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </a>
  </ActiveLink>
);

const UserMenu = dynamic(() => import('./UserMenu'), {
  ssr: false,
});

const AppBar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/images/jar.svg"
                width="36"
                height="36"
                alt="Jar Logo"
              />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/">Cultures</NavLink>
                <NavLink href="/breads">Breads</NavLink>
                <NavLink href="/calculator">
                  Calculator
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
