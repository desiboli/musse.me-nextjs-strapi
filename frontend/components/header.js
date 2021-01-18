import Image from 'next/image';
import React from 'react';

import Link from '@/components/link';
import ToggleTheme from '@/components/toggleTheme';

import headerStyles from './header.module.css';
import { ThemeContext } from './themeContext';

export default function Header() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <header>
      <style jsx>{`
        .active {
          color: var(--active-text-color);
          border-bottom: 2px solid var(--active-text-color);
        }
      `}</style>
      <div className="container mx-auto px-5 flex">
        <Image
          src={theme === 'dark' ? '/logo.svg' : '/logo-dark.svg'}
          alt="Logo"
          width={180}
          height={100}
        />
        <nav className="flex uppercase">
          <Link href="/">
            <a className={`self-center m-1 pb-2 ${headerStyles['nav-link']}`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={`self-center m-1 pb-2 ${headerStyles['nav-link']}`}>About</a>
          </Link>
          <Link href="/projects">
            <a className={`self-center m-1 pb-2 ${headerStyles['nav-link']}`}>Projects</a>
          </Link>
          <Link href="/blog">
            <a className={`self-center m-1 pb-2 ${headerStyles['nav-link']}`}>Blog</a>
          </Link>
          <Link href="/blog">
            <a className={`self-center m-1 pb-2 ${headerStyles['nav-link']}`}>Contact</a>
          </Link>
        </nav>
        <ToggleTheme />
      </div>
    </header>
  );
}
