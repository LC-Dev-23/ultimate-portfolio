"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Button } from '../ui/button';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import { ModeToggle } from '../ModeToggle';



const Header = () => {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: '/', text: 'HOME' },
    { href: '/about', text: 'ABOUT' },
    { href: '/portfolio', text: 'PORTFOLIO' },
    { href: '/services', text: 'SERVICES' },
    { href: '/contact', text: 'CONTACT', className: 'block lg:hidden' },
  ];
  return (
    <>

      <header className='relative w-full bg-black'>
        <nav className='flex content-center items-center justify-between py-5 mx-auto px-10 md:px-20 md:min-w-[40rem] max-w-[75rem]'>
          <Link href={"/"}>
            <Image
              className='w-auto h-16'
              src="/images/lc-dev-logo-white.png"
              width={100}
              height={100}
              alt="LC Dev Logo"
              priority={true}
            />
          </Link>
          {/* Desktop Nav */}
          <ul className={`text-white gap-10 items-center hidden lg:flex`}>
            {links.map(({ href, text, className }) => (
              <Link key={href} href={href} className={className}>
                <li className={pathname === href ? 'text-[#DE0000] font-bold scale-110' : 'hover:text-[#DE0000] hover:scale-110'}>
                  {text}
                </li>
              </Link>
            ))}
            <ModeToggle />
          </ul>
          <Link className='hidden lg:block' href={"/contact"}>
            <button className={`${"/contact" === pathname ? "border-[#DE0000]" : "border-white"} border-2 hover:border-[#DE0000] text-white px-5 py-2 `}>CONTACT</button>
          </Link>
          {isOpen ?
            (
              <Button onClick={toggleMenu} variant={'outline'} size={'icon'} className='h-10 w-10 lg:hidden text-white text-4xl bg-transparent'><RiCloseLine />  </Button>
            )
            :
            (
              <Button onClick={toggleMenu} variant={'outline'} size={'icon'} className='h-10 w-10 lg:hidden text-white text-4xl bg-transparent'><RiMenu2Line /></Button>
            )}

        </nav>
        {/* Mobile Nav */}
        <nav className={`${isOpen ? "block" : "hidden"} h-screen lg:h-auto`}>
          <ul className={`text-white gap-10 items-center flex flex-col pt-20 lg:hidden`}>
            {links.map(({ href, text, className }) => (
              <Link key={href} href={href}>
                <li className={pathname === href ? 'text-[#DE0000] font-bold scale-110' : 'hover:text-[#DE0000] hover:scale-110'}>
                  {text}
                </li>
              </Link>
            ))}
            <ModeToggle />
          </ul>
        </nav>
      </header>


    </>

  )
}

export default Header
