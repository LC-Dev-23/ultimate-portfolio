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
    <header className='z-50 fixed w-full dark:bg-white/90 bg-black/90 backdrop-blur-sm shadow-sm rounded-b-xl'>
      <nav className='flex content-center items-center justify-between py-2 container mx-auto'>
        <Link href={"/"} className=''>
          <Image
            className='w-auto h-16 dark:invert filter-none'
            src="/images/lc-dev-logo-white.png"
            width={100}
            height={100}
            alt="LC Dev Logo"
            priority={true}
          />
        </Link>
        {/* Desktop Nav */}
        <ul className={`dark:text-black text-white font-semibold gap-10 items-center hidden lg:flex`}>
          {links.map(({ href, text, className }) => (
            <li className={`${pathname === href ? 'text-accentRed font-bold scale-110' : 'hover:text-accentRed hover:scale-110'} ${className}`}>
              <Link key={href} href={href} >
                {text}
              </Link>
            </li>
          ))}
          <li><ModeToggle /></li>
        </ul>
        <Link className='hidden lg:block' href={"/contact"}>
          <button className={` dark:text-black text-white font-semibold border-[3px] dark:hover:border-accentRed hover:border-accentRed px-5 py-2 shadow-2xl ${"/contact" === pathname ? "border-accentRed text-accentRed" : "dark:border-black border-white"}`}>CONTACT</button>
        </Link>
        <Button onClick={toggleMenu} variant="link" size={'icon'} className='h-10 w-10 lg:hidden dark:text-black text-white text-4xl bg-transparent'>{isOpen ? <RiCloseLine /> : <RiMenu2Line />}</Button>
      </nav>
      {/* Mobile Nav */}
      <nav className={`${isOpen ? "block" : "hidden"} h-screen lg:h-auto text-base md:text-2xl`}>
        <ul className={`dark:text-black text-white gap-10 items-center flex flex-col pt-20 lg:hidden`}>
          {links.map(({ href, text, className }) => (

            <li className={pathname === href ? 'text-accentRed font-bold scale-110' : 'hover:text-accentRed hover:scale-110'}>
              <Link onClick={() => setIsOpen(!isOpen)} key={href} href={href}>
                {text}
              </Link>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header >
  )
}

export default Header
