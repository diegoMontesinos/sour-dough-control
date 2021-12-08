import React from 'react';

import Image from 'next/image';
import {
  useMenuState,
  Menu,
  MenuItem,
  MenuButton,
} from 'reakit/Menu';

import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const menu = useMenuState({
    placement: 'top-end',
    animated: 250,
    gutter: 8,
  });

  return (
    <>
      <MenuButton
        className="max-w-xs bg-gray-800 rounded-full flex items-center
  text-sm focus:outline-none focus:ring-2 focus:ring-offset-2
  focus:ring-offset-gray-800 focus:ring-white"
        {...menu}
      >
        <span className="sr-only">Open user menu</span>

        <Image
          src="/images/profile.jpeg"
          width="36"
          height="36"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </MenuButton>

      <Menu
        {...menu}
        className={styles['user-menu']}
        aria-label="User Menu"
      >
        <MenuItem
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          as="a"
          href="#"
          {...menu}
          onClick={menu.hide}
        >
          Settings
        </MenuItem>
        <MenuItem
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          as="a"
          href="#"
          onClick={menu.hide}
          {...menu}
        >
          Sign out
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
