import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { Steam, SpinBadge } from '../components/Effects.jsx';
import { SectionHead, ParallaxImg, Stat, Marquee, ProductCard } from '../components/Ui.jsx';
import { prefersReducedMotion } from '../hooks/useMotion.js';
import { BRAND, STATS, STEPS, FEATURED, REVIEWS, REEL_COLS } from '../data.js';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="hero__inner">
        <div className="hero__text">
          <div className="hero__logo">
            <Steam />
            <img src="/assets/logo-badge.png" alt="Twist & Bake" />
          </div>
          <p className="eyebrow eyebrow--light hero__eyebrow">Hungarian chimney cakes · Selly Oak, Birmingham</p>
          <h1 className="hero__title">
            <span className="line"><span>A little bit of</span></span>
            <span className="line"><span><em>Budapest,</em> twisted</span></span>
            <span className="line"><span>&amp; baked fresh.</span></span>
          </h1>
          <p className="hero__lead">
            Warm, golden kürtőskalács rolled in cinnamon sugar — and filled with soft-serve ice cream, chocolate and pistachio.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--gold" to="/menu">See the menu</Link>
            <Link className="btn btn--ghost" to="/visit">Find us</Link>
          </div>
        </div>

        <div className="hero__cols" aria-hidden="true">
          {REEL_COLS.map((col, c) => (
            <div key={c} className={`vcol vcol--${c}`}>
              <div className="vcol__track">
                {[...col, ...col].map((src, i) => (
                  <div className="reel" key={i}><img src={src} alt="" loading="eager" /></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__badge">
        <SpinBadge><img src="/assets/logo-badge.png" alt="" /></SpinBadge>
      </div>
      <a href="#how" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  );
}

function How() {
  return (
    <section className="section how" id="how">
      <div className="wrap">
        <SectionHead eyebrow="Kürtőskalács, the Hungarian way">How a chimney cake <em>is made</em></SectionHead>
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
  );
}

function Highlights() {
  return (
    <section className="section highlights">
      <div className="wrap">
        <SectionHead eyebrow="Menu highlights">Warm, sweet &amp; <em>made to share</em></SectionHead>
        <div className="pgrid">
          {FEATURED.map((it, i) => <ProductCard key={it.id} item={it} delay={(i % 3) * 120} />)}
        </div>
        <Reveal className="center more"><Link className="btn btn--dark" to="/menu">View the full menu</Link></Reveal>
      </div>
    </section>
  );
}

function Seasonal() {
  return (
    <section className="section seasonal">
      <div className="wrap seasonal__grid">
        <div>
          <Reveal as="p" className="eyebrow eyebrow--light">Seasonal specials</Reveal>
          <Reveal as="h2">Spooky in October, <em>festive in December</em></Reveal>
          <Reveal as="p">From hand-decorated Halloween chimney cakes to Christmas treats, there is always something new twisting on the spit. A warm chimney cake is the perfect winter treat — follow us on Instagram to see what&apos;s next.</Reveal>
          <Reveal className="seasonal__btns">
            <Link className="btn btn--gold" to="/menu">See the menu</Link>
            <a className="btn btn--ghost" href={BRAND.instagram} target="_blank" rel="noopener">Follow @twist_bake</a>
          </Reveal>
        </div>
        <ParallaxImg className="seasonal__img" factor={0.05} src="/assets/halloween.jpg" alt="Halloween decorated chimney cakes with white chocolate and sprinkles" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about">
      <div className="wrap about__grid">
        <div className="about__media">
          <ParallaxImg className="about__img" factor={0.07} src="/assets/baked-rows-2.jpg" alt="Freshly baked chimney cakes cooling in rows" />
          <Reveal className="about__badge" delay={200}><img src="/assets/logo-badge.png" alt="Twist & Bake" /></Reveal>
        </div>
        <div>
          <Reveal as="p" className="eyebrow">Our story</Reveal>
          <Reveal as="h2">Friendly service, <em>golden results.</em></Reveal>
          <Reveal as="p">Twist &amp; Bake is a Hungarian bakery on Bristol Road in Selly Oak, serving fresh chimney cones and cakes. Our guests love the warm atmosphere, the friendly staff and the variety on the menu — and our soft-serve chimney cake ice cream.</Reveal>
          <Reveal><Link className="link" to="/about">Read our story <span>→</span></Link></Reveal>
          <div className="stats">
            {STATS.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => setI((x) => (x + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="section reviews">
      <div className="wrap">
        <Reveal className="reviews__head">
          <p className="eyebrow eyebrow--light">What people say</p>
          <p className="reviews__stars" aria-label="4.8 out of 5">★★★★★ <b>4.8</b> on Google · 240 reviews</p>
        </Reveal>
        <div className="reviews__stage">
          {REVIEWS.map((r, n) => (
            <blockquote key={n} className={n === i ? 'on' : ''}>
              <p>“{r.text}”</p>
              <cite>— {r.who}</cite>
            </blockquote>
          ))}
        </div>
        <div className="reviews__dots">
          {REVIEWS.map((_, n) => <button key={n} aria-label={`Review ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />)}
        </div>
      </div>
    </section>
  );
}

function VisitBand() {
  return (
    <section className="section visitband">
      <div className="wrap visitband__grid">
        <div>
          <Reveal as="p" className="eyebrow">Come and say hello</Reveal>
          <Reveal as="h2">Find us on <em>Bristol Road</em></Reveal>
          <Reveal as="address">{BRAND.address[0]}<br />{BRAND.address[1]}</Reveal>
          <Reveal as="p" className="fine">Open until 10:30 pm. Hours can vary, so check Google or call before you travel.</Reveal>
          <Reveal className="vb__btns">
            <a className="btn btn--dark" href={BRAND.map} target="_blank" rel="noopener">Get directions</a>
            <a className="btn btn--outline" href={BRAND.tel}>Call {BRAND.phone}</a>
          </Reveal>
        </div>
        <Reveal className="visitband__card">
          <img src="/assets/logo-badge.png" alt="Twist & Bake" />
          <p>Chimney cakes · Ice cream · Churros</p>
          <Link className="link" to="/visit">Plan your visit <span>→</span></Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <How />
      <Highlights />
      <Seasonal />
      <About />
      <Reviews />
      <VisitBand />
    </>
  );
}
