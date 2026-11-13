import React from 'react';
import { Link } from 'react-router-dom';
import { NAV, BRAND } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src="/assets/logo-badge.png" alt="Twist & Bake" />
          <p>{BRAND.tagline}.<br />A little bit of Budapest in Birmingham.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </div>
        <div>
          <h4>Find us</h4>
          <address>{BRAND.address[0]}<br />{BRAND.address[1]}</address>
          <a href={BRAND.tel}>{BRAND.phone}</a>
          <a href={BRAND.map} target="_blank" rel="noopener">Get directions</a>
        </div>
        <div>
          <h4>Follow</h4>
          <a href={BRAND.instagram} target="_blank" rel="noopener">Instagram @twist_bake</a>
        </div>
      </div>
      <p className="footer__small">© {new Date().getFullYear()} Twist & Bake. Concept website — logo and photos belong to Twist & Bake.</p>
    </footer>
  );
}
