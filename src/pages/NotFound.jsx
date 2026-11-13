import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

export default function NotFound() {
  return (
    <PageHero title="Page not found" eyebrow="404" lead="This page has been twisted right off the spit. Let's get you back to something warm and golden.">
      <div className="phero__actions">
        <Link className="btn btn--gold" to="/">Back home</Link>
        <Link className="btn btn--ghost" to="/menu">See the menu</Link>
      </div>
    </PageHero>
  );
}
