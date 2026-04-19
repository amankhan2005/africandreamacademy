import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

/* ─── CONSTANTS ─────────────────────────────────────────────────── */
const ACADEMY_LINKS = [
  { name: "About African Dream Academy", desc: "Our story, values & community",    path: "/academy/about",   icon: "school"  },
  { name: "History of the ADA School",   desc: "From our founding to today",       path: "/academy/history", icon: "history" },
  { name: "Liberia: Country Profile",    desc: "Context, culture & geography",     path: "/academy/liberia", icon: "globe"   },
  { name: "ADA School Videos",           desc: "See the academy in action",        path: "/academy/videos",  icon: "video"   },
  { name: "Dream Academy Blog",          desc: "News, stories & updates",          path: "/academy/blog",    icon: "blog"    },
];

const FOUNDATION_LINKS = [
  { name: "Founder's Welcome",  desc: "A message from our founder",    path: "/foundation/founder",  icon: "person"  },
  { name: "Our Mission",        desc: "Why we do what we do",          path: "/foundation/mission",  icon: "star"    },
  { name: "Impact at a Glance", desc: "Numbers that tell our story",   path: "/foundation/impact",   icon: "chart"   },
  { name: "Board of Directors", desc: "Leadership & governance",       path: "/foundation/board",    icon: "board"   },
  { name: "Contact",            desc: "Get in touch with us",          path: "/foundation/contact",  icon: "mail"    },
];

const CALL_OPTIONS = [
  { flag: "🇺🇸", label: "USA",     number: "+1-888-865-5217", href: "tel:+18888655217" },
  { flag: "🇱🇷", label: "Liberia", number: "231 202 002 656", href: "tel:231202002656" },
];

/* ─── ICONS ──────────────────────────────────────────────────────── */
const ICONS = {
  school:  <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#8B1A1A" strokeWidth="1.2"/><path d="M7 7v2M5 7h4" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  history: <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M2 12V4l5-3 5 3v8" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><rect x="5" y="8" width="4" height="4" rx="0.5" stroke="#8B1A1A" strokeWidth="1.2"/></svg>,
  globe:   <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><circle cx="7" cy="7" r="5.5" stroke="#8B1A1A" strokeWidth="1.2"/><path d="M7 1.5C7 1.5 4 5 4 7s1.3 3.5 3 3.5S10 9 10 7 7 1.5 7 1.5z" stroke="#8B1A1A" strokeWidth="1.1"/><path d="M1.5 7h11" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  video:   <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><rect x="1" y="2" width="12" height="9" rx="1.5" stroke="#8B1A1A" strokeWidth="1.2"/><path d="M5.5 5.5l3 2-3 2V5.5z" fill="#8B1A1A"/></svg>,
  blog:    <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M2 11V4.5L7 2l5 2.5V11" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round"/><path d="M4 7h6M4 9.5h4" stroke="#8B1A1A" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  person:  <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><circle cx="7" cy="5" r="3" stroke="#8B1A1A" strokeWidth="1.2"/><path d="M2 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  star:    <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M7 2l1.5 3 3.5.5-2.5 2.5.5 3.5L7 10l-3 1.5.5-3.5L2 5.5 5.5 5z" stroke="#8B1A1A" strokeWidth="1.2" strokeLinejoin="round"/></svg>,
  chart:   <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M2 10h2V6H2v4zM6 10h2V3H6v7zM10 10h2V7h-2v3z" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  board:   <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><rect x="1" y="5" width="5" height="8" rx="1" stroke="#8B1A1A" strokeWidth="1.2"/><rect x="8" y="2" width="5" height="11" rx="1" stroke="#8B1A1A" strokeWidth="1.2"/></svg>,
  mail:    <svg viewBox="0 0 14 14" fill="none" width="14" height="14"><path d="M2 3h10v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z" stroke="#8B1A1A" strokeWidth="1.2"/><path d="M2 3l5 4 5-4" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

/* ─── ANIMATION VARIANTS ─────────────────────────────────────────── */
const dropdownVariants = {
  hidden:  { opacity: 0, y: 6, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.15, ease: "easeOut" } },
  exit:    { opacity: 0, y: 4, scale: 0.97, transition: { duration: 0.1 } },
};

/* ─── useHoverMenu ───────────────────────────────────────────────── */
function useHoverMenu(delay = 180) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const onEnter = useCallback(() => { clearTimeout(timer.current); setOpen(true); }, []);
  const onLeave = useCallback(() => { timer.current = setTimeout(() => setOpen(false), delay); }, [delay]);
  return { open, onEnter, onLeave };
}

/* ─── CHEVRON ────────────────────────────────────────────────────── */
function Chev({ open }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s", flexShrink: 0 }}>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── DROPDOWN ───────────────────────────────────────────────────── */
function Dropdown({ links, label, isActive }) {
  return (
    <motion.div
      variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
      style={{
        position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
        background: "#fff", border: "1px solid #ede8e2", borderRadius: "14px",
        padding: "8px", minWidth: "260px", zIndex: 100,
        boxShadow: "0 16px 40px rgba(26,10,0,0.13), 0 2px 8px rgba(26,10,0,0.06)",
      }}
    >
      <div style={{ position: "absolute", top: "-7px", left: "50%", transform: "translateX(-50%)", width: "12px", height: "7px", overflow: "hidden" }}>
        <div style={{ width: "10px", height: "10px", background: "#fff", border: "1px solid #ede8e2", transform: "rotate(45deg)", margin: "3px auto 0" }} />
      </div>

      <div style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase",
        color: "#E8920A", padding: "6px 12px 4px", display: "flex", alignItems: "center", gap: "8px" }}>
        {label}
        <div style={{ flex: 1, height: "1px", background: "rgba(232,146,10,0.2)" }} />
      </div>

      {links.map((item) => (
        <Link key={item.path} to={item.path}
          style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "9px 12px", borderRadius: "8px", textDecoration: "none",
            background: isActive(item.path) ? "#fdf5ec" : "transparent",
            transition: "background .12s",
          }}
          onMouseEnter={(e) => { if (!isActive(item.path)) e.currentTarget.style.background = "#faf6f1"; }}
          onMouseLeave={(e) => { if (!isActive(item.path)) e.currentTarget.style.background = "transparent"; }}
        >
          <div style={{
            width: "30px", height: "30px", borderRadius: "7px",
            background: isActive(item.path) ? "#f5e8e8" : "#fdf5ec",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            {ICONS[item.icon]}
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: isActive(item.path) ? "#8B1A1A" : "#3d2b1a", lineHeight: 1.2 }}>
              {item.name}
            </div>
            <div style={{ fontSize: "11px", color: "#9a7a68", marginTop: "2px" }}>
              {item.desc}
            </div>
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

/* ─── DROPDOWN TRIGGER ───────────────────────────────────────────── */
function DropdownTrigger({ label, links, isActive }) {
  const { open, onEnter, onLeave } = useHoverMenu(200);
  const active = links.some((l) => isActive(l.path));
  return (
    <div style={{ position: "relative" }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button style={{
        display: "flex", alignItems: "center", gap: "5px",
        fontSize: "13.5px", fontWeight: open || active ? 600 : 500,
        color: open || active ? "#8B1A1A" : "#3d2b1a",
        background: open || active ? "#fdf5ec" : "transparent",
        border: "none", cursor: "pointer", padding: "7px 10px", borderRadius: "6px",
        transition: "background .13s, color .13s", fontFamily: "Inter, system-ui, sans-serif",
      }}>
        {label}
        <Chev open={open} />
      </button>
      <AnimatePresence>
        {open && <Dropdown links={links} label={label} isActive={isActive} />}
      </AnimatePresence>
    </div>
  );
}

/* ─── CALL BUTTON ────────────────────────────────────────────────── */
function CallButton() {
  const { open, onEnter, onLeave } = useHoverMenu(150);
  return (
    <div style={{ position: "relative" }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button style={{
        display: "flex", alignItems: "center", gap: "6px",
        padding: "8px 16px", border: `1px solid ${open ? "#8B1A1A" : "#d4c9be"}`,
        background: open ? "#fdf5ec" : "#fff", borderRadius: "6px",
        fontSize: "13px", fontWeight: 600, color: "#3d2b1a",
        cursor: "pointer", fontFamily: "Inter, system-ui, sans-serif", transition: "all .13s",
      }}>
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M12.5 9.5c-.8-.1-1.6-.3-2.3-.6-.4-.2-.9-.1-1.2.2l-1 1c-1.4-.8-2.5-1.9-3.3-3.3l1-1c.3-.3.4-.8.2-1.2C5.6 3.9 5.4 3.1 5.3 2.3 5.2 1.6 4.6 1 3.9 1H2c-.6 0-1.1.5-1 1.1.5 3.2 2 6 4.3 8.3 2.3 2.3 5.1 3.8 8.3 4.3.6.1 1.1-.4 1.1-1v-1.8c0-.7-.6-1.3-1.2-1.4z"
            stroke="#8B1A1A" strokeWidth="1.2" fill="none"/>
        </svg>
        Call Now
      </button>
      <AnimatePresence>
        {open && (
          <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit"
            style={{
              position: "absolute", right: 0, top: "calc(100% + 10px)",
              background: "#fff", border: "1px solid #ede8e2", borderRadius: "12px",
              padding: "8px", width: "240px", zIndex: 100,
              boxShadow: "0 16px 40px rgba(26,10,0,0.13)",
            }}>
            {CALL_OPTIONS.map((c) => (
              <a key={c.href} href={c.href}
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "8px", textDecoration: "none", transition: "background .12s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#faf6f1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ width: "34px", height: "34px", borderRadius: "7px", background: "#fdf5ec", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", lineHeight: 1, flexShrink: 0 }}>
                  {c.flag}
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#9a7a68", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{c.label}</div>
                  <div style={{ fontSize: "13.5px", color: "#1A0A00", fontWeight: 700, marginTop: "2px" }}>{c.number}</div>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── MOBILE MENU ITEM ───────────────────────────────────────────── */
function MobileNavItem({ item, isActive, onClose }) {
  return (
    <Link to={item.path} onClick={onClose}
      style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "10px", borderRadius: "8px", textDecoration: "none",
        background: isActive(item.path) ? "#fdf5ec" : "transparent",
        marginBottom: "2px",
      }}>
      <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#fdf5ec", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {ICONS[item.icon]}
      </div>
      <div>
        <div style={{ fontSize: "13.5px", fontWeight: 600, color: isActive(item.path) ? "#8B1A1A" : "#3d2b1a" }}>{item.name}</div>
        <div style={{ fontSize: "11px", color: "#9a7a68", marginTop: "1px" }}>{item.desc}</div>
      </div>
    </Link>
  );
}

/* ─── MAIN NAVBAR ────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const toggleSection = (key) => setExpanded((p) => (p === key ? null : key));
  const close = () => setMobileOpen(false);

  return (
    <header style={{ width: "100%", background: "#fff", position: "sticky", top: 0, zIndex: 50, fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Top bar */}
      <div
        style={{ background: "#8B1A1A", height: "34px", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 40px", gap: "16px" }}
        className="ada-topbar"
      >
        <a
          href="mailto:wendy@africandreamacademy.info"
          className="ada-topbar-email"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "11px", textDecoration: "none", fontWeight: 500, letterSpacing: "0.3px" }}
        >
          wendy@africandreamacademy.info
        </a>
        <span className="ada-topbar-divider" style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>|</span>
        {['Facebook', 'Instagram', 'Twitter'].map((s) => (
          <a
            key={s}
            href="#"
            className="ada-topbar-socials"
            style={{ color: "rgba(255,255,255,0.72)", fontSize: "11px", textDecoration: "none", fontWeight: 500 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F0B429"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.72)"; }}
          >
            {s}
          </a>
        ))}
      </div>

      {/* Main nav */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", borderBottom: "1px solid #ede8e2" }}
        className="ada-mainnav"
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img src="/images/logo.webp" alt="African Dream Academy" style={{ height: "52px", width: "auto" }} className="ada-logo-img" />
          <div>
            <div style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px", fontWeight: 700, color: "#1A0A00", lineHeight: 1.2 }} className="ada-logo-name">
              African Dream Academy
            </div>
            <div style={{ fontSize: "9px", color: "#8B1A1A", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "3px", fontWeight: 600 }}>
              Many Dreams · One Hope
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="ada-desktop-nav">
          <Link to="/"
            style={{
              fontSize: "13.5px", fontWeight: isActive("/") ? 600 : 500,
              color: isActive("/") ? "#8B1A1A" : "#3d2b1a",
              textDecoration: "none", padding: "7px 10px", borderRadius: "6px",
              background: isActive("/") ? "#fdf5ec" : "transparent",
            }}>
            Home
          </Link>
          <DropdownTrigger label="Academy"    links={ACADEMY_LINKS}    isActive={isActive} />
          <DropdownTrigger label="Foundation" links={FOUNDATION_LINKS} isActive={isActive} />
          <div style={{ width: "1px", height: "20px", background: "#ede8e2", margin: "0 6px" }} />
          <CallButton />
          <Link to="/foundation/contact"
            style={{
              padding: "9px 20px", background: "#8B1A1A", color: "#fff",
              borderRadius: "6px", fontSize: "13px", fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.3px", marginLeft: "4px",
              transition: "background .13s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#6e1414"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#8B1A1A"; }}
          >
            Support Us
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          style={{ background: "transparent", border: "none", cursor: "pointer", padding: "6px", display: "none" }}
          className="ada-hamburger"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen
              ? <path d="M5 5l12 12M17 5L5 17" stroke="#1A0A00" strokeWidth="1.8" strokeLinecap="round"/>
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="#1A0A00" strokeWidth="1.8" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            style={{ background: "#fff", borderBottom: "1px solid #ede8e2", overflow: "hidden" }}
          >
            <div style={{ padding: "8px 16px 20px" }}>

              <Link to="/" onClick={close}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 4px", borderBottom: "1px solid #f0ebe4", textDecoration: "none", marginBottom: "4px" }}>
                <span style={{ fontSize: "13.5px", fontWeight: 600, color: "#1A0A00" }}>Home</span>
              </Link>

              {[
                { key: "academy",    label: "Academy",    count: ACADEMY_LINKS.length,    links: ACADEMY_LINKS    },
                { key: "foundation", label: "Foundation", count: FOUNDATION_LINKS.length, links: FOUNDATION_LINKS },
              ].map((sec) => (
                <div key={sec.key} style={{ borderBottom: "1px solid #f0ebe4" }}>
                  <button
                    onClick={() => toggleSection(sec.key)}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 4px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#1A0A00" }}>{sec.label}</div>
                      <div style={{ fontSize: "10px", color: "#9a7a68", marginTop: "1px" }}>{sec.count} pages</div>
                    </div>
                    <Chev open={expanded === sec.key} />
                  </button>
                  <AnimatePresence>
                    {expanded === sec.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "4px 0 12px 4px" }}>
                          {sec.links.map((item) => (
                            <MobileNavItem key={item.path} item={item} isActive={isActive} onClose={close} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {CALL_OPTIONS.map((c) => (
                    <a key={c.href} href={c.href}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", padding: "11px", border: "1px solid #d4c9be", borderRadius: "8px", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "#3d2b1a", background: "#fff" }}>
                      <span style={{ fontSize: "16px", lineHeight: 1 }}>{c.flag}</span>
                      {c.label}
                    </a>
                  ))}
                </div>
                <Link to="/foundation/contact" onClick={close}
                  style={{ display: "block", padding: "13px", background: "#8B1A1A", color: "#fff", textAlign: "center", borderRadius: "8px", textDecoration: "none", fontSize: "13.5px", fontWeight: 700, letterSpacing: "0.3px" }}>
                  Support Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) { .ada-hamburger { display: none !important; } }
        @media (max-width: 768px) {
          .ada-desktop-nav    { display: none !important; }
          .ada-hamburger      { display: block !important; }
          .ada-mainnav        { padding: 0 16px !important; height: 64px !important; }
          .ada-logo-img       { height: 42px !important; }
          .ada-logo-name      { font-size: 13px !important; }
          .ada-topbar         { height: auto !important; min-height: 34px !important; padding: 6px 16px !important; justify-content: center !important; flex-wrap: wrap !important; gap: 6px !important; }
          .ada-topbar-socials { display: none !important; }
          .ada-topbar-divider { display: none !important; }
          .ada-topbar-email   { font-size: 10px !important; }
        }
        @media (max-width: 380px) { .ada-logo-name { display: none !important; } }
      `}</style>
    </header>
  );
}