import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

/* ─── CONSTANTS ─────────────────────────────────────────────────── */
const ACADEMY_LINKS = [
  { name: "About ADA",       path: "/academy/about"   },
  { name: "History",         path: "/academy/history" },
  { name: "Liberia Profile", path: "/academy/liberia" },
  { name: "Videos",          path: "/academy/videos"  },
  { name: "Blog",            path: "/academy/blog"    },
];

const FOUNDATION_LINKS = [
  { name: "Founder's Welcome",  path: "/foundation/founder"  },
  { name: "Our Mission",        path: "/foundation/mission"  },
  { name: "Impact",             path: "/foundation/impact"   },
  { name: "Board of Directors", path: "/foundation/board"    },
  { name: "Contact",            path: "/foundation/contact"  },
];

const CALL_OPTIONS = [
  { flag: "🇺🇸", label: "USA",     number: "+1-888-865-5217", href: "tel:+18888655217" },
  { flag: "🇱🇷", label: "Liberia", number: "231 202 002 656", href: "tel:231202002656" },
];

/* ─── ANIMATION VARIANTS ─────────────────────────────────────────── */
const dropdownVariants = {
  hidden:  { opacity: 0, y: 6, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.15, ease: "easeOut" } },
  exit:    { opacity: 0, y: 4, scale: 0.98, transition: { duration: 0.12, ease: "easeIn" } },
};

/* ─── useHoverMenu HOOK ───────────────────────────────────────────── */
function useHoverMenu(closeDelay = 180) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  const onEnter = useCallback(() => {
    clearTimeout(timer.current);
    setOpen(true);
  }, []);

  const onLeave = useCallback(() => {
    timer.current = setTimeout(() => setOpen(false), closeDelay);
  }, [closeDelay]);

  return { open, onEnter, onLeave };
}

/* ─── SHARED ICONS ───────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path
        d="M12.5 9.5c-.8-.1-1.6-.3-2.3-.6-.4-.2-.9-.1-1.2.2l-1 1c-1.4-.8-2.5-1.9-3.3-3.3l1-1c.3-.3.4-.8.2-1.2C5.6 3.9 5.4 3.1 5.3 2.3 5.2 1.6 4.6 1 3.9 1H2c-.6 0-1.1.5-1 1.1.5 3.2 2 6 4.3 8.3 2.3 2.3 5.1 3.8 8.3 4.3.6.1 1.1-.4 1.1-1v-1.8c0-.7-.6-1.3-1.2-1.4z"
        stroke="#8B1A1A"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      className="shrink-0 mt-px transition-transform duration-200"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── DROPDOWN MENU ─────────────────────────────────────────────── */
function Dropdown({ links, isActive }) {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-white border border-[#ede8e2] rounded-[10px] p-1.5 w-[215px] z-[100] shadow-[0_12px_32px_rgba(26,10,0,0.12),0_2px_8px_rgba(26,10,0,0.06)]"
    >
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-1.5 overflow-hidden">
        <div className="w-2.5 h-2.5 bg-white border border-[#ede8e2] rotate-45 mt-[3px] ml-px" />
      </div>
      {links.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block px-3.5 py-2.5 rounded-lg text-[13.5px] font-medium no-underline transition-[background,color] duration-[120ms] ${
            isActive(item.path)
              ? "text-[#8B1A1A] font-semibold bg-[#fdf5ec]"
              : "text-[#3d2b1a] hover:bg-[#faf6f1] hover:text-[#8B1A1A]"
          }`}
        >
          {item.name}
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
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`flex items-center gap-[5px] text-sm bg-transparent border-0 cursor-pointer px-0.5 py-1.5 border-b-2 transition-[color,border-color] duration-150 ${
          open || active
            ? "font-semibold text-[#8B1A1A] border-[#8B1A1A]"
            : "font-medium text-[#3d2b1a] border-transparent"
        }`}
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <AnimatePresence>
        {open && <Dropdown links={links} isActive={isActive} />}
      </AnimatePresence>
    </div>
  );
}

/* ─── CALL BUTTON — desktop (hover dropdown, unchanged) ──────────── */
function CallButton() {
  const { open, onEnter, onLeave } = useHoverMenu(150);

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`flex items-center gap-[7px] px-4 py-2   border text-[13.5px] font-medium text-[#3d2b1a] cursor-pointer transition-[border-color,background] duration-150 ${
          open ? "border-[#8B1A1A] bg-[#fdf5ec]" : "border-[#d4c9be] bg-white"
        }`}
      >
        <PhoneIcon />
        Call Now
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-[calc(100%+12px)] bg-white border border-[#ede8e2] rounded-[10px] p-2 w-[225px] z-[100] shadow-[0_12px_32px_rgba(26,10,0,0.12),0_2px_8px_rgba(26,10,0,0.06)]"
          >
            {CALL_OPTIONS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg no-underline text-[#1A0A00] hover:bg-[#faf6f1] transition-[background] duration-[120ms]"
              >
                <span className="text-xl leading-none">{c.flag}</span>
                <div>
                  <div className="text-[11px] text-[#8B8075] font-medium uppercase tracking-[0.5px]">{c.label}</div>
                  <div className="text-[13.5px] text-[#1A0A00] font-semibold mt-px">{c.number}</div>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── MOBILE CALL BUTTONS — two direct side-by-side buttons ─────── */
function MobileCallButtons() {
  return (
    <div className="flex gap-2">
      {CALL_OPTIONS.map((c) => (
        <a
          key={c.href}
          href={c.href}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-[11px] rounded-md border border-[#d4c9be] bg-white text-[13.5px] font-medium text-[#3d2b1a] no-underline transition-[border-color,background] duration-150 hover:border-[#8B1A1A] hover:bg-[#fdf5ec]"
        >
          <PhoneIcon />
          <span className="text-base leading-none">{c.flag}</span>
          <span>{c.label}</span>
        </a>
      ))}
    </div>
  );
}

/* ─── MAIN EXPORT ────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const toggleSection = (key) => setMobileExpanded((p) => (p === key ? null : key));

  return (
    <header className="w-full bg-white sticky top-0 z-50 font-[Inter,system-ui,sans-serif]">

      {/* Top utility bar */}
      <div className="ada-top-bar bg-[#8B1A1A] px-10 flex justify-end items-center gap-[18px] h-[34px]">
        <a
          href="mailto:wendy@africandreamacademy.info"
          className="ada-top-bar-link text-white/75 text-[11.5px] no-underline tracking-[0.2px] font-medium transition-colors duration-150 hover:text-[#F5A623]"
        >
          wendy@africandreamacademy.info
        </a>
        <span className="ada-top-bar-sep text-white/20 text-[10px]">|</span>
        {["Facebook", "Instagram", "Twitter"].map((s) => (
          <a
            key={s}
            href="#"
            className="ada-top-bar-social text-white/75 text-[11.5px] no-underline tracking-[0.2px] font-medium transition-colors duration-150 hover:text-[#F5A623]"
          >
            {s}
          </a>
        ))}
      </div>

      {/* Main nav */}
      <div className="ada-main-nav max-w-[1200px] mx-auto px-10 flex items-center justify-between h-[72px] border-b border-[#ede8e2]">
        <Link to="/" className="flex items-center gap-[13px] no-underline">
          <img
            src="/images/logo.webp"
            alt="African Dream Academy"
            className="ada-logo-img h-[52px] w-auto"
          />
          <div>
            <div className="ada-logo-name font-['Playfair_Display',Georgia,serif] text-base font-bold text-[#1A0A00] tracking-[0.1px] leading-tight">
              African Dream Academy
            </div>
            <div className="text-[10px] text-[#8B1A1A] tracking-[2px] uppercase mt-[3px] font-medium">
              Many Dreams · One Hope
            </div>
          </div>
        </Link>

        {/* Desktop nav — original hover dropdown CallButton, unchanged */}
        <nav className="ada-desktop-nav flex items-center gap-[26px]">
          <Link
            to="/"
            className={`text-sm no-underline px-0.5 py-1.5 border-b-2 transition-[color,border-color] duration-150 ${
              isActive("/")
                ? "font-semibold text-[#8B1A1A] border-[#8B1A1A]"
                : "font-medium text-[#3d2b1a] border-transparent hover:text-[#8B1A1A]"
            }`}
          >
            Home
          </Link>
          <DropdownTrigger label="Academy"    links={ACADEMY_LINKS}    isActive={isActive} />
          <DropdownTrigger label="Foundation" links={FOUNDATION_LINKS} isActive={isActive} />
          <div className="w-px h-[22px] bg-[#ede8e2]" />
          <CallButton />
          <Link
            to="/foundation/contact"
            className="px-[22px] py-[9px]   bg-[#8B1A1A] text-white text-[13.5px] font-semibold no-underline tracking-[0.3px] transition-[background] duration-150 inline-block hover:bg-[#6e1414]"
          >
            Support Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="ada-mobile-toggle bg-transparent border-0 cursor-pointer p-1.5 hidden"
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="#1A0A00" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="#1A0A00" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — two direct call buttons side by side */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-b border-[#ede8e2] overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-[11px] text-sm font-medium text-[#1A0A00] no-underline border-b border-[#f0ebe4] block"
              >
                Home
              </Link>

              {[
                { label: "Academy",    key: "academy",    links: ACADEMY_LINKS    },
                { label: "Foundation", key: "foundation", links: FOUNDATION_LINKS },
              ].map((section) => (
                <div key={section.key}>
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="w-full flex justify-between items-center py-[11px] text-sm font-medium text-[#1A0A00] bg-transparent border-0 border-b border-[#f0ebe4] cursor-pointer"
                  >
                    {section.label}
                    <ChevronIcon open={mobileExpanded === section.key} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === section.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 pl-3 flex flex-col gap-0.5">
                          {section.links.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-2.5 py-[9px] text-[13.5px] rounded-md no-underline ${
                                isActive(item.path)
                                  ? "text-[#8B1A1A] font-semibold bg-[#fdf5ec]"
                                  : "text-[#5a3a2a] font-normal"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="flex flex-col gap-2.5 mt-3">
                <MobileCallButtons />
                <Link
                  to="/foundation/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-[11px] rounded-md bg-[#8B1A1A] text-white text-sm font-semibold no-underline text-center"
                >
                  Support Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .ada-mobile-toggle { display: none !important; }
          .ada-desktop-nav   { display: flex !important; }
        }
        @media (max-width: 768px) {
          .ada-desktop-nav   { display: none !important; }
          .ada-mobile-toggle { display: block !important; }
          .ada-main-nav      { padding: 0 16px !important; height: 64px !important; }
          .ada-logo-img      { height: 42px !important; }
          .ada-logo-name     { font-size: 13px !important; }
          .ada-top-bar-social,
          .ada-top-bar-sep   { display: none !important; }
          .ada-top-bar       { padding: 0 16px !important; justify-content: center !important; }
        }
        @media (max-width: 380px) {
          .ada-logo-name { display: none !important; }
          .ada-main-nav  { padding: 0 12px !important; }
        }
      `}</style>
    </header>
  );
}