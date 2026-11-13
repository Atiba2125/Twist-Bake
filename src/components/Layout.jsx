import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Embers } from './Effects.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/** Jumps to the top (or a #hash section) on navigation. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();

  // Each page marks itself with data-title; mirror that in the tab title.
  useEffect(() => {
    const el = document.querySelector('[data-title]');
    document.title = el ? `${el.dataset.title} | Twist & Bake` : 'Twist & Bake | Hungarian Chimney Cakes in Selly Oak, Birmingham';
  }, [pathname]);

  return (
    <>
      <Embers />
      <ScrollManager />
      <Header />
      <main id="top" key={pathname} className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
