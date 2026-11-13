import React, { useRef } from 'react';
import Reveal from './Reveal.jsx';
import { ChimneyIcon } from './Effects.jsx';
import { useCountUp, useInView, useParallax, prefersReducedMotion } from '../hooks/useMotion.js';
import { MARQUEE } from '../data.js';

export const ext = { target: '_blank', rel: 'noopener' };

export function SectionHead({ eyebrow, children, light, center = true }) {
  return (
    <div className={`section__head${center ? '' : ' left'}`}>
      <Reveal as="p" className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</Reveal>
      <Reveal as="h2">{children}</Reveal>
    </div>
  );
}

export function ParallaxImg({ className = '', factor, delay, ...imgProps }) {
  const imgRef = useRef(null);
  useParallax(imgRef, factor);
  return (
    <Reveal className={className} delay={delay}>
      <img ref={imgRef} loading="lazy" {...imgProps} />
    </Reveal>
  );
}

export function Stat({ end, dec, prefix, suffix, text, label, delay }) {
  const [ref, seen] = useInView();
  const v = useCountUp(end || 0, seen, { dec });
  return (
    <div ref={ref} className={`reveal stat${seen ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <b>{prefix || ''}{text || v}{suffix || ''}</b>
      <span>{label}</span>
    </div>
  );
}

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((m, i) => (
          <React.Fragment key={i}><span>{m}</span><ChimneyIcon className="marquee__icon" /></React.Fragment>
        ))}
      </div>
    </div>
  );
}

/** Product card — tilts toward the pointer. Items without a photo get a branded tile. */
export function ProductCard({ item, delay = 0 }) {
  const ref = useRef(null);
  const [vref, seen] = useInView();
  const canTilt = typeof window !== 'undefined' && !prefersReducedMotion() && window.matchMedia('(hover:hover)').matches;
  const move = (e) => {
    if (!canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <article
      ref={(n) => { ref.current = n; vref.current = n; }}
      className={`pcard reveal${seen ? ' in' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      onMouseMove={move} onMouseLeave={leave}
    >
      <div className={`pcard__img${item.img ? '' : ' pcard__img--empty'}`}>
        {item.img ? <img src={item.img} alt={item.name} loading="lazy" /> : <ChimneyIcon className="pcard__icon" />}
        {item.tag && <span className="pcard__tag">{item.tag}</span>}
      </div>
      <div className="pcard__body">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
      </div>
    </article>
  );
}
