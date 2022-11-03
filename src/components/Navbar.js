import React from 'react';
import NavbarItem from './NavbarItem';
import { HomeIcon, GiftIcon, LightningBoltIcon, ChatIcon, CashIcon } from "@heroicons/react/outline"



const Navbar = () => {

  return (
    <div className='flex flex-grow justify-evenly max-w-2xl m-5'>
      <NavbarItem title='HOME' Icon={HomeIcon} />
      <NavbarItem title='CAPTURE' Icon={GiftIcon} />
      <NavbarItem title='MAKE' Icon={LightningBoltIcon} />
      <NavbarItem title='SOUNDS' Icon={ChatIcon} />
      <NavbarItem title='ABOUT' Icon={CashIcon} />
    </div>

  );
}

export default Navbar;

