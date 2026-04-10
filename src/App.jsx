import React, { useState, useEffect, useRef } from 'react'
import logoImg from './assets/astrocet-logo.jpg'
import gal1 from './assets/gallery/1.JPG'
import gal2 from './assets/gallery/2.JPG'
import gal3 from './assets/gallery/3.JPG'
import gal4 from './assets/gallery/4.JPG'
import gal5 from './assets/gallery/5.JPG'
import gal6 from './assets/gallery/6.JPG'
import gal7 from './assets/gallery/7.JPG'
import gal8 from './assets/gallery/8.JPG'
import './App.css'

/* ════════════════════════════════════════════════════════════
   SVG ICONS
════════════════════════════════════════════════════════════ */
const LinkedInIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const InstagramIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)
const RocketIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)
const TelescopeIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <circle cx="14" cy="10" r="2"/><path d="M21 2 7 16"/><path d="m16 13-1.5 5"/><path d="m9 19 1.5-5"/><path d="m3 6 7-4"/>
    <path d="M5 8 3 6l4-2"/>
  </svg>
)
const EyeIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)
const StarIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width={22} height={22}>
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width={22} height={22}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
  </svg>
)
const MegaphoneIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="m3 11 19-9-9 19-2-8-8-2z"/>
  </svg>
)
const GlobeIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const MailIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const MapPinIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const CheckCircleIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

/* ════════════════════════════════════════════════════════════
   STAR FIELD — mouse-reactive, colour responds to cursor zone
════════════════════════════════════════════════════════════ */
function StarField() {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const scrollRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W = (canvas.width  = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const stars = Array.from({ length: 280 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.6 + 0.2,
      speed: Math.random() * 0.08 + 0.01,
      tw: Math.random() * Math.PI * 2,
      twS: Math.random() * 0.018 + 0.005,
      hue: Math.random() > 0.8 ? 'violet' : 'cyan',
    }))

    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    const onMouse  = e => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    const onScroll = () => { scrollRef.current = window.scrollY }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('scroll', onScroll, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const { x: mx, y: my } = mouseRef.current
      const dist = (x, y) => Math.hypot(mx - x, my - y)

      stars.forEach(s => {
        s.tw += s.twS
        const glow = 0.4 + 0.6 * Math.sin(s.tw)
        // subtle parallax
        const dx = (mx - W / 2) * 0.00008 * s.r
        const dy = (my - H / 2) * 0.00008 * s.r
        s.x += dx + s.speed * 0.02
        s.y += dy + s.speed * 0.015
        if (s.y > H) s.y = 0
        if (s.y < 0) s.y = H
        if (s.x > W) s.x = 0
        if (s.x < 0) s.x = W

        // change brightness near cursor
        const d = dist(s.x, s.y)
        const proximity = Math.max(0, 1 - d / 180)

        const baseAlpha = 0.2 + 0.6 * glow
        ctx.globalAlpha = Math.min(1, baseAlpha + proximity * 0.5)

        if (proximity > 0.3) {
          // glow when near cursor
          ctx.shadowBlur = 8 + proximity * 12
          ctx.shadowColor = s.hue === 'violet' ? '#9b5de5' : '#3df5ff'
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fillStyle = s.hue === 'violet' ? '#b39ddb' : '#a0f0ff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * (1 + proximity * 0.8), 0, Math.PI * 2)
        ctx.fill()
      })

      // draw faint connection lines near cursor
      ctx.shadowBlur = 0
      stars.forEach((s, i) => {
        const d = dist(s.x, s.y)
        if (d < 140) {
          for (let j = i + 1; j < stars.length; j++) {
            const t = stars[j]
            const dt = dist(t.x, t.y)
            if (dt < 140) {
              const lineDist = Math.hypot(s.x - t.x, s.y - t.y)
              if (lineDist < 90) {
                ctx.globalAlpha = 0.08 * (1 - lineDist / 90)
                ctx.strokeStyle = '#3df5ff'
                ctx.lineWidth = 0.5
                ctx.beginPath()
                ctx.moveTo(s.x, s.y)
                ctx.lineTo(t.x, t.y)
                ctx.stroke()
              }
            }
          }
        }
      })

      animRef.current = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="star-canvas" />
}

/* ════════════════════════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════════════════════════ */
function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const hov     = useRef(false)

  useEffect(() => {
    let raf
    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY } }
    const onEnter = () => { hov.current = true; ringRef.current?.classList.add('hover-state') }
    const onLeave = () => { hov.current = false; ringRef.current?.classList.remove('hover-state') }

    const loop = () => {
      const d = dotRef.current, r = ringRef.current
      if (d) d.style.transform = `translate(${pos.current.x - 3}px,${pos.current.y - 3}px)`
      if (r) {
        ring.current.x += (pos.current.x - ring.current.x) * 0.12
        ring.current.y += (pos.current.y - ring.current.y) * 0.12
        r.style.transform = `translate(${ring.current.x - 19}px,${ring.current.y - 19}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    window.addEventListener('mousemove', onMove)

    const addListeners = () => {
      document.querySelectorAll('a,button,.ev-card,.about-card,.member-card,.ecomm-card,.ann-card,.soc-btn,.team-tab').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

/* ════════════════════════════════════════════════════════════
   MAGNETIC BUTTON
════════════════════════════════════════════════════════════ */
function MagBtn({ children, className, onClick, href, target }) {
  const ref = useRef(null)
  const move = e => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width  / 2) * 0.3
    const y = (e.clientY - r.top  - r.height / 2) * 0.3
    ref.current.style.transform = `translate(${x}px,${y}px)`
  }
  const reset = () => { ref.current.style.transform = 'translate(0,0)' }
  const Tag = href ? 'a' : 'button'
  return (
    <Tag ref={ref} className={`mag-btn ${className || ''}`}
      onMouseMove={move} onMouseLeave={reset}
      onClick={onClick} href={href} target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >{children}</Tag>
  )
}

/* ════════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════ */
const EVENTS = [
  { title: 'Pictura Astra', date: 'Nov 2023', desc: 'A hands-on astrophotography workshop held in collaboration with AASTRO Kerala. Participants learnt to capture deep-sky objects and nightscapes, guided by astrophotographer Sarath Prabhav J.', tag: 'Workshop' },
  { title: 'Expedition Aditya', date: 'Nov 2023', desc: 'A solar observation workshop conducted during AstroWeek, in partnership with Shasthra Shen. Attendees got a rare look at sunspots through filtered telescopes, with activity points awarded on registration.', tag: 'Workshop' },
  { title: 'Our Cosmic Neighbours', date: 'Feb 2024', desc: 'An engaging public lecture delivered by Dr. Sarita Vig, Professor at IIST Trivandrum, held at CETAA Hall as part of the Global Science Festival Kerala Outreach Programme.', tag: 'Lecture' },
  { title: 'AstroWeek — Into the Horizon', date: 'Nov 2023', desc: 'AstroCET\'s flagship multi-day astronomy festival — a week-long celebration of space science at CET, featuring workshops, competitions, night-sky observation sessions and public outreach, co-organised with AASTRO Kerala and Shasthra Shen.', tag: 'Festival' },
  { title: 'Website Launch', date: '2024', desc: 'AstroCET goes digital. The launch of our official website marked a new chapter — a centralised hub for events, announcements, resources and club news, making astronomy more accessible to the entire CET community.', tag: 'Milestone' },
  { title: 'Technical Team Formation', date: '2024', desc: 'A dedicated Technical Team was established within AstroCET to drive innovation — building tools, conducting research and developing programmes that bring a more hands-on, technology-driven dimension to our astronomy work.', tag: 'Milestone' },
]

const CURRENT_ECOMM = [
  { name: 'NAVEEN VARMA',   role: 'Chairperson' },
  { name: 'SAURAV',         role: 'Vice Chairperson / Tech Lead' },
  { name: 'FIDHA V',        role: 'Vice Chairperson' },
  { name: 'ABHIRAMI PS',    role: 'Finance Officer' },
  { name: 'DURGA M',        role: 'Secretary' },
]

const CURRENT_DEPTS = [
  {
    name: 'Web Design Team',
    members: [
      { name: 'ABHINAV M V', lead: true },
      { name: 'SUHAIL' }, { name: 'SRAVAN' }, { name: 'JAYALAKSHMI' },
      { name: 'ALTHAF' }, { name: 'ASWIN KRISHNA' },
    ],
  },
  {
    name: 'Media Team',
    members: [
      { name: 'ANEENA', lead: true },
      { name: 'SUVEDHA' }, { name: 'RIZANA' }, { name: 'VISMAYA' },
      { name: 'NIHA' }, { name: 'AJINA' }, { name: 'HIBA' },
      { name: 'ELENA' }, { name: 'JITHIN' }, { name: 'VIGNESH' },
      { name: 'HARISHANKAR' },
    ],
  },
  {
    name: 'Content Team',
    members: [
      { name: 'NEELASHRI', lead: true },
      { name: 'ABHINANDHA' }, { name: 'ANAMIKA' }, { name: 'ANURAGH' },
      { name: 'ASHFAAQ' }, { name: 'RENJITH' }, { name: 'LINTO' },
      { name: 'NEHA' }, { name: 'SREEHARI' }, { name: 'ADITHYAN' },
      { name: 'SREEVARDHAN' },
    ],
  },
  {
    name: 'Events & Outreach Team',
    members: [
      { name: 'SARAH ABRAHAM', lead: true, subrole: 'Event Lead' },
      { name: 'AJITH JEEJO', lead: true, subrole: 'Outreach Lead' },
      { name: 'MALAVIKA' }, { name: 'ASWIN' }, { name: 'ARAVIND' },
      { name: 'AKSHAY' }, { name: 'AKHILJITH' },
    ],
  },
  {
    name: 'Marketing Team',
    members: [
      { name: 'KENZ ES', lead: true },
      { name: 'ABHIJITH S' }, { name: 'ASLAM' }, { name: 'ARJUN' },
      { name: 'NAYANA' }, { name: 'NIHALA' }, { name: 'JIGMATH' },
      { name: 'NITHU' },
    ],
  },
]

const PREV_ECOMM = [
  { name: 'CAREN LAURETTE',  role: 'CEO' },
  { name: 'HARIKRISHNAN S',  role: 'COO' },
  { name: 'AKSHAY SANTHOSH', role: 'CMO' },
  { name: 'AHSAN JAVAD',     role: 'CFO' },
  { name: 'SAURAV S',        role: 'Content Head' },
  { name: 'LAKSHMI R',       role: 'Media Lead' },
  { name: 'RANJANA C J',     role: 'Web Lead' },
  { name: 'FATHIMA NIZAR',   role: 'Program Officer' },
  { name: 'NAVEEN VARMA',    role: 'Program Officer' },
  { name: 'FIDHA V',         role: 'Program Officer' },
  { name: 'ABHIRAMI',        role: 'Program Officer' },
]

/* helper — first letters of name */
const initials = name => name.split(' ').slice(0, 2).map(w => w[0]).join('')

/* ════════════════════════════════════════════════════════════
   TEAM MEMBER CARD
════════════════════════════════════════════════════════════ */
function MemberCard({ name, role, lead = false, small = false }) {
  return (
    <div className={`member-card ${lead ? 'lead' : ''} reveal`}>
      <div className="member-avatar-sm">{initials(name)}</div>
      <div className="tm-name" style={{ fontSize: small ? '0.78rem' : '0.88rem' }}>{name}</div>
      {role && <div className="tm-role">{role}</div>}
      <div className="tm-links">
        <a href="#" className="tm-link" aria-label="LinkedIn" title="LinkedIn">
          <LinkedInIcon size={12} />
        </a>
        <a href="#" className="tm-link" aria-label="Instagram" title="Instagram">
          <InstagramIcon size={12} />
        </a>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════
   MAIN APP
════════════════════════════════════════════════════════════ */
export default function App() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeNav,  setActiveNav]  = useState('home')
  const [teamTab,    setTeamTab]    = useState('current')
  const [email,      setEmail]      = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [heroIn,     setHeroIn]     = useState(false)
  const [visible,    setVisible]    = useState(new Set())
  const heroRef = useRef(null)

  /* hero entrance */
  useEffect(() => { const t = setTimeout(() => setHeroIn(true), 80); return () => clearTimeout(t) }, [])

  /* scroll spy */
  useEffect(() => {
    const sections = ['home', 'about', 'events', 'team', 'contact']
    const handler = () => {
      const scrollY = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollY) { setActiveNav(sections[i]); break }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* intersection observer for .reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    const run = () => document.querySelectorAll('.reveal:not(.vis)').forEach(el => obs.observe(el))
    run()
    const mo = new MutationObserver(run)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { obs.disconnect(); mo.disconnect() }
  }, [])

  /* hero parallax */
  useEffect(() => {
    const el = heroRef.current
    const onScroll = () => { if (el) el.style.transform = `translateY(${window.scrollY * 0.22}px)` }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const subscribe = () => { if (email.includes('@')) setSubscribed(true) }

  const NAV = [
    { id: 'home',    label: 'Home',    num: '00' },
    { id: 'about',   label: 'About',   num: '01' },
    { id: 'events',  label: 'Events',  num: '02' },
    { id: 'team',    label: 'Team',    num: '03' },
    { id: 'contact', label: 'Contact', num: '04' },
  ]

  return (
    <div className="app">
      <Cursor />
      <StarField />
      <div className="noise-overlay" />

      {/* ── NAVBAR ──────────────────────────────────────────── */}
      <nav className="navbar">
        <button className="nav-logo-wrap" onClick={() => go('home')} style={{ background: 'none', border: 'none', padding: 0 }}>
          <img src={logoImg} alt="AstroCET" className="nav-logo-img" />
          <div>
            <div className="nav-logo-text">ASTROCET</div>
            <div className="nav-logo-sub">Astronomy Club · CET</div>
          </div>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV.map(n => (
            <li key={n.id}>
              <button className={`nav-link ${activeNav === n.id ? 'active' : ''}`} onClick={() => go(n.id)}>
                <span className="num">{n.num}</span>{n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="menu-btn" onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="hero-left" ref={heroRef}>
          <div className={`hero-badge ${heroIn ? 'in' : ''}`}>
            <span className="hero-badge-dot" />
            Astronomy Club &nbsp;·&nbsp; Est. 2019 &nbsp;·&nbsp; CET Trivandrum
          </div>
          <h1 className={`hero-h1 ${heroIn ? 'in' : ''}`}>
            <span className="l1">REACH FOR</span>
            <span className="l2">THE STARS</span>
            <span className="l3">College of Engineering Trivandrum</span>
          </h1>
          <p className={`hero-p ${heroIn ? 'in' : ''}`}>
            AstroCET is the astronomy club of CET — a community of curious minds pushing the boundaries of
            celestial knowledge since 2019. From stargazing nights to research-driven workshops, we make
            the universe feel a little closer.
          </p>
          <div className={`hero-btns ${heroIn ? 'in' : ''}`}>
            <MagBtn className="btn-primary" onClick={() => go('events')}>
              Our Events <ArrowRightIcon />
            </MagBtn>
            <MagBtn className="btn-ghost" onClick={() => go('about')}>
              Who We Are
            </MagBtn>
          </div>
        </div>

        <div className={`hero-right ${heroIn ? 'in' : ''}`}>
          <div className="orb-wrap">
            <div className="orb-body" />
            <div className="orb-ring" />
            <div className="orb-ring2" />

            <div className="orb-dot d1" />
            <div className="orb-dot d2" />
            <div className="orb-dot d3" />
          </div>
          <div className="hero-stat" style={{ top: '40px', right: '0px' }}>
            <div className="stat-num">5+</div>
            <div className="stat-label">Years Active</div>
          </div>
          <div className="hero-stat" style={{ bottom: '60px', left: '0px' }}>
            <div className="stat-num">50+</div>
            <div className="stat-label">Members</div>
          </div>
          <div className="hero-stat" style={{ bottom: '160px', right: '0px' }}>
            <div className="stat-num">20+</div>
            <div className="stat-label">Events</div>
          </div>
        </div>


      </section>

      {/* ── STATS BAR ───────────────────────────────────────── */}
      <div className="stats-bar">
        {[
          { num: '2019', desc: 'Founded' },
          { num: '5+',   desc: 'Years of Exploration' },
          { num: '20+',  desc: 'Events Conducted' },
          { num: '50+',  desc: 'Active Members' },
          { num: '6',    desc: 'Core Teams' },
        ].map((s, i) => (
          <div key={i} className="stat-item reveal">
            <div className="stat-big">{s.num}</div>
            <div className="stat-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className="about-section">
        <div className="glow-blob blob-violet" style={{ width: 400, height: 400, top: '10%', left: '-100px' }} />
        <div className="about-inner">
          <div className="about-left reveal">
            <p className="sec-eyebrow">About AstroCET</p>
            <div className="big-quote">
              From a small hobby group to Kerala's most passionate <span>astronomy community.</span>
            </div>
            <p>
              Born in 2019 within the walls of the College of Engineering Trivandrum, AstroCET started as
              a handful of stargazers with big questions. Today it is a thriving club where engineering
              meets the cosmos — running events, building skills, and nurturing a shared wonder for
              everything beyond our atmosphere.
            </p>
          </div>
          <div className="about-right">
            {[
              {
                icon: <RocketIcon size={20} />,
                title: 'Our Story',
                text: 'What began in 2019 as an informal gathering of astronomy enthusiasts at CET has grown into one of Kerala\'s most active student-led astronomy clubs — running public events, academic collaborations, and hands-on exploration programmes.',
              },
              {
                icon: <EyeIcon size={20} />,
                title: 'Our Vision',
                text: 'A future where every student at CET looks up at the night sky and sees not just stars, but possibilities. We aspire to be a lasting bridge between engineering education and the boundless frontier of space science.',
              },
              {
                icon: <TelescopeIcon size={20} />,
                title: 'Our Mission',
                text: 'To cultivate a deep curiosity for the cosmos through workshops, outreach and research-driven activities — equipping students with both the wonder and the technical grounding to engage with astronomy meaningfully.',
              },
            ].map((c, i) => (
              <div key={i} className="about-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="about-card-head">
                  <div className="about-card-ico">{c.icon}</div>
                  <h3>{c.title}</h3>
                </div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── EVENTS ──────────────────────────────────────────── */}
      <section id="events" className="events-section">
        <div className="glow-blob blob-cyan" style={{ width: 500, height: 500, top: '5%', right: '-150px' }} />
        <div className="events-head">
          <div>
            <p className="sec-eyebrow">Events</p>
            <h2 className="sec-title reveal">NIGHTS SPENT<br /><span className="acc">UNDER THE STARS</span></h2>
          </div>
        </div>
        <div className="events-grid">
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              className={`ev-card reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="ev-card-num">{String(i + 1).padStart(2, '0')}</div>
              <span className={`ev-tag ${ev.tag === 'Lecture' ? 'lecture' : ev.tag === 'Festival' || ev.tag === 'Milestone' ? 'outreach' : ''}`}>
                {ev.tag}
              </span>
              <div className="ev-title">{ev.title}</div>
              <div className="ev-date">{ev.date}</div>
              <p className="ev-desc">{ev.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── ANNOUNCEMENTS ───────────────────────────────────── */}
      <section className="ann-section">
        <p className="sec-eyebrow">Announcements</p>
        <h2 className="sec-title reveal">WHAT'S <span className="acc-v">HAPPENING</span></h2>
        <div className="ann-grid">
          {[
            {
              icon: <GlobeIcon size={22} />,
              title: 'AstroCET Is Now Online',
              desc: 'Our new website is live — a dedicated space for the CET astronomy community to stay updated on events, explore resources, and connect with everything AstroCET has to offer. Bookmark it and check back often.',
            },
            {
              icon: <MegaphoneIcon size={22} />,
              title: 'Technical Team Is Here',
              desc: 'AstroCET has launched a specialised Technical Team to deepen our engagement with space science through technology. From software tools to observational research, the team is already hard at work.',
            },
          ].map((a, i) => (
            <div key={i} className="ann-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="ann-icon-wrap">{a.icon}</div>
              <div className="ann-body">
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TEAM ────────────────────────────────────────────── */}
      <section id="team" className="team-section">
        <div className="glow-blob blob-violet" style={{ width: 450, height: 450, bottom: '10%', right: '-100px' }} />
        <p className="sec-eyebrow">The Team</p>
        <h2 className="sec-title reveal">THE PEOPLE <span className="acc">BEHIND THE LENS</span></h2>

        <div className="team-tabs">
          {[
            { key: 'current', label: '2024–25 · Current' },
            { key: 'prev',    label: '2023–24 · Previous' },
          ].map(t => (
            <button
              key={t.key}
              className={`team-tab ${teamTab === t.key ? 'active' : ''}`}
              onClick={() => setTeamTab(t.key)}
            >{t.label}</button>
          ))}
        </div>

        {teamTab === 'current' && (
          <>
            {/* ECOMM */}
            <div className="team-ecomm">
              <p className="sec-eyebrow" style={{ marginBottom: 16 }}>Executive Committee</p>
              <div className="ecomm-grid">
                {CURRENT_ECOMM.map((m, i) => (
                  <div key={i} className="ecomm-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                    <div className="tm-avatar">{initials(m.name)}</div>
                    <div className="tm-name">{m.name}</div>
                    <div className="tm-role">{m.role}</div>
                    <div className="tm-links" style={{ marginTop: 14 }}>
                      <a href="#" className="tm-link" aria-label="LinkedIn"><LinkedInIcon size={14} /></a>
                      <a href="#" className="tm-link" aria-label="Instagram"><InstagramIcon size={14} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            {CURRENT_DEPTS.map((dept, di) => (
              <div key={di} className="dept-block">
                <div className="dept-title">{dept.name}</div>
                <div className="dept-members">
                  {dept.members.map((m, mi) => (
                    <MemberCard
                      key={mi}
                      name={m.name}
                      role={m.lead ? (m.subrole || 'Lead') : undefined}
                      lead={m.lead}
                      small
                    />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {teamTab === 'prev' && (
          <div>
            <p className="sec-eyebrow" style={{ marginBottom: 24 }}>Executive Committee 2023–24</p>
            <div className="prev-team-grid">
              {PREV_ECOMM.map((m, i) => (
                <div key={i} className="ecomm-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="tm-avatar">{initials(m.name)}</div>
                  <div className="tm-name">{m.name}</div>
                  <div className="tm-role">{m.role}</div>
                  <div className="tm-links" style={{ marginTop: 12 }}>
                    <a href="#" className="tm-link" aria-label="LinkedIn"><LinkedInIcon size={14} /></a>
                    <a href="#" className="tm-link" aria-label="Instagram"><InstagramIcon size={14} /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="section-divider" />

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section className="gallery-section">
        <p className="sec-eyebrow">Gallery</p>
        <h2 className="sec-title reveal">CAPTURED <span className="acc-v">MOMENTS</span></h2>
        <div className="gallery-masonry">
          {[gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8].map((src, i) => (
            <div key={i} className="gallery-item reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <img src={src} alt="" style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="glow-blob blob-cyan" style={{ width: 400, height: 400, bottom: '0', left: '-80px' }} />
        <div className="contact-inner">
          <div className="contact-left reveal">
            <p className="sec-eyebrow">Contact</p>
            <h2 className="sec-title">REACH <span className="acc">MISSION CONTROL</span></h2>
            <p>
              Want to collaborate, attend an event, or simply geek out about the cosmos?
              We'd love to hear from you. Find us on social media or drop us a line directly.
            </p>
            <div className="social-links">
              <MagBtn className="soc-btn" href="https://www.instagram.com/astro.cet/" target="_blank">
                <InstagramIcon size={18} /> Instagram
              </MagBtn>
              <MagBtn className="soc-btn" href="https://www.linkedin.com/company/astrocet" target="_blank">
                <LinkedInIcon size={18} /> LinkedIn
              </MagBtn>
            </div>
            <div className="contact-info" style={{ marginTop: 32 }}>
              <div className="contact-info-item">
                <MapPinIcon size={16} />
                College of Engineering Trivandrum, Kerala, India
              </div>
              <div className="contact-info-item">
                <MailIcon size={16} />
                astrocet@cet.ac.in
              </div>
            </div>
          </div>

          <div className="contact-right reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="sub-label">Join the Constellation</p>
            {subscribed ? (
              <div className="sub-done">
                <CheckCircleIcon size={16} style={{ marginRight: 8 }} />
                You're in orbit now. Welcome to AstroCET.
              </div>
            ) : (
              <div className="sub-form">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="sub-input"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && subscribe()}
                />
                <button className="sub-btn" onClick={subscribe}>
                  <ArrowRightIcon />
                </button>
              </div>
            )}
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: 12 }}>
              Be the first to know about upcoming events, observation nights and workshops.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-logo">
          <span className="footer-text">AstroCET · College of Engineering Trivandrum</span>
        </div>
        <div className="footer-text" style={{ textAlign: 'center' }}>
          Made with curiosity and caffeine by Jairaj R
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com/astro.cet/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="https://www.linkedin.com/company/astrocet" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}
