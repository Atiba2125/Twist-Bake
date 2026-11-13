import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ext } from '../components/Ui.jsx';
import { BRAND } from '../data.js';

const WAYS = [
  { n: '01', title: 'Drop in', text: 'Pop into Twist & Bake on Bristol Road, Selly Oak and watch the chimney cakes come off the spit.' },
  { n: '02', title: 'Call ahead', text: 'Planning a bigger order? Call us on 07555 202500 and we’ll have it ready.' },
  { n: '03', title: 'Pick up or delivery', text: 'Pick-up and delivery options are shown on our Google listing — search “Twist & Bake” on Google Maps.' },
];

export default function Visit() {
  return (
    <>
      <PageHero
        title="Visit us" eyebrow="Bristol Road, Selly Oak"
        lead="Fresh chimney cakes, ice cream and churros — and only a 20-minute drive from the Birmingham German Markets."
      />

      <section className="section">
        <div className="wrap visit">
          <div className="visit__cards">
            <Reveal className="vcard">
              <h3>Address</h3>
              <address>{BRAND.address[0]}<br />{BRAND.address[1]}</address>
              <a className="btn btn--dark" href={BRAND.map} {...ext}>Get directions</a>
            </Reveal>
            <Reveal className="vcard" delay={100}>
              <h3>Opening hours</h3>
              <p className="vcard__big">Open late</p>
              <p>Closes at <b>10:30 pm</b>. Hours can vary by day, so please check Google or call before you travel.</p>
            </Reveal>
            <Reveal className="vcard" delay={200}>
              <h3>Call us</h3>
              <a className="vcard__big" href={BRAND.tel}>{BRAND.phone}</a>
              <p>Typical spend: £1–10 per person.</p>
            </Reveal>
            <Reveal className="vcard" delay={300}>
              <h3>Follow along</h3>
              <p>See new bakes, seasonal specials and behind-the-scenes videos.</p>
              <div className="vcard__links">
                <a href={BRAND.instagram} {...ext}>Instagram @twist_bake</a>
              </div>
            </Reveal>
          </div>
          <Reveal className="visit__map">
            <iframe title="Twist & Bake on Google Maps" src={BRAND.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </section>

      <section className="section ways">
        <div className="wrap">
          <SectionHead eyebrow="Three ways to enjoy">Drop in, call ahead <em>or order out</em></SectionHead>
          <div className="wgrid">
            {WAYS.map((w, i) => (
              <Reveal key={w.n} className="way" delay={i * 120}>
                <span>{w.n}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
