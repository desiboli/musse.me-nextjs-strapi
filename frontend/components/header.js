import Image from 'next/image';
import React from 'react';

import Container from '@/components/container';
import Link from '@/components/link';
import ToggleTheme from '@/components/toggleTheme';

import { ThemeContext } from './themeContext';

// import headerStyles from './header.module.css';

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
      <Container className="flex">
        <Image
          src={theme === 'dark' ? '/logo.svg' : '/logo-dark.svg'}
          alt="Logo"
          width={180}
          height={100}
        />
        <nav className="flex uppercase">
          <Link href="/">
            <a className="self-center m-1 pb-2">Home</a>
          </Link>
          <Link href="/about">
            <a className="self-center m-1 pb-2">About</a>
          </Link>
          <Link href="/projects">
            <a className="self-center m-1 pb-2">Projects</a>
          </Link>
          <Link href="/blog">
            <a className="self-center m-1 pb-2">Blog</a>
          </Link>
        </nav>
        <ToggleTheme />
      </Container>
    </header>
  );
}
