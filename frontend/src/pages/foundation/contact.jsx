import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

const P = {
  crimson:  "#8B1A1A",
  crimsonD: "#6B1212",
  amber:    "#E8920A",
  gold:     "#F0B429",
  ink:      "#1A0A00",
  warmWhite:"#FFFBF5",
};

const FONT = "'Inter', system-ui, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

const EMPTY = { name: "", email: "", phone: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim())    errors.name    = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (form.phone.trim() && !/^[\d\s\+\-\(\)]{7,20}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{
        fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
        textTransform: "uppercase",
        color: error ? P.crimson : "rgba(26,10,0,0.45)",
      }}>
        {label}
      </label>
      {children}
      {error && (
        <span style={{ fontSize: "11px", color: P.crimson, fontWeight: 600 }}>
          {error}
        </span>
      )}
    </div>
  );
}

function inputStyle(hasError) {
  return {
    width: "100%", boxSizing: "border-box",
    padding: "13px 16px",
    background: "#fff",
    border: `1px solid ${hasError ? P.crimson : "rgba(26,10,0,0.15)"}`,
    borderRadius: "2px",
    fontSize: "0.92rem", color: P.ink,
    outline: "none", fontFamily: FONT,
    transition: "border-color 0.2s, box-shadow 0.2s",
  };
}

function InfoItem({ icon, label, lines }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div style={{
        width: "40px", height: "40px", flexShrink: 0, borderRadius: "2px",
        background: "rgba(232,146,10,0.1)",
        border: "1px solid rgba(232,146,10,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px",
          textTransform: "uppercase", color: P.amber, marginBottom: "5px",
        }}>
          {label}
        </div>
        {lines.map((l, i) => (
          <div key={i} style={{ fontSize: "0.92rem", color: "rgba(26,10,0,0.65)", lineHeight: 1.7 }}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

function Modal({ type, onClose }) {
  const ok = type === "success";
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(26,10,0,0.72)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: P.warmWhite, borderRadius: "2px",
          maxWidth: "420px", width: "100%", overflow: "hidden",
          boxShadow: "0 24px 64px rgba(26,10,0,0.25)",
        }}
      >
        <div style={{
          height: "4px",
          background: ok
            ? `linear-gradient(to right, ${P.gold}, ${P.amber})`
            : `linear-gradient(to right, ${P.crimson}, ${P.crimsonD})`,
        }} />
        <div style={{ padding: "40px 36px 36px" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "50%", marginBottom: "20px",
            background: ok ? "rgba(232,146,10,0.1)" : "rgba(139,26,26,0.08)",
            border: `2px solid ${ok ? P.amber : P.crimson}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {ok ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={P.amber} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={P.crimson} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </div>

          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: P.ink, margin: "0 0 10px", letterSpacing: "-0.02em" }}>
            {ok ? "Message Sent" : "Delivery Failed"}
          </h3>
          <p style={{ fontSize: "0.92rem", color: "rgba(26,10,0,0.6)", lineHeight: 1.75, margin: "0 0 28px" }}>
            {ok
              ? "Thank you for reaching out. We have received your message and will respond within 24–48 hours."
              : "We were unable to send your message. Please try again or contact us directly at wendy@africandreamacademy.info."}
          </p>

          <button
            onClick={onClose}
            style={{
              width: "100%", padding: "13px", border: "none", borderRadius: "2px",
              background: ok ? P.amber : P.crimson,
              color: ok ? P.ink : "#fff",
              fontWeight: 800, fontSize: "12px",
              letterSpacing: "2px", textTransform: "uppercase",
              cursor: "pointer", fontFamily: FONT,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            {ok ? "Done" : "Try Again"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm]       = useState(EMPTY);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [modal, setModal]     = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value });
      setErrors(prev => ({ ...prev, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const errs = validate(form);
    setErrors(prev => ({ ...prev, [name]: errs[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name.trim(),
          email:   form.email.trim(),
          phone:   form.phone.trim(),
          message: form.message.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      setForm(EMPTY);
      setTouched({});
      setErrors({});
      setModal("success");
    } catch (err) {
      console.error(err);
      setModal("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .ct-hero-inner { padding: 120px 2rem 96px; }
        .ct-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        input:focus, textarea:focus {
          border-color: ${P.amber} !important;
          box-shadow: 0 0 0 3px rgba(232,146,10,0.12);
        }
        @media (max-width: 900px) {
          .ct-hero-inner { padding: 80px 1.25rem 64px; }
          .ct-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 480px) {
          .ct-hero-inner { padding: 64px 1rem 56px; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      {/* ══════════════════════════════════════
          HERO — crimson
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden" }}>

        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(to right, ${P.gold}, ${P.amber}, ${P.crimsonD})`,
        }} />
        <div style={{
          position: "absolute", top: "-180px", right: "-180px",
          width: "520px", height: "520px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-120px", left: "-120px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="ct-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              African Dream Academy
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
            Get in{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Touch
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            style={{
              transformOrigin: "center", height: "3px", width: "56px", borderRadius: "2px",
              background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
              margin: "22px auto 28px",
            }}
          />

          <motion.p {...fadeUp(0.28)} style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "600px", margin: "0 auto", fontWeight: 400,
          }}>
            Whether you have questions, want to volunteer, or are interested in
            supporting our mission — we welcome your message.
          </motion.p>

        </div>
      </section>

      {/* ══════════════════════════════════════
          FORM + INFO — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="ct-grid">

            {/* ── FORM ── */}
            <motion.div {...fadeUp(0)}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ width: "32px", height: "1px", background: P.amber }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                    Send a Message
                  </span>
                </div>
                <h2 style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800,
                  color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 8px",
                }}>
                  We'd Love to{" "}
                  <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "2px", display: "inline-block" }}>
                    Hear From You
                  </span>
                </h2>
                <p style={{ fontSize: "0.88rem", color: "rgba(26,10,0,0.45)", lineHeight: 1.7, margin: 0 }}>
                  Fields marked with an asterisk (*) are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                <Field label="Full Name *" error={touched.name && errors.name}>
                  <input
                    name="name" value={form.name} type="text"
                    placeholder="Jane Smith"
                    style={inputStyle(touched.name && errors.name)}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                </Field>

                <Field label="Email Address *" error={touched.email && errors.email}>
                  <input
                    name="email" value={form.email} type="email"
                    placeholder="jane@example.com"
                    style={inputStyle(touched.email && errors.email)}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                </Field>

                <Field label="Phone Number (optional)" error={touched.phone && errors.phone}>
                  <input
                    name="phone" value={form.phone} type="tel"
                    placeholder="+1 (888) 865-5217"
                    style={inputStyle(touched.phone && errors.phone)}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                </Field>

                <Field label="Message *" error={touched.message && errors.message}>
                  <textarea
                    name="message" value={form.message}
                    placeholder="Write your message here..."
                    rows={6}
                    style={{ ...inputStyle(touched.message && errors.message), resize: "vertical", minHeight: "140px" }}
                    onChange={handleChange} onBlur={handleBlur}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%", padding: "15px",
                    background: loading ? "rgba(139,26,26,0.6)" : P.crimson,
                    color: "#fff", border: "none", borderRadius: "2px",
                    fontWeight: 800, fontSize: "12px",
                    letterSpacing: "2.5px", textTransform: "uppercase",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: FONT, transition: "background 0.2s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = P.crimsonD; }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = P.crimson; }}
                >
                  {loading ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>

              </form>
            </motion.div>

            {/* ── CONTACT INFO ── */}
            <motion.div {...fadeUp(0.12)}>

              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ width: "32px", height: "1px", background: P.amber }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                    Contact Details
                  </span>
                </div>
                <h2 style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800,
                  color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 8px",
                }}>
                  Reach Us{" "}
                  <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "2px", display: "inline-block" }}>
                    Directly
                  </span>
                </h2>
                <p style={{ fontSize: "0.88rem", color: "rgba(26,10,0,0.45)", lineHeight: 1.7, margin: 0 }}>
                  Our team is available Monday through Friday and typically responds within 24–48 hours.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "36px" }}>

                <InfoItem
                  label="Mailing Address"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={P.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  }
                  lines={["1617 Third Avenue", "New York, NY 10128"]}
                />

                <InfoItem
                  label="Phone"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={P.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  }
                  lines={["+1-888-865-5217  (United States)", "+231 202 002 656  (Liberia)"]}
                />

                <InfoItem
                  label="Email"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={P.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  }
                  lines={["wendy@africandreamacademy.info"]}
                />

              </div>

              {/* Response time note */}
              <div style={{
                background: "#fff",
                border: "1px solid rgba(139,26,26,0.1)",
                borderLeft: `3px solid ${P.amber}`,
                borderRadius: "2px",
                padding: "20px 24px",
                boxShadow: "0 2px 16px rgba(26,10,0,0.05)",
                marginBottom: "24px",
              }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber, marginBottom: "8px" }}>
                  Response Time
                </div>
                <p style={{ fontSize: "0.88rem", color: "rgba(26,10,0,0.6)", lineHeight: 1.75, margin: 0 }}>
                  We typically respond within 24–48 hours. Thank you for your interest
                  in supporting African Dream Academy and the children of Liberia.
                </p>
              </div>

              {/* How you can help */}
              <div style={{
                background: P.crimson, borderRadius: "2px",
                padding: "24px 28px", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "-40px", right: "-40px",
                  width: "120px", height: "120px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(240,180,41,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.gold, marginBottom: "10px" }}>
                  How You Can Help
                </div>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, margin: "0 0 18px" }}>
                  We welcome volunteers, donors, and partners who share our belief that
                  every child deserves access to a quality education.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Donate", "Volunteer", "Partner", "Spread the Word"].map((tag, i) => (
                    <span key={i} style={{
                      padding: "5px 14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(240,180,41,0.3)",
                      borderRadius: "2px",
                      fontSize: "11px", fontWeight: 700,
                      color: P.gold, letterSpacing: "0.5px",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MODAL
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {modal && <Modal type={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>

    </div>
  );
}