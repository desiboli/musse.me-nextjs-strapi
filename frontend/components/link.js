import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Link({ children, href }) {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return <NextLink href={href}>{React.cloneElement(children, { className })}</NextLink>;
}
