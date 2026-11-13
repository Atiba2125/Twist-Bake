import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { ProductCard } from '../components/Ui.jsx';
import { MENU, MENU_NOTE, BRAND } from '../data.js';

export default function Menu() {
  const [active, setActive] = useState('all');
  const sections = active === 'all' ? MENU : MENU.filter((s) => s.id === active);

  return (
    <>
      <PageHero
        title="The menu" eyebrow="Baked fresh, served warm"
        lead="Hungarian chimney cakes, chimney cake ice cream, churros and more. Choose from a range of toppings to make it your own."
      />

      <div className="chipbar">
        <div className="chipbar__inner">
          <button className={`chip${active === 'all' ? ' on' : ''}`} onClick={() => setActive('all')}>All</button>
          {MENU.map((s) => (
            <button key={s.id} className={`chip${active === s.id ? ' on' : ''}`} onClick={() => setActive(s.id)}>{s.title}</button>
          ))}
        </div>
      </div>

      <section className="section menu">
        <div className="wrap" key={active}>
          {sections.map((sec) => (
            <div key={sec.id} className="menu__sec">
              <div className="menu__head">
                <h2>{sec.title}</h2>
                <p>{sec.blurb}</p>
              </div>
              <div className="pgrid">
                {sec.items.map((it, i) => <ProductCard key={it.id} item={it} delay={(i % 3) * 90} />)}
              </div>
            </div>
          ))}
          <Reveal as="p" className="fine center">{MENU_NOTE}</Reveal>
        </div>
      </section>

      <section className="ctaband">
        <Reveal className="wrap ctaband__inner">
          <div><h2>Fancy a warm chimney cake?</h2><p>Drop in at Bristol Road or call ahead to order.</p></div>
          <div className="ctaband__btns">
            <a className="btn btn--gold" href={BRAND.tel}>Call {BRAND.phone}</a>
            <Link className="btn btn--ghost" to="/visit">Find us</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
