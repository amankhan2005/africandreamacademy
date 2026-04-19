import { Link } from "react-router-dom";

/* ─── palette from logo ─── */
const C = {
  crimson:     "#8B1A1A",
  crimsonDark: "#6B1212",
  amber:       "#C8860A",
  gold:        "#F0B429",
  ink:         "#1A0A00",
  ivory:       "#FDF6EC",
  ivoryMid:    "#F7EFE2",
  stone:       "#9A8070",
  stoneDark:   "#6B5A4E",
  border:      "#E8DDD0",
  borderLight: "#F0E8DC",
};

/* ─── official social brand icons ─── */
function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}
function TwitterXIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="19" height="14" viewBox="0 0 24 17" fill="currentColor">
      <path d="M23.495 2.656a3.016 3.016 0 00-2.122-2.134C19.505 0 12 0 12 0S4.495 0 2.627.522A3.016 3.016 0 00.505 2.656 31.712 31.712 0 000 8.5a31.712 31.712 0 00.505 5.844 3.016 3.016 0 002.122 2.134C4.495 17 12 17 12 17s7.505 0 9.373-.522a3.016 3.016 0 002.122-2.134A31.712 31.712 0 0024 8.5a31.712 31.712 0 00-.505-5.844zM9.545 12.068V4.932L15.818 8.5l-6.273 3.568z"/>
    </svg>
  );
}

/* ─── small inline icons ─── */
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

/* ─── helpers ─── */
function ColTitle({ children }) {
  return (
    <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-[#8B1A1A] mb-6 pb-3 border-b border-[#E8DDD0] flex items-center gap-[10px]">
      {children}
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <li className="list-none">
      <Link
        to={to}
        className="text-[14px] text-[#6B5A4E] no-underline transition-[color,padding-left] duration-[140ms] flex items-center gap-0 leading-none"
        onMouseEnter={e => { e.currentTarget.style.color = C.crimson; e.currentTarget.style.paddingLeft = "6px"; }}
        onMouseLeave={e => { e.currentTarget.style.color = C.stoneDark; e.currentTarget.style.paddingLeft = "0"; }}
      >
        {children}
      </Link>
    </li>
  );
}

function ContactRow({ href, icon: Icon, children }) {
  const inner = (
    <div className="flex items-start gap-[10px]">
      <span className="text-[#C8860A] shrink-0 mt-[1px]"><Icon /></span>
      <span className="text-[13.5px] leading-[1.65]">{children}</span>
    </div>
  );
  return (
    <div className="mb-[14px]">
      {href
        ? <a href={href} className="text-[#6B5A4E] no-underline block transition-colors duration-[140ms]"
            onMouseEnter={e => e.currentTarget.style.color = C.crimson}
            onMouseLeave={e => e.currentTarget.style.color = C.stoneDark}
          >{inner}</a>
        : <div className="text-[#6B5A4E]">{inner}</div>
      }
    </div>
  );
}

/* ─── main export ─── */
export default function Footer() {
  return (
    <footer className="font-[Inter,system-ui,sans-serif] bg-[#FDF6EC] border-t border-[#E8DDD0]">

      {/* sun-gradient accent stripe */}
      <div className="h-1" style={{ background: `linear-gradient(to right, ${C.crimson}, ${C.amber}, ${C.gold}, ${C.amber}, ${C.crimson})` }} />

      {/* ── main body ── */}
      <div className="ada-footer-body max-w-[1280px] mx-auto px-12 pt-[72px] pb-16">

        {/* ── top row: brand + 2 link cols + contact ── */}
        <div
          className="ada-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr 1fr 280px",
            gap: "0 56px",
            alignItems: "start",
          }}
        >

          {/* ── Brand ── */}
          <div className="pr-4">
            <div className="flex items-center gap-[14px] mb-5">
              <img src="/images/logo.webp" alt="African Dream Academy" className="h-14 w-auto" />
              <div>
                <div className="font-['Playfair_Display',Georgia,serif] text-[15.5px] font-bold text-[#1A0A00] leading-[1.25]">
                  African Dream Academy
                </div>
                <div className="text-[9.5px] tracking-[2.2px] uppercase text-[#C8860A] mt-[5px] italic">
                  Many Dreams · One Hope
                </div>
              </div>
            </div>

            <p className="text-[13.5px] text-[#9A8070] leading-[1.85] m-0 mb-7">
              Empowering African children through education and building a brighter future for Liberia, one dream at a time.
            </p>

            {/* social icons */}
            <div className="mb-7">
              <div className="text-[10px] font-semibold tracking-[1.8px] uppercase text-[#9A8070] mb-3">
                Follow Us
              </div>
              <div className="flex gap-2">
                {[
                  { label: "Facebook",  Icon: FacebookIcon  },
                  { label: "Instagram", Icon: InstagramIcon },
                  { label: "X",         Icon: TwitterXIcon  },
                  { label: "YouTube",   Icon: YoutubeIcon   },
                ].map(({ label, Icon }) => (
                  <a key={label} href="#" aria-label={label} title={label}
                    className="flex items-center justify-center w-9 h-9 rounded-[7px] bg-white border border-[#E8DDD0] text-[#9A8070] no-underline transition-all duration-150"
                    onMouseEnter={e => { e.currentTarget.style.background = C.crimson; e.currentTarget.style.borderColor = C.crimson; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; }}
                  ><Icon /></a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Academy ── */}
          <div>
            <ColTitle>Academy</ColTitle>
            <ul className="m-0 p-0 flex flex-col gap-[13px]">
              <NavLink to="/academy/about">About ADA</NavLink>
              <NavLink to="/academy/history">History</NavLink>
              <NavLink to="/academy/liberia">Liberia Profile</NavLink>
              <NavLink to="/academy/videos">Videos</NavLink>
              <NavLink to="/academy/blog">Blog</NavLink>
            </ul>
          </div>

          {/* ── Foundation ── */}
          <div>
            <ColTitle>Foundation</ColTitle>
            <ul className="m-0 p-0 flex flex-col gap-[13px]">
              <NavLink to="/foundation/founder">Founder's Welcome</NavLink>
              <NavLink to="/foundation/mission">Our Mission</NavLink>
              <NavLink to="/foundation/impact">Impact</NavLink>
              <NavLink to="/foundation/board">Board of Directors</NavLink>
              <NavLink to="/foundation/contact">Contact</NavLink>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="pl-4">
            <ColTitle>Get In Touch</ColTitle>

            <ContactRow icon={PinIcon}>
              1617 Third Avenue , 286102<br />New York, NY 10128
            </ContactRow>

            <ContactRow href="tel:+18888655217" icon={PhoneIcon}>
              +1-888-865-5217{" "}
              <span className="text-[11px] text-[#C8860A] font-medium">USA</span>
            </ContactRow>

            <ContactRow href="tel:+231202002656" icon={PhoneIcon}>
              +231 202 002 656{" "}
              <span className="text-[11px] text-[#C8860A] font-medium">Liberia</span>
            </ContactRow>

            <ContactRow href="mailto:wendy@africandreamacademy.info" icon={MailIcon}>
              wendy@africandreamacademy.info
            </ContactRow>

            <Link
              to="/foundation/contact"
              className="inline-flex items-center justify-center gap-2 mt-5 px-6 py-3 bg-[#8B1A1A] text-white text-[13px] font-semibold no-underline rounded-md tracking-[0.4px] w-full transition-[background,transform,box-shadow] duration-150"
              style={{ boxShadow: "0 2px 10px rgba(139,26,26,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.crimsonDark; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(139,26,26,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.crimson;     e.currentTarget.style.transform = "translateY(0)";  e.currentTarget.style.boxShadow = "0 2px 10px rgba(139,26,26,0.2)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.9)">
                <path d="M12 21S3 14.5 3 8.5a4.5 4.5 0 019-1 4.5 4.5 0 019 1C21 14.5 12 21 12 21z"/>
              </svg>
              Support a Child
            </Link>
          </div>
        </div>

      </div>

      {/* ── warm divider ── */}
      <div className="border-t border-[#E8DDD0]" />

      {/* ── crimson bottom bar ── */}
      <div className="bg-[#8B1A1A]">
        <div className="max-w-[1280px] mx-auto px-12 py-[14px] flex items-center justify-between flex-wrap gap-[10px]">
          <span className="text-[12.5px] text-white/50 tracking-[0.2px]">
            © {new Date().getFullYear()} African Dream Academy · All rights reserved.
          </span>
          <span className="text-[12.5px] text-white/50">
            Designed &amp; Developed by{" "}
            <a href="https://www.webieapp.com" target="_blank" rel="noopener noreferrer"
              className="text-[#F0B429] no-underline font-medium transition-colors duration-150 hover:text-white"
            >WebieApp</a>
          </span>
        </div>
      </div>

      {/* ── responsive ── */}
      <style>{`
        /* Tablet: 2-column layout */
        @media (max-width: 1024px) {
          .ada-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px 48px !important;
          }
          .ada-footer-body {
            padding: 56px 32px 48px !important;
          }
        }

        /* Mobile: single-column layout */
        @media (max-width: 640px) {
          .ada-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px 0 !important;
          }
          .ada-footer-body {
            padding: 48px 20px 40px !important;
          }

          /* Remove desktop-only side padding on Brand and Contact columns */
          .ada-footer-grid > div:first-child {
            padding-right: 0 !important;
          }
          .ada-footer-grid > div:last-child {
            padding-left: 0 !important;
          }
        }
      `}</style>

    </footer>
  );
}