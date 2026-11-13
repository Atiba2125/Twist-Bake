import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ParallaxImg, Stat } from '../components/Ui.jsx';
import { VALUES, STATS, STEPS, REVIEWS } from '../data.js';

export default function About() {
  return (
    <>
      <PageHero
        title="Our story" eyebrow="Kürtőskalács · Selly Oak"
        lead="A Hungarian bakery on Bristol Road, bringing the warm, golden chimney cake to Birmingham."
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="eyebrow">What is a chimney cake?</Reveal>
            <Reveal as="h2">Sweet dough, <em>twisted &amp; baked.</em></Reveal>
            <Reveal as="p" className="lead-p">Kürtőskalács — the Hungarian chimney cake — is a sweet, spiral-shaped pastry made by winding dough around a spit and baking it until golden. It comes off the spit warm and crisp on the outside, soft and pillowy within, with a sugary cinnamon crust.</Reveal>
            <Reveal as="p">At Twist &amp; Bake we serve it the classic way, or with a modern twist: filled with chocolate, or turned into a cone for soft-serve ice cream with pistachio, Oreo and more. Our regulars love the warm atmosphere and the friendly staff — and the kids love choosing their toppings.</Reveal>
            <div className="stats">
              {STATS.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
            </div>
          </div>
          <ParallaxImg className="split__img" factor={0.05} src="/assets/baked-rows.jpg" alt="Rows of freshly baked chimney cakes" />
        </div>
      </section>

      <section className="section values">
        <div className="wrap">
          <SectionHead eyebrow="What we stand for">Our <em>promise</em></SectionHead>
          <div className="vgrid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 100}>
                <span className="value__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section how">
        <div className="wrap">
          <SectionHead eyebrow="From dough to dessert">The <em>process</em></SectionHead>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className="step" delay={i * 130}>
                <div className="step__img"><img src={s.img} alt={s.title} loading="lazy" /><span className="step__n">{s.n}</span></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews reviews--static">
        <div className="wrap">
          <SectionHead eyebrow="Kind words" light>Loved in <em>Selly Oak</em></SectionHead>
          <div className="rgrid">
            {REVIEWS.map((r, i) => (
              <Reveal as="blockquote" key={i} className="rcard" delay={i * 120}>
                <p>“{r.text}”</p>
                <cite>— {r.who}</cite>
              </Reveal>
            ))}
          </div>
          <Reveal className="center more"><Link className="btn btn--gold" to="/visit">Come and visit us</Link></Reveal>
        </div>
      </section>
    </>
  );
}
