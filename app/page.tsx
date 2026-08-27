"use client";

import { useEffect, useState } from "react";

const whatsapp = "https://wa.me/51941075992?text=Hola%20NUBA%2C%20quiero%20impulsar%20mi%20marca";
const instagram = "https://instagram.com/nuba.agenciacreativa";
const email = "mailto:nubaagenciacreativa@gmail.com";

const services = [
  ["01", "Gestión de redes", "Planificamos, creamos y gestionamos tu presencia digital para que tu marca sea constante, relevante y cercana."],
  ["02", "Creación de contenido", "Conceptos, fotografía, video y piezas que cuentan tu historia con una voz propia y una estética memorable."],
  ["03", "Campañas publicitarias", "Estrategia, creatividad y optimización para transformar atención en resultados reales para tu negocio."],
  ["04", "Identidad visual", "Construimos sistemas visuales coherentes: desde el concepto y logo hasta el universo completo de tu marca."],
  ["05", "Diseño para negocios", "Piezas digitales e impresas que elevan cada punto de contacto con tus clientes."],
  ["06", "Contenido con IA", "Integramos nuevas herramientas creativas para producir contenido ágil, original y alineado a tu marca."],
];

const method = [
  ["01", "Descubre", "Escuchamos tu historia, objetivos y esencia."],
  ["02", "Planifica", "Diseñamos la ruta creativa y estratégica."],
  ["03", "Crea", "Convertimos las ideas en contenido con intención."],
  ["04", "Conecta", "Llevamos tu mensaje a las personas correctas."],
  ["05", "Impulsa", "Medimos, aprendemos y hacemos crecer tu marca."],
];

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <main>
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a className="logo" href="#inicio" onClick={close} aria-label="NUBA, inicio">NUBA<span>.</span></a>
        <nav className={open ? "navlinks open" : "navlinks"} aria-label="Navegación principal">
          <a href="#servicios" onClick={close}>Servicios</a>
          <a href="#proyectos" onClick={close}>Proyectos</a>
          <a href="#metodo" onClick={close}>Método</a>
          <a href="#nosotras" onClick={close}>Nosotras</a>
          <a className="nav-cta" href="#contacto" onClick={close}>Hablemos</a>
        </nav>
        <button className={open ? "menu active" : "menu"} onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-copy reveal">
          <p className="eyebrow">Agencia creativa · Lima, Perú</p>
          <h1>Ideas que <em>conectan.</em><br />Estrategias que impulsan.</h1>
          <p className="hero-text">Creamos marcas con intención y contenido que se siente auténtico. Tu esencia, convertida en una presencia que deja huella.</p>
          <div className="hero-actions">
            <a className="button dark" href={whatsapp} target="_blank" rel="noreferrer">Cuéntanos tu idea <Arrow /></a>
            <a className="text-link" href="#proyectos">Conoce nuestro trabajo <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-card card-a"><span>crea</span><b>con<br />inten<br />ción.</b></div>
          <div className="art-card card-b"><i>N</i><small>Ideas que encuentran<br />su propia forma.</small></div>
          <div className="spark">✦</div>
        </div>
        <div className="scroll-note">DESCUBRE NUBA <span /></div>
      </section>

      <section className="manifesto section">
        <p className="section-tag">NUESTRA ESENCIA</p>
        <div className="manifesto-grid">
          <h2>No hacemos ruido.<br />Creamos <em>conexiones.</em></h2>
          <div><p>En NUBA creemos que una marca memorable no necesita gritar. Necesita una idea clara, una identidad honesta y una historia bien contada.</p><p>Unimos estrategia y creatividad para construir marcas que se sienten tan bien como se ven.</p></div>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-head"><div><p className="section-tag">LO QUE HACEMOS</p><h2>Todo lo que tu marca<br />necesita para <em>crecer.</em></h2></div><p>Soluciones creativas pensadas como un ecosistema: coherentes, estratégicas y hechas a tu medida.</p></div>
        <div className="service-grid">
          {services.map(([n, title, description]) => <article className="service" key={n}><span>{n}</span><div className="service-icon">{n === "01" ? "◎" : n === "02" ? "◒" : n === "03" ? "↗" : n === "04" ? "✦" : n === "05" ? "□" : "⌁"}</div><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="projects section" id="proyectos">
        <div className="section-head light"><div><p className="section-tag">PROYECTOS SELECCIONADOS</p><h2>Ideas que tomaron <em>forma.</em></h2></div><p>Cada proyecto nace de una mirada distinta. Esta es una muestra de cómo convertimos estrategia en universos visuales.</p></div>
        <div className="project-grid">
          <article className="project project-one"><div className="mock-brand"><b>alma</b><span>skincare consciente</span><div className="bottle">ALMA<small>serum botánico</small></div></div><footer><div><h3>Alma Skincare</h3><p>Identidad visual · Contenido</p></div><span>01</span></footer></article>
          <article className="project project-two"><div className="mock-brand"><span className="cafe-mark">C<span>●</span>RA</span><small>CAFÉ DE ORIGEN</small><div className="coffee-copy">Pausa.<br />Respira.<br />Disfruta.</div></div><footer><div><h3>Cora Café</h3><p>Branding · Estrategia digital</p></div><span>02</span></footer></article>
          <article className="project project-three"><div className="mock-brand"><span className="studio-label">ESTUDIO FLORA</span><div className="flower">✾</div><i>objetos que<br />habitan contigo</i></div><footer><div><h3>Estudio Flora</h3><p>Dirección creativa · Social media</p></div><span>03</span></footer></article>
        </div>
        <p className="project-note">Próximamente, nuevas historias por contar.</p>
      </section>

      <section className="method section" id="metodo">
        <div className="method-intro"><p className="section-tag">MÉTODO NUBA</p><h2>Un proceso con<br /><em>dirección y propósito.</em></h2><p>No creemos en fórmulas copiadas. Nuestro método se adapta a cada marca para que cada decisión tenga sentido.</p></div>
        <div className="method-list">{method.map(([n, title, description]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{description}</p><i>→</i></article>)}</div>
      </section>

      <section className="about section" id="nosotras">
        <div className="about-art" aria-hidden="true"><div className="about-shape"><span>N</span></div><p>ESTRATEGIA · CREATIVIDAD · CONEXIÓN</p></div>
        <div className="about-copy"><p className="section-tag">SOBRE NUBA</p><h2>Pequeña agencia.<br /><em>Grandes ideas.</em></h2><p>NUBA nace para acompañar a marcas que quieren hacer las cosas con intención. Somos un estudio creativo boutique: cercano, curioso y obsesionado con los detalles que hacen la diferencia.</p><p>Trabajamos contigo, no solo para ti. Porque las mejores ideas aparecen cuando hay confianza, conversación y una visión compartida.</p><a className="text-link" href={instagram} target="_blank" rel="noreferrer">Conócenos en Instagram <Arrow /></a></div>
      </section>

      <section className="cta" id="contacto">
        <div className="cta-spark">✦</div><p className="section-tag">¿TIENES UN PROYECTO EN MENTE?</p><h2>Hagamos algo<br /><em>increíble juntas.</em></h2><p>Cuéntanos tu idea y descubramos todo lo que podemos crear para tu marca.</p><a className="button cream" href={whatsapp} target="_blank" rel="noreferrer">Empecemos a crear <Arrow /></a>
      </section>

      <footer className="footer">
        <div className="footer-top"><div><a className="logo" href="#inicio">NUBA<span>.</span></a><p>Agencia creativa para marcas<br />que quieren dejar huella.</p></div><div><b>Navega</b><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#metodo">Método</a><a href="#nosotras">Nosotras</a></div><div><b>Conversemos</b><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={instagram} target="_blank" rel="noreferrer">Instagram</a><a href={email}>Correo</a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} NUBA Agencia Creativa</span><span>Hecho con intención en Lima, Perú ✦</span></div>
      </footer>
      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">⌁<span>Hablemos</span></a>
    </main>
  );
}
