import { useEffect, useState } from 'react'
import logo from './assets/logo.webp'
import AutoVideo from './components/AutoVideo.jsx'
import Reveal from './components/Reveal.jsx'
import VideoCarousel from './components/VideoCarousel.jsx'
import { Clock, Ghost, Heart, Phone, Pin, Sparkle, WhatsApp } from './components/Icons.jsx'
import { BOXES, CONTACT, EVENTS, FAQ, GRATINS, HERO_VIDEOS, MENU, PRODUCTS, REVIEWS, SHOWCASE } from './data.js'

const YEAR = new Date().getFullYear()

const NAV = [
  ['#menu', 'La carte'],
  ['#box', 'Les box'],
  ['#gratins', 'Nouveautés'],
  ['#evenements', 'Réceptions'],
  ['#avis', 'Avis'],
]

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <Menu />
        <Boxes />
        <Gratins />
        <Events />
        <Reviews />
        <Faq />
        <Order />
      </main>
      <Footer />
      <a className="fab" href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="Commander sur WhatsApp">
        <WhatsApp width={28} height={28} />
      </a>
    </>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width="44" height="44" />
          <span>
            Les Mignardises <em>Salées</em>
          </span>
        </a>
        <nav className="nav" aria-label="Navigation principale">
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn--gold btn--sm" href="#commander" onClick={() => setOpen(false)}>
            Commander
          </a>
        </nav>
        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow">
            <Sparkle width={14} height={14} /> Traiteur fait maison · {CONTACT.city}
          </Reveal>
          <Reveal as="h1" delay={80} className="hero__title">
            Les mignardises
            <span className="script">Salées</span>
          </Reveal>
          <Reveal as="p" delay={160} className="hero__lead">
            Des saveurs salées pour tous les goûts et budgets, à {CONTACT.city}. Batbouts, samossas, mini burgers, nems,
            mini pizzas, tacos, lasagnes… préparés à la commande, pour vos envies comme pour vos réceptions.
          </Reveal>
          <Reveal delay={240} className="hero__ctas">
            <a className="btn btn--gold" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              <WhatsApp /> Commander maintenant
            </a>
            <a className="btn btn--ghost" href="#menu">
              Découvrir la carte
            </a>
          </Reveal>
          <Reveal as="ul" delay={320} className="hero__facts">
            <li>
              <strong>5,7k</strong>
              <span>abonnés gourmands</span>
            </li>
            <li>
              <strong>24h</strong>
              <span>pour commander à l’avance</span>
            </li>
            <li>
              <strong>dès 1 200</strong>
              <span>FCFA les 5 pièces</span>
            </li>
          </Reveal>
        </div>

        <div className="hero__stage" aria-hidden="true">
          {HERO_VIDEOS.map((id, i) => (
            <div className={`phone phone--${i}`} key={id}>
              <AutoVideo id={id} />
            </div>
          ))}
          <div className="seal">
            <svg viewBox="0 0 200 200" className="seal__ring">
              <defs>
                <path id="ring" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#ring" textLength="486" lengthAdjust="spacing">
                  fait maison • avec amour • fait maison • avec amour •
                </textPath>
              </text>
            </svg>
            <img src={logo} alt="" />
          </div>
          <div className="price-tag">
            <span>Mini box</span>
            <strong>5 000 FCFA</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const row = [...PRODUCTS, ...PRODUCTS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((p, i) => (
          <span key={i}>
            {p} <Sparkle width={14} height={14} />
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionHead({ kicker, title, script, children, light = false }) {
  return (
    <Reveal className={`section-head ${light ? 'section-head--light' : ''}`}>
      <p className="kicker">{kicker}</p>
      <h2>
        {title} {script && <span className="script">{script}</span>}
      </h2>
      {children && <p className="section-head__lead">{children}</p>}
    </Reveal>
  )
}

function Showcase() {
  return (
    <section className="section section--dark showcase" id="videos">
      <div className="container">
        <SectionHead kicker="Tout juste sortis du four" title="Ça donne" script="envie…" light>
          Chaque plateau est préparé à la commande. Faites défiler : tout est filmé en cuisine, sans filtre.
        </SectionHead>
      </div>
      <VideoCarousel slides={SHOWCASE} />
    </section>
  )
}

function Menu() {
  return (
    <section className="section section--cream" id="menu">
      <div className="container">
        <SectionHead kicker="La carte" title="Nos mignardises" script="salées">
          Des bouchées pour tous les budgets, à commander à la pièce ou par dizaine.
        </SectionHead>

        <div className="menu-grid">
          {MENU.map((item, i) => (
            <Reveal as="article" className="menu-card" key={item.n} delay={(i % 3) * 90}>
              <span className="menu-card__n">{item.n}</span>
              <div className="menu-card__body">
                <h3>{item.name}</h3>
                <p>{item.note}</p>
                <ul>
                  {item.prices.map(([qty, price]) => (
                    <li key={qty}>
                      <span>{qty}</span>
                      <i aria-hidden="true" />
                      <strong>
                        {price} <small>FCFA</small>
                      </strong>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal as="aside" className="menu-card menu-card--note" delay={180}>
            <Clock width={28} height={28} />
            <h3>Commandez 24h à l’avance</h3>
            <p>Tout est préparé à la commande pour vous garantir une fraîcheur parfaite.</p>
            <a className="btn btn--brown btn--sm" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              <WhatsApp /> Réserver ma commande
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Boxes() {
  return (
    <section className="section section--dark" id="box">
      <div className="container">
        <SectionHead kicker="Formules" title="Les box" script="gourmandes" light>
          Un peu de tout, beaucoup de bonheur : nos assortiments prêts à partager.
        </SectionHead>
        <div className="box-grid">
          {BOXES.map((b, i) => (
            <Reveal as="article" className="box-card" key={b.name} delay={i * 120}>
              <div className="box-card__media">
                <AutoVideo id={b.video} label={b.name} />
                <span className="box-card__tag">{b.tag}</span>
              </div>
              <div className="box-card__body">
                <h3>{b.name}</h3>
                <ul>
                  {b.items.map((it) => (
                    <li key={it}>
                      <Sparkle width={12} height={12} /> {it}
                    </li>
                  ))}
                </ul>
                <div className="box-card__foot">
                  <p className="box-card__price">
                    {b.price}
                    <small>FCFA</small>
                  </p>
                  <a className="btn btn--gold btn--sm" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    Je la veux
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gratins() {
  return (
    <section className="section section--cream gratins" id="gratins">
      <div className="container gratins__grid">
        <div className="gratins__copy">
          <Reveal as="p" className="badge-new">
            Nouveau menu
          </Reveal>
          <Reveal as="h2" delay={80}>
            Lasagnes <span className="amp">&</span> <span className="script">Pasticcio</span>
          </Reveal>
          <Reveal as="p" delay={140} className="section-head__lead">
            Le goût du fait maison, généreusement gratiné. Des plats gourmands à partager… ou pas.
          </Reveal>
          <Reveal delay={200} className="gratins__prices">
            <div>
              <span>Lasagnes</span>
              <strong>3 000</strong>
              <small>FCFA</small>
            </div>
            <div>
              <span>Pasticcio</span>
              <strong>3 000</strong>
              <small>FCFA</small>
            </div>
          </Reveal>
          <Reveal as="blockquote" delay={260} className="gratins__quote">
            « Les pasticcios mashallah, c’est autre chose vraiment et c’est succulent 🔥 »
            <cite>— une cliente conquise</cite>
          </Reveal>
          <Reveal delay={320}>
            <a className="btn btn--brown" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              <WhatsApp /> Commander mon gratin
            </a>
          </Reveal>
        </div>
        <Reveal className="gratins__media" delay={120}>
          <VideoCarousel slides={GRATINS} variant="compact" delay={3200} />
        </Reveal>
      </div>
    </section>
  )
}

function Events() {
  const half = Math.ceil(EVENTS.length / 2)
  const rows = [EVENTS.slice(0, half), EVENTS.slice(half)]
  return (
    <section className="section section--dark events" id="evenements">
      <div className="container">
        <SectionHead kicker="Sur commande" title="Vos fêtes," script="en grand" light>
          Baptêmes, anniversaires, réunions de famille ou de bureau : des plateaux par dizaines, dressés avec soin et
          prêts à servir.
        </SectionHead>
      </div>
      <div className="reel">
        {rows.map((row, r) => (
          <div className={`reel__row ${r ? 'reel__row--reverse' : ''}`} key={r}>
            {[...row, ...row].map((id, i) => (
              <div className="reel__item" key={id + i}>
                <AutoVideo id={id} label="Plateaux pour réception" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="container events__cta">
        <a className="btn btn--gold" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
          <WhatsApp /> Demander un devis pour mon événement
        </a>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="section section--cream" id="avis">
      <div className="container">
        <SectionHead kicker="Ils en parlent" title="Vos retours," script="notre moteur">
          « Vos retours sont le moteur de ma motivation. » — Amina
        </SectionHead>
        <div className="reviews">
          {REVIEWS.map((r, i) => (
            <Reveal as="figure" className="review" key={i} delay={i * 110}>
              <Heart className="review__icon" width={22} height={22} />
              <blockquote>{r.quote}</blockquote>
              <figcaption>
                <strong>{r.author}</strong>
                <span>{r.about}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section section--cream faq" id="faq">
      <div className="container faq__inner">
        <SectionHead kicker="Questions fréquentes" title="Commander à" script="Niamey">
          Tout ce qu’il faut savoir avant de passer commande.
        </SectionHead>
        <div className="faq__list">
          {FAQ.map(([q, a], i) => (
            <Reveal as="details" className="faq__item" key={q} delay={i * 60} open={i === 0}>
              <summary>
                <h3>{q}</h3>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Order() {
  const steps = [
    ['Choisissez', 'Vos mignardises à la pièce, une box ou un plateau pour votre événement.'],
    ['Réservez 24h avant', 'Par WhatsApp, appel ou Snapchat : on confirme ensemble quantités et horaire.'],
    ['Régalez-vous', `Récupérez votre commande près de la ${CONTACT.place}, encore toute chaude.`],
  ]
  return (
    <section className="section section--dark order" id="commander">
      <div className="container order__grid">
        <div>
          <SectionHead kicker="Commander" title="Une envie ?" script="On s’en occupe." light />
          <ol className="steps">
            {steps.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 100}>
                <span className="steps__n">{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="contact-card" delay={120}>
          <img src={logo} alt="Logo Les Mignardises Salées" className="contact-card__logo" />
          <a className="contact-line" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            <WhatsApp /> <span>WhatsApp</span> <strong>{CONTACT.phoneDisplay}</strong>
          </a>
          <a className="contact-line" href={`tel:${CONTACT.phone}`}>
            <Phone /> <span>Infoline</span> <strong>{CONTACT.phoneDisplay}</strong>
          </a>
          <a className="contact-line" href={CONTACT.snapchat} target="_blank" rel="noreferrer">
            <Ghost /> <span>Snapchat</span> <strong>{CONTACT.snapHandle}</strong>
          </a>
          <a className="contact-line" href={CONTACT.maps} target="_blank" rel="noreferrer">
            <Pin /> <span>Retrait</span> <strong>{CONTACT.place}</strong>
          </a>
          <a className="btn btn--gold btn--block" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            <WhatsApp /> Passer commande
          </a>
          <p className="contact-card__note">
            <Clock width={16} height={16} /> Pensez à commander 24h à l’avance
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          Les Mignardises <span className="script">Salées</span>
        </p>
        <p>Traiteur et mignardises salées faites maison à {CONTACT.city}, Niger.</p>
        <address className="footer__address">
          Retrait près de la {CONTACT.place}, {CONTACT.city} · <a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a> ·{' '}
          <a href={CONTACT.snapchat} target="_blank" rel="noreferrer">
            Snapchat {CONTACT.snapHandle}
          </a>
        </address>
        <p className="footer__small">© {YEAR} Les Mignardises Salées</p>
      </div>
    </footer>
  )
}
