import React from 'react';
import NavbarItem from './NavbarItem';
import { HomeIcon, GiftIcon, LightningBoltIcon, ChatIcon, CashIcon } from "@heroicons/react/outline"



const Navbar = () => {

  return (
    <div className='flex flex-grow justify-evenly max-w-2xl'>
      <NavbarItem title='HOME' Icon={HomeIcon} />
      <NavbarItem title='JEWELLERY' Icon={GiftIcon} />
      <NavbarItem title='ELECTRONICS' Icon={LightningBoltIcon} />
      <NavbarItem title='MENS' Icon={ChatIcon} />
      <NavbarItem title='WOMENS' Icon={CashIcon} />
    </div>

  );
}

export default Navbar;

