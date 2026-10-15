import { useEffect, useMemo, useState } from 'react'
import { categories, featuredSlugs, getPhotosForProject, getProject, highlights, newsletterSections, photos, projects } from './data'

const heroImage = '/assets/photobook/photo-105.jpg'

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }
  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="M6 6l12 12"/><path d="M18 6 6 18"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    filter: <><path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 9h16"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21Z"/><path d="M4 5.5v15"/></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m4 17 5-5 3.5 3 2.5-2 5 4"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    external: <><path d="M14 4h6v6"/><path d="m20 4-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></>
  }
  return <svg {...common}>{paths[name]}</svg>
}

function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Link({ href, children, className = '', onClick }) {
  return <a href={href} className={className} onClick={(event) => {
    if (href.startsWith('/')) {
      event.preventDefault()
      navigate(href)
    }
    onClick?.()
  }}>{children}</a>
}

function LogoMark() {
  return <Link href="/" className="brand" aria-label="The Sabatian home">
    <span className="brand-mark"><span>S</span></span>
    <span className="brand-copy"><strong>THE SABATIAN</strong><small>NG-CDF SABATIA · 2022—2026</small></span>
  </Link>
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  const links = [['/', 'Home'], ['/about', 'About']]
  return <header className="site-header">
    <div className="header-inner">
      <LogoMark />
      <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        {links.map(([href, label]) => <Link key={href} href={href} className="nav-link" onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}><Icon name={open ? 'close' : 'menu'} /></button>
    </div>
  </header>
}

function Footer() {
  return <footer className="site-footer">
    <div className="footer-main shell">
      <div className="footer-brand"><LogoMark /><p>A visual archive of the Sabatia NG-CDF development journey, built from The Sabatian 2022–2026 newsletter and photobook.</p></div>
      <div className="footer-column"><span className="footer-label">Discover</span><Link href="/category/education">Education</Link><Link href="/category/infrastructure">Infrastructure</Link><Link href="/category/youth-and-sports">Youth &amp; Sports</Link></div>
      <div className="footer-column"><span className="footer-label">Context</span><Link href="/about">About Sabatia</Link><Link href="/contact">Contact</Link><a href="https://www.ngcdf.go.ke/" target="_blank" rel="noreferrer">NG-CDF website <Icon name="external" size={13}/></a></div>
    </div>
    <div className="footer-bottom shell"><span>© The Sabatian · NG-CDF Sabatia · 2022—2026</span><span>Source-led. Community-focused.</span></div>
  </footer>
}

function Eyebrow({ children }) { return <span className="eyebrow">{children}</span> }
function ArrowLink({ href, children }) { return <Link href={href} className="arrow-link">{children}<Icon name="arrow" size={16}/></Link> }
function SectionTitle({ eyebrow, title, body, action }) { return <div className="section-heading"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{body && <p>{body}</p>}</div>{action}</div> }
function Image({ src, alt, className = '' }) { return <img className={className} src={src} alt={alt} loading="lazy" onError={(event) => { event.currentTarget.style.background = '#dfe8e4' }} /> }

function ProjectCard({ project, featured = false }) {
  const photo = getPhotosForProject(project)[0]
  return <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
    <Link href={`/projects/${project.slug}`} className="project-card-image">
      {photo ? <Image src={photo.src} alt={photo.caption} /> : <div className="image-placeholder"><Icon name="image" size={26}/></div>}
      <span className="card-index">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
    </Link>
    <div className="project-card-body">
      <div className="card-meta"><span>{project.category}</span>{project.location && <span><Icon name="pin" size={13}/>{project.location.split(',')[0]}</span>}</div>
      <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
      <p>{project.excerpt}</p>
      <ArrowLink href={`/projects/${project.slug}`}>View project story</ArrowLink>
    </div>
  </article>
}

function HomePage() {
  const featured = featuredSlugs.map(getProject).filter(Boolean)
  return <>
    <main>
      <section className="hero" style={{ '--hero-image': `url(${heroImage})` }}>
        <div className="hero-shade" />
        <div className="hero-content shell">
          <div className="hero-kicker"><span className="live-dot"/> The Sabatian · 2022—2026</div>
          <h1>Development is measured in the journeys people can now make.</h1>
          <p className="hero-dek">A visual record of Sabatia Constituency’s projects, places, and people — from classrooms and laboratories to bridges, roads, water, electricity, and community life.</p>
          <div className="hero-actions"><Link href="/projects" className="button button-primary">Explore all projects <Icon name="arrow" size={17}/></Link><Link href="/photobook" className="button button-ghost">Open the photobook <Icon name="image" size={16}/></Link></div>
        </div>
        <div className="hero-caption shell"><span>Chavakali–Eregi Road</span><span>Sabatia Constituency · Vihiga County</span></div>
      </section>

      <section className="intro-section shell section-pad">
        <div className="intro-aside"><Eyebrow>01 / The setting</Eyebrow><span className="vertical-note">SABATIA AT A GLANCE</span></div>
        <div className="intro-copy"><h2>A constituency of dense settlement, young ambition, and everyday movement.</h2><p>Sabatia is nestled in the heart of Vihiga County, anchored in agriculture, education, and enterprise. It is a fast-growing community where every development decision responds to real pressure on land, schools, health facilities, and infrastructure.</p><ArrowLink href="/about">Read the constituency profile</ArrowLink></div>
        <div className="intro-fact"><strong>38%</strong><span>Youth share of registered voters in the wider Vihiga County profile, as cited in the newsletter.</span></div>
      </section>

      <section className="stat-band">
        <div className="shell stats-grid">{highlights.map((item) => <div className="stat-item" key={item.value}><strong>{item.value}</strong><span>{item.label}</span><small>{item.note}</small></div>)}</div>
      </section>

      <section className="shell section-pad category-section">
        <SectionTitle eyebrow="02 / Explore Sabatia" title="Development, told through five themes." body="Choose a category to explore the projects, places, and people behind the story." />
        <CategoryCards />
      </section>

      <section className="shell section-pad featured-section">
        <SectionTitle eyebrow="03 / Featured stories" title="Stories from the archive" body="Explore selected projects that show how investment becomes a safer crossing, a brighter classroom, or a new route to opportunity." action={<ArrowLink href="/projects">Browse all stories</ArrowLink>} />
        <div className="project-grid project-grid-featured">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0}/>)}</div>
      </section>

      <section className="quote-section">
        <div className="shell quote-grid"><div className="quote-mark">“</div><blockquote>Meaningful development can only thrive where people feel safe, protected and connected to the institutions that serve them.</blockquote><div className="quote-credit">— The Sabatian, security and infrastructure section</div></div>
      </section>

      <section className="shell section-pad archive-teaser">
        <div className="photo-story"><div className="photo-story-image"><Image src="/assets/photobook/photo-074.jpg" alt="Sabatia KMTC at Kegondi" /></div><div className="photo-story-copy"><Eyebrow>03 / The photobook</Eyebrow><h2>Let the images tell the story.</h2><p>From storey buildings and school interiors to bridges, road works, electrical poles, teams, and trophies, the photobook follows the physical texture of the 2022–2026 programme.</p><ArrowLink href="/photobook">Browse 102 source photographs</ArrowLink></div></div>
      </section>

      <section className="newsletter-teaser">
        <div className="shell newsletter-teaser-grid"><div><Eyebrow>04 / The newsletter</Eyebrow><h2>The Sabatian — a development journey in print.</h2><p>The inaugural edition gathers messages, constituency context, project updates, achievements, and the shared work behind public investment.</p><ArrowLink href="/newsletter">Read the digital edition</ArrowLink></div><div className="newsletter-card"><span className="newsletter-number">01</span><span className="newsletter-card-label">Edition</span><strong>A new chapter in Sabatia’s development journey</strong><span className="newsletter-card-date">2022—2026 · NG-CDF Sabatia</span></div></div>
      </section>
    </main>
  </>
}

const categoryInfo = [
  { title: 'Education', slug: 'education', match: ['Education'], desc: 'Classrooms, laboratories, bursaries, and better places to learn.', image: 'photo-005.jpg' },
  { title: 'Security', slug: 'security', match: ['Security'], desc: 'Local administration, community safety, and public lighting.', image: 'photo-078.jpg' },
  { title: 'Infrastructure', slug: 'infrastructure', match: ['Infrastructure', 'Electrification', 'Water', 'Housing & Trade'], desc: 'Roads, bridges, water, electricity, markets, and essential links.', image: 'photo-088.jpg' },
  { title: 'Youth and Sports', slug: 'youth-and-sports', match: ['Youth & Sports'], desc: 'The Sloya Cup, youth talent, and community initiatives.', image: 'photo-101.jpg' },
  { title: 'Healthcare', slug: 'healthcare', match: ['Health'], desc: 'Health training, facility access, and documented health interventions.', image: 'photo-074.jpg' }
]

function CategoryCards() {
  return <div className="category-grid">{categoryInfo.map((item, index) => {
    const count = projects.filter((project) => item.match.includes(project.category)).length
    return <Link href={`/category/${item.slug}`} className="category-card" key={item.slug}>
      <div className="category-card-image"><Image src={`/assets/photobook/${item.image}`} alt={`${item.title} projects in Sabatia`} /><span className="category-number">0{index + 1}</span><span className="category-explore">Explore <Icon name="arrow" size={16}/></span></div>
      <div className="category-card-copy"><span>{count} archive {count === 1 ? 'story' : 'stories'}</span><h3>{item.title}</h3><p>{item.desc}</p></div>
    </Link>
  })}</div>
}

function CategoryPage({ slug }) {
  const category = categoryInfo.find((item) => item.slug === slug)
  if (!category) return <NotFound />
  const items = projects.filter((project) => category.match.includes(project.category))
  return <main className="page-main shell category-page">
    <section className="page-hero"><div><Link href="/" className="back-link"><Icon name="arrow" size={16}/> Home</Link><Eyebrow>Sabatia development stories</Eyebrow><h1>{category.title}</h1><p>{category.desc} Browse the documented projects and open any story for its source details and photographs.</p></div><div className="page-hero-note"><strong>{items.length}</strong><span>related stories</span><small>From the supplied Sabatian newsletter and photobook.</small></div></section>
    <section className="category-intro"><p>Explore {category.title.toLowerCase()} projects documented across Sabatia Constituency. Story details are kept close to the available source material; missing information is not guessed.</p></section>
    <div className="directory-summary"><span><strong>{items.length}</strong> {items.length === 1 ? 'story' : 'stories'}</span><span>Photographs and source notes included where available</span></div>
    <section className="project-grid directory-grid">{items.map((project) => <ProjectCard project={project} key={project.slug}/>)}</section>
    <div className="category-back"><ArrowLink href="/">Explore all categories</ArrowLink></div>
  </main>
}

function ProjectsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All categories')
  const [location, setLocation] = useState('All locations')
  const locations = useMemo(() => [...new Set(projects.map((project) => project.location).filter(Boolean))].sort(), [])
  const filtered = useMemo(() => projects.filter((project) => {
    const searchable = `${project.name} ${project.location} ${project.category} ${project.description}`.toLowerCase()
    return searchable.includes(query.toLowerCase()) && (category === 'All categories' || project.category === category) && (location === 'All locations' || project.location === location)
  }), [query, category, location])
  return <main className="page-main shell">
    <section className="page-hero"><div><Eyebrow>Project directory / 2022—2026</Eyebrow><h1>Every project, one living archive.</h1><p>Search the named projects and source sections from The Sabatian. Filter by category or location, then open a project story for the verified context and photographs.</p></div><div className="page-hero-note"><strong>{projects.length}</strong><span>archive entries</span><small>Consolidated from the supplied newsletter and photobook.</small></div></section>
    <section className="directory-controls" aria-label="Project filters"><label className="search-field"><Icon name="search" size={19}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, schools, roads…" aria-label="Search projects"/></label><label className="select-field"><Icon name="filter" size={17}/><select value={category} onChange={(event) => setCategory(event.target.value)}><option>All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label><label className="select-field"><Icon name="pin" size={17}/><select value={location} onChange={(event) => setLocation(event.target.value)}><option>All locations</option>{locations.map((item) => <option key={item}>{item}</option>)}</select></label></section>
    <div className="directory-summary"><span><strong>{filtered.length}</strong> {filtered.length === 1 ? 'entry' : 'entries'} shown</span><span>Source-backed archive · no invented facts</span></div>
    <section className="project-grid directory-grid">{filtered.map((project) => <ProjectCard key={project.slug} project={project}/>)}{filtered.length === 0 && <div className="empty-state"><Icon name="search" size={28}/><h2>No matching project</h2><p>Try a broader search or clear one of the filters.</p><button className="text-button" onClick={() => { setQuery(''); setCategory('All categories'); setLocation('All locations') }}>Clear filters</button></div>}</section>
  </main>
}

function ProjectPage({ slug }) {
  const project = getProject(slug)
  if (!project) return <NotFound />
  const projectPhotos = getPhotosForProject(project)
  const related = projects.filter((item) => item.slug !== project.slug && item.category === project.category).slice(0, 3)
  const lead = projectPhotos[0]
  return <main className="project-page">
    <section className="project-hero shell"><div className="project-hero-copy"><Link href="/projects" className="back-link"><Icon name="arrow" size={16}/> Back to all projects</Link><Eyebrow>{project.category} · Project story</Eyebrow><h1>{project.name}</h1><p className="project-lede">{project.excerpt}</p><div className="project-meta-list"><span><Icon name="pin" size={15}/>{project.location}</span><span><Icon name="calendar" size={15}/>{project.status}</span></div></div><div className="project-hero-image">{lead ? <Image src={lead.src} alt={lead.caption}/> : <div className="image-placeholder"><Icon name="image" size={32}/></div>}<span className="image-label">Source photograph · {lead?.source || 'The Sabatian'}</span></div></section>
    <section className="project-body shell"><div className="story-rail"><span>Archive entry</span><strong>{String(projects.indexOf(project) + 1).padStart(2, '0')}</strong><span>{project.category}</span></div><div className="story-content"><div className="story-intro"><p>{project.description}</p>{project.stats && <div className="project-stat-row">{project.stats.map((stat) => <span key={stat}>{stat}</span>)}</div>}{project.story && <div className="story-longform"><Eyebrow>Full story</Eyebrow>{project.story.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>}{project.testimonials && <div className="story-testimonials"><Eyebrow>Voices from the story</Eyebrow>{project.testimonials.map((quote) => <blockquote key={quote}>{quote}</blockquote>)}</div>}</div><div className="story-columns"><div><Eyebrow>Why it matters</Eyebrow><h2>{project.purpose}</h2></div><div><p>Every story here stays close to the ground: the places, people, and outcomes that the supplied materials make clear. Where a detail is not available, we leave it out rather than fill the gap.</p><p className="source-note">Source note: {project.source}</p></div></div>{projectPhotos.length > 0 && <div className="project-gallery"><div className="gallery-heading"><Eyebrow>Supporting photographs</Eyebrow><span>{projectPhotos.length} source {projectPhotos.length === 1 ? 'image' : 'images'}</span></div><div className="project-gallery-grid">{projectPhotos.map((photo) => <Image key={photo.id} src={photo.src} alt={photo.caption}/>)}</div></div>}</div></section>
    {related.length > 0 && <section className="shell related-section"><SectionTitle eyebrow="Continue the story" title={`More in ${project.category.toLowerCase()}`} action={<ArrowLink href="/projects">Back to directory</ArrowLink>}/><div className="project-grid">{related.map((item) => <ProjectCard key={item.slug} project={item}/>)}</div></section>}
  </main>
}

function PhotoBookPage() {
  const [filter, setFilter] = useState('All photographs')
  const [active, setActive] = useState(null)
  const filters = ['All photographs', ...new Set(photos.map((photo) => photo.category))]
  const visible = filter === 'All photographs' ? photos : photos.filter((photo) => photo.category === filter)
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return <main className="page-main shell photobook-page">
    <section className="page-hero photo-hero"><div><Eyebrow>Photo book / Source archive</Eyebrow><h1>Places, people, and the texture of progress.</h1><p>The supplied photobook is presented here as an image-led archive. Captions stay close to the printed source; when a specific project name is not available, the image remains associated with its source section rather than being guessed.</p></div><div className="page-hero-note"><strong>102</strong><span>source photographs</span><small>Extracted from the supplied photobook PDF.</small></div></section>
    <div className="photo-filter-row" role="tablist" aria-label="Filter photobook by category">{filters.map((item) => <button key={item} className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div>
    <div className="photo-grid">{visible.map((photo, index) => <button className="photo-tile" key={photo.id} onClick={() => setActive(photo)} aria-label={`Open photograph: ${photo.caption}`}><Image src={photo.src} alt={photo.caption}/><span className="photo-tile-overlay"><small>{String(index + 1).padStart(2, '0')}</small><strong>{photo.section}</strong><em>{photo.caption}</em></span></button>)}</div>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photobook image viewer" onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close image viewer"><Icon name="close" size={22}/></button><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><Image src={active.src} alt={active.caption}/><div className="lightbox-caption"><Eyebrow>{active.section} · {active.source}</Eyebrow><p>{active.caption}</p></div></div></div>}
  </main>
}

function NewsletterPage() {
  return <main className="page-main shell newsletter-page"><section className="newsletter-cover"><div className="newsletter-cover-copy"><Eyebrow>The Sabatian · Inaugural edition</Eyebrow><h1>A new chapter in Sabatia’s development journey.</h1><p>Turn the pages of the 2022–2026 story: constituency context, leadership messages, project milestones, and a shared vision for what comes next.</p><div className="cover-meta"><span><Icon name="calendar" size={15}/>2022—2026</span><span><Icon name="book" size={15}/>NG-CDF Sabatia</span></div></div><div className="cover-art"><Image src="/assets/photobook/photo-105.jpg" alt="Aerial road through Sabatia landscape"/><div className="cover-stamp">THE<br/>SABATIAN</div></div></section><section className="newsletter-glance"><div><Eyebrow>At a glance</Eyebrow><h2>A fast-growing constituency, anchored in agriculture, education, and enterprise.</h2></div><div className="glance-copy"><p>Sabatia is home to approximately 131,628 residents according to the 2019 National Census, with population projections exceeding 150,000. Across 111 km², a notably young and densely settled community is making room for its future.</p><ArrowLink href="/about">Read the full profile</ArrowLink></div></section><section className="newsletter-stories">{newsletterSections.map((section, index) => <article className="newsletter-story" key={section.title}><div className="story-number">0{index + 1}</div><div><Eyebrow>{section.eyebrow}</Eyebrow><h2>{section.title}</h2><p>{section.body}</p></div>{index === 0 && <Image src="/assets/photobook/photo-103.jpg" alt="Sabatia NG-CDF group photograph"/>}{index === 1 && <Image src="/assets/photobook/photo-027.jpg" alt="Community leadership and students"/>}</article>)}</section><section className="newsletter-updates"><SectionTitle eyebrow="Project updates" title="The stories that make the edition tangible" body="Follow these stories from the printed edition into the project archive." action={<ArrowLink href="/projects">Browse all projects</ArrowLink>}/><div className="project-grid">{['cbc-junior-secondary-classrooms', 'senior-schools-stem-laboratories', 'markets-and-affordable-housing', 'sloya-cup'].map((slug) => <ProjectCard project={getProject(slug)} key={slug}/>)}</div></section></main>
}

function AboutPage() {
  return <main className="page-main shell about-page"><section className="page-hero"><div><Eyebrow>About the archive</Eyebrow><h1>A public record of shared investment.</h1><p>This site translates The Sabatian 2022–2026 newsletter and photobook into a living, searchable archive of Sabatia NG-CDF projects.</p></div></section><section className="about-grid"><div className="about-lead"><span className="big-dropcap">S</span><p>Sabatia Constituency is in Vihiga County, with a community described in the newsletter as vibrant, fast-growing, and anchored in agriculture, education, and enterprise. Across four years, the supplied materials document investments in modern classrooms, laboratories, Junior Secondary School facilities, sanitation infrastructure, school renovations, bursaries, security, public administration, roads, bridges, water, electrification, health training, markets, housing, social welfare, sport, environmental conservation, and community life.</p></div><div className="about-facts"><div><strong>2022—2026</strong><span>Newsletter period</span></div><div><strong>Vihiga</strong><span>County context</span></div><div><strong>Source-led</strong><span>No invented facts</span></div></div></section><section className="principles-section"><SectionTitle eyebrow="How to read this archive" title="Evidence first, context always."/><div className="principles-grid"><div><span>01</span><h3>One source of truth</h3><p>Project entries consolidate repeated mentions across the newsletter and photobook so the directory stays useful without multiplying duplicates.</p></div><div><span>02</span><h3>Photographs stay close</h3><p>Images are associated with a named project only where the source makes that link clear. Otherwise they remain with their printed photobook section.</p></div><div><span>03</span><h3>Uncertainty is visible</h3><p>Missing figures, names, or dates are left out. Visible spelling differences are retained as source notes instead of silently being changed.</p></div></div></section></main>
}

function ContactPage() {
  return <main className="page-main shell contact-page"><section className="contact-panel"><div><Eyebrow>Contact</Eyebrow><h1>Keep the record moving.</h1><p>The supplied source materials do not include a public postal address, email address, or telephone number. To keep this archive accurate, no contact details have been invented here.</p></div><div className="contact-note"><Icon name="book" size={22}/><strong>Source note</strong><span>Contact information was not included in the supplied newsletter or photobook.</span></div></section><section className="contact-links"><h2>Explore the archive instead</h2><div className="contact-link-grid"><Link href="/projects"><span>Project directory</span><Icon name="arrow" size={17}/></Link><Link href="/photobook"><span>Photo book</span><Icon name="arrow" size={17}/></Link><Link href="/newsletter"><span>Newsletter edition</span><Icon name="arrow" size={17}/></Link></div></section></main>
}

function NotFound() { return <main className="page-main shell empty-state page-not-found"><Eyebrow>404 / Not found</Eyebrow><h1>This page is not in the archive.</h1><p>Try the project directory or return to the home page.</p><div><Link href="/" className="button button-primary">Return home <Icon name="arrow" size={17}/></Link><Link href="/projects" className="button button-secondary">Browse projects</Link></div></main> }

export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => { const update = () => setPath(window.location.pathname); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update) }, [])
  const projectMatch = path.match(/^\/projects\/([^/]+)\/?$/)
  const categoryMatch = path.match(/^\/category\/([^/]+)\/?$/)
  let page = <NotFound />
  if (path === '/' || path === '') page = <HomePage />
  else if (path === '/projects' || path === '/projects/') page = <ProjectsPage />
  else if (projectMatch) page = <ProjectPage slug={projectMatch[1]} />
  else if (categoryMatch) page = <CategoryPage slug={categoryMatch[1]} />
  else if (path === '/photobook' || path === '/photobook/') page = <PhotoBookPage />
  else if (path === '/newsletter' || path === '/newsletter/') page = <NewsletterPage />
  else if (path === '/about' || path === '/about/') page = <AboutPage />
  else if (path === '/contact' || path === '/contact/') page = <ContactPage />
  return <div className="app-shell"><SiteHeader />{page}<Footer /></div>
}
