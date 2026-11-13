import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, BRAND } from '../data.js';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <Link to="/" className="nav__brand" aria-label="Twist & Bake home">
        <img src="/assets/logo-badge.png" alt="Twist & Bake — chimney cake" />
        <span>twist<i>&amp;</i>bake</span>
      </Link>
      <nav className={`nav__links${open ? ' open' : ''}`} aria-label="Main">
        {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
        <a className="nav__cta" href={BRAND.tel}>Call to order</a>
      </nav>
      <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span />
      </button>
    </header>
  );
}
