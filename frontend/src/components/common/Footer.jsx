import { Link } from "react-router-dom";

const C = {
  crimson:     "#8B1A1A",
  crimsonDark: "#6B1212",
  amber:       "#C8860A",
  gold:        "#F0B429",
  ink:         "#1A0A00",
  ivory:       "#FDF6EC",
  stone:       "#9A8070",
  stoneDark:   "#6B5A4E",
  border:      "#E8DDD0",
};

/* ─── social icons ─── */
function FacebookIcon()  { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>; }
function InstagramIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>; }
function TwitterXIcon()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>; }
function YoutubeIcon()   { return <svg width="17" height="12" viewBox="0 0 24 17" fill="currentColor"><path d="M23.495 2.656a3.016 3.016 0 00-2.122-2.134C19.505 0 12 0 12 0S4.495 0 2.627.522A3.016 3.016 0 00.505 2.656 31.712 31.712 0 000 8.5a31.712 31.712 0 00.505 5.844 3.016 3.016 0 002.122 2.134C4.495 17 12 17 12 17s7.505 0 9.373-.522a3.016 3.016 0 002.122-2.134A31.712 31.712 0 0024 8.5a31.712 31.712 0 00-.505-5.844zM9.545 12.068V4.932L15.818 8.5l-6.273 3.568z"/></svg>; }

const PinIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:2}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const PhoneIcon= () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:2}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
const MailIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:2}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;

/* ─── sub-components ─── */
function ColTitle({ children }) {
  return (
    <div style={{
      fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px",
      textTransform: "uppercase", color: C.crimson,
      marginBottom: "20px", paddingBottom: "12px",
      borderBottom: `1px solid ${C.border}`,
      display: "flex", alignItems: "center", gap: "8px",
    }}>
      {children}
      <span style={{ flex: 1, height: "1px", background: C.border }} />
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <li style={{ listStyle: "none" }}>
      <Link to={to} style={{ fontSize: "13.5px", color: C.stoneDark, textDecoration: "none", display: "flex", alignItems: "center", lineHeight: 1, transition: "color .14s, padding-left .14s" }}
        onMouseEnter={e => { e.currentTarget.style.color = C.crimson; e.currentTarget.style.paddingLeft = "5px"; }}
        onMouseLeave={e => { e.currentTarget.style.color = C.stoneDark; e.currentTarget.style.paddingLeft = "0"; }}>
        {children}
      </Link>
    </li>
  );
}

function ContactRow({ href, icon: Icon, children }) {
  const content = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
      <span style={{ color: C.amber, flexShrink: 0, marginTop: 1 }}><Icon /></span>
      <span style={{ fontSize: "13px", lineHeight: 1.65 }}>{children}</span>
    </div>
  );
  const shared = { fontSize: "13px", color: C.stoneDark, textDecoration: "none", display: "block", marginBottom: "13px", transition: "color .14s" };
  return href
    ? <a href={href} style={shared} onMouseEnter={e => e.currentTarget.style.color = C.crimson} onMouseLeave={e => e.currentTarget.style.color = C.stoneDark}>{content}</a>
    : <div style={{ ...shared, cursor: "default" }}>{content}</div>;
}

/* ─── main export ─── */
export default function Footer() {
  return (
    <footer style={{ fontFamily: "Inter, system-ui, sans-serif", background: C.ivory, borderTop: `1px solid ${C.border}` }}>

      {/* accent stripe */}
      <div style={{ height: "4px", background: `linear-gradient(to right, ${C.crimson}, ${C.amber}, ${C.gold}, ${C.amber}, ${C.crimson})` }} />

      <div className="ada-footer-body" style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 48px 52px" }}>
        <div className="ada-footer-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr 260px", gap: "0 52px", alignItems: "start" }}>

          {/* Brand */}
          <div style={{ paddingRight: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
              <img src="/images/logo.webp" alt="African Dream Academy" style={{ height: "52px", width: "auto" }} />
              <div>
                <div style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px", fontWeight: 700, color: C.ink, lineHeight: 1.25 }}>African Dream Academy</div>
                <div style={{ fontSize: "9px", letterSpacing: "2.2px", textTransform: "uppercase", color: C.amber, marginTop: "4px", fontStyle: "italic" }}>Many Dreams · One Hope</div>
              </div>
            </div>

            <p style={{ fontSize: "13px", color: C.stone, lineHeight: 1.85, margin: "16px 0 20px" }}>
              Empowering African children through education and building a brighter future for Liberia, one dream at a time.
            </p>

            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase", color: C.stone, marginBottom: "10px" }}>Follow Us</div>
            <div style={{ display: "flex", gap: "7px" }}>
              {[
                { label: "Facebook",  Icon: FacebookIcon  },
                { label: "Instagram", Icon: InstagramIcon },
                { label: "X",         Icon: TwitterXIcon  },
                { label: "YouTube",   Icon: YoutubeIcon   },
              ].map(({ label, Icon }) => (
                <a key={label} href="#" aria-label={label} title={label}
                  style={{ width: "34px", height: "34px", borderRadius: "7px", background: "#fff", border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.stone, textDecoration: "none", transition: "all .14s", flexShrink: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.crimson; e.currentTarget.style.borderColor = C.crimson; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.stone; }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Academy */}
          <div>
            <ColTitle>Academy</ColTitle>
            <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <NavLink to="/academy/about">About African Dream Academy</NavLink>
              <NavLink to="/academy/history">History of the ADA School</NavLink>
              <NavLink to="/academy/liberia">Liberia: Country Profile</NavLink>
              <NavLink to="/academy/videos">ADA School Videos</NavLink>
              <NavLink to="/academy/blog">Dream Academy Blog</NavLink>
            </ul>
          </div>

          {/* Foundation */}
          <div>
            <ColTitle>Foundation</ColTitle>
            <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <NavLink to="/foundation/founder">Founder's Welcome</NavLink>
              <NavLink to="/foundation/mission">Our Mission</NavLink>
              <NavLink to="/foundation/impact">Impact at a Glance</NavLink>
              <NavLink to="/foundation/board">Board of Directors</NavLink>
              <NavLink to="/foundation/contact">Contact</NavLink>
            </ul>
          </div>

          {/* Contact */}
          <div style={{ paddingLeft: "4px" }}>
            <ColTitle>Get In Touch</ColTitle>
            <ContactRow icon={PinIcon}>
              1617 Third Avenue, 286102<br />New York, NY 10128
            </ContactRow>
            <ContactRow href="tel:+18888655217" icon={PhoneIcon}>
              +1-888-865-5217{" "}<span style={{ fontSize: "10px", color: C.amber, fontWeight: 600 }}>USA</span>
            </ContactRow>
            <ContactRow href="tel:+231202002656" icon={PhoneIcon}>
              +231 202 002 656{" "}<span style={{ fontSize: "10px", color: C.amber, fontWeight: 600 }}>Liberia</span>
            </ContactRow>
            <ContactRow href="mailto:wendy@africandreamacademy.info" icon={MailIcon}>
              wendy@africandreamacademy.info
            </ContactRow>
            <Link to="/foundation/contact"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", marginTop: "16px", padding: "11px 0", background: C.crimson, color: "#fff", fontSize: "13px", fontWeight: 700, borderRadius: "7px", textDecoration: "none", letterSpacing: "0.3px", width: "100%", transition: "background .14s" }}
              onMouseEnter={e => e.currentTarget.style.background = C.crimsonDark}
              onMouseLeave={e => e.currentTarget.style.background = C.crimson}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)"><path d="M12 21S3 14.5 3 8.5a4.5 4.5 0 019-1 4.5 4.5 0 019 1C21 14.5 12 21 12 21z"/></svg>
              Support a Child
            </Link>
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${C.border}` }} />

      {/* Bottom bar */}
      <div style={{ background: C.crimson }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "13px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.2px" }}>
            © {new Date().getFullYear()} African Dream Academy · All rights reserved.
          </span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
            Designed &amp; Developed by{" "}
            <a href="https://www.webieapp.com" target="_blank" rel="noopener noreferrer"
              style={{ color: C.gold, textDecoration: "none", fontWeight: 500, transition: "color .14s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = C.gold}>
              WebieApp
            </a>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .ada-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px 48px !important; }
          .ada-footer-body { padding: 52px 32px 44px !important; }
        }
        @media (max-width: 640px) {
          .ada-footer-grid { grid-template-columns: 1fr !important; gap: 32px 0 !important; }
          .ada-footer-body { padding: 44px 20px 36px !important; }
          .ada-footer-grid > div:first-child { padding-right: 0 !important; }
          .ada-footer-grid > div:last-child  { padding-left: 0 !important; }
        }
      `}</style>
    </footer>
  );
}