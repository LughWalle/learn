import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './style.module.scss';

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "challenges",
    path: "/challenges",
  },
  {
    name: "summary",
    path: "/summary",
  },
];

type NavAnchor = {
  path: string
  children: ReactNode
}

function NavAnchor ({ path, children }: NavAnchor) {
  return (
    <Link href={path}>
      <a className={styles.navAnchor}>{children}</a>
    </Link>
  )
}

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({ name, path }) => (
          <li key={path}>
            {path === pathname
              ? <span>{name}</span>
              : <NavAnchor path={path}>{name}</NavAnchor>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
