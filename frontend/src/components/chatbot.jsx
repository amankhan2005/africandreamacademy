import { useState, useRef, useEffect, useCallback } from "react";

// ── Inject Google Fonts + CSS ─────────────────────────────────────────────────
if (typeof document !== "undefined" && !document.getElementById("ada-styles")) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap";
  document.head.appendChild(link);

  const tag = document.createElement("style");
  tag.id = "ada-styles";
  tag.textContent = `
    .ada-scroll{scrollbar-width:thin;scrollbar-color:rgba(139,26,26,.15) transparent}
    .ada-scroll::-webkit-scrollbar{width:3px}
    .ada-scroll::-webkit-scrollbar-track{background:transparent}
    .ada-scroll::-webkit-scrollbar-thumb{background:rgba(139,26,26,.18);border-radius:999px}
    .ada-input:focus{outline:none;border-color:rgba(139,26,26,.35)!important;box-shadow:0 0 0 3px rgba(139,26,26,.07)!important}
    .ada-chip:hover{background:rgba(139,26,26,.13)!important;transform:translateY(-1px)}
    .ada-chip:active{transform:translateY(0)!important}
    .ada-send:hover:not(:disabled){background:#a52020!important;transform:scale(1.05)}
    .ada-send:active:not(:disabled){transform:scale(0.97)!important}
    .ada-fab:hover{transform:scale(1.08);box-shadow:0 8px 28px rgba(139,26,26,.42)!important}
    .ada-fab{transition:transform .18s ease,box-shadow .18s ease}
    .ada-hbtn:hover{background:rgba(255,255,255,.18)!important}
    .ada-cta:hover{transform:translateY(-1px);filter:brightness(1.08)}
    @keyframes ada-dot{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}}
    @keyframes ada-in{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}
    @keyframes ada-pulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:0;transform:scale(1.18)}}
    @keyframes ada-blink{0%,100%{opacity:1}50%{opacity:.25}}
    @keyframes ada-status{0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.4)}50%{box-shadow:0 0 0 4px rgba(34,197,94,0)}}
    @keyframes ada-msg{from{opacity:0;transform:translateY(10px) scale(.97)}to{opacity:1;transform:none}}
  `;
  document.head.appendChild(tag);
}

// ── Design tokens ─────────────────────────────────────────────────────────────
const T = {
  crimson:  "#8B1A1A",
  crimsonD: "#6B1212",
  crimsonL: "#a52020",
  gold:     "#F0B429",
  amber:    "#D4920A",
  ink:      "#1A0A00",
  warm:     "#FFFBF5",
  surface:  "#FFF8EE",
  border:   "rgba(139,26,26,0.12)",
  muted:    "#9a8070",
  text:     "#2d1a0e",
  white:    "#FFFFFF",
};
const FF    = "'Sora', -apple-system, sans-serif";
const SERIF = "'Crimson Pro', serif";

// ── Knowledge Base ────────────────────────────────────────────────────────────
const KB = {
  hello: {
    text: "Hello, welcome to the African Dream Academy assistant.\n\nI can help you learn about our free school in Liberia, our academic programs, how to get in touch, or how to support our students.\n\nWhat would you like to know?",
    cta: [],
  },
  about: {
    text: "African Dream Academy (ADA) is a 100% tuition-free school in Paynesville, Monrovia, Liberia.\n\nWe believe every child deserves quality education regardless of their family's income. Today we serve over 1,500 students across 2 campuses — from Nursery through Grade 12.\n\nEvery student receives:\n  - Complete K-12 education at zero cost\n  - Daily nutritious meals\n  - Free healthcare via Haven Care\n  - Computer, music, arts and French classes\n  - A safe, nurturing learning environment",
    cta: ["contact"],
  },
  founder: {
    text: "ADA was founded by Samuel R. Enders, who grew up in poverty in Liberia as the youngest of 9 children. He lost his father at a young age and had only completed third grade by age 15.\n\nThrough perseverance he pursued higher education — and never forgot where he came from. In 2012, he opened ADA's doors to 144 students, determined to give others the opportunities he once struggled to find.\n\nToday his vision has grown into a 1,500+ student institution serving two campuses.",
    cta: [],
  },
  mission: {
    text: "Our Mission\n\"To reduce poverty and foster sustainable development by empowering children through education.\"\n\nWe believe education is the most powerful tool to break the cycle of poverty. By providing free, high-quality schooling, we ensure children from disadvantaged backgrounds have the same opportunities as anyone else.\n\nOur Vision\nTo build a world-class institution where every student thrives academically, socially, and personally — and grows into a community leader.",
    cta: [],
  },
  programs: {
    text: "Academic Programs at ADA\n\nWe follow Liberia's national curriculum, enhanced with internationally recognized resources:\n\n  - Core Subjects: Mathematics, Science, Language Arts, Social Studies\n  - Computer Studies\n  - Music and Creative Arts\n  - French Language\n  - Physical Education and Sports\n  - Cultural Programs and Activities\n\nOur focus goes beyond academic performance. We emphasize critical thinking, creativity, and character development. Students graduate prepared for university and for life.",
    cta: [],
  },
  history: {
    text: "ADA's Journey\n\n  - 2012: Founded September 10th with 144 students in Paynesville, Monrovia\n  - 2013-2020: Rapid growth as families recognized the value of free, quality education\n  - 2021: Second campus opened to meet growing enrollment\n  - 2022: First senior class graduated\n  - Today: 1,500+ students enrolled, 149 dedicated staff, 2 campuses\n\nEvery milestone represents lives changed and futures made possible.",
    cta: [],
  },
  sponsor: {
    text: "Supporting a Child's Education\n\nFor just $30 per month, you can fully fund a child's education at ADA — covering tuition, meals, healthcare, and school materials.\n\nYour support ensures a child receives:\n  - Quality K-12 education\n  - Daily nutritious meals\n  - Free healthcare\n  - A safe and inspiring place to learn\n\n100% of contributions go directly to student welfare.\n\nVisit africandreamacademy.info/donate to learn more.",
    cta: ["contact"],
  },
  contact: {
    text: "Reach African Dream Academy\n\nUSA Office:\n+1-888-865-5217\n\nLiberia Campus:\n+231 202 002 656\n\nEmail:\nwendy@africandreamacademy.info\n\nUS Address:\n1617 Third Avenue\nNew York, NY 10128, USA\n\nCampus Location:\nPaynesville, Monrovia, Liberia\n\nWe would love to hear from you.",
    cta: ["phone", "email", "map"],
  },
  students: {
    text: "Student Body\n\nADA currently educates 1,500+ students across 2 campuses in Paynesville, Monrovia.\n\nOur students range from Nursery through Grade 12. Many come from families who could not otherwise afford schooling.\n\nWe also support the wider community, having trained 1,500+ women in vocational skills including tailoring, carpentry, computer literacy, catering, and beauty services.",
    cta: [],
  },
  staff: {
    text: "Our Team\n\nADA is powered by 149 dedicated staff members — teachers, administrators, healthcare workers, and support personnel — committed to our students' success every day.\n\nOur educators are trained, passionate professionals who believe deeply in the ADA mission and the potential of every child they teach.",
    cta: [],
  },
  campus: {
    text: "ADA Campuses\n\nWe operate 2 campuses in Paynesville, Monrovia, Liberia — both fully equipped to deliver quality education.\n\nOur facilities include classrooms, computer labs, and dedicated spaces for music, arts, and physical education.\n\nBoth campuses maintain the same high standard of free education and student support services.",
    cta: ["map"],
  },
  support: {
    text: "Student Welfare and Support\n\nAt ADA, we know learning cannot happen without basic needs being met.\n\nEvery student receives:\n  - Daily nutritious meals\n  - Free healthcare through our Haven Care partnership\n  - A safe, clean, and inspiring environment\n  - Emotional and social support\n\nWe work to remove every barrier between a child and their education.",
    cta: [],
  },
  community: {
    text: "Community Impact\n\nADA's impact extends beyond the classroom.\n\nWe run vocational training programs for parents — especially mothers — helping families become financially independent through skills in:\n  - Tailoring and fashion design\n  - Carpentry\n  - Computer literacy\n  - Catering and hospitality\n  - Beauty and cosmetology\n\nOver 1,500 community members have been trained. When families thrive, students thrive.",
    cta: [],
  },
  fallback: {
    text: "I can help with information about African Dream Academy. You can ask me about:\n\n  - Our mission and history\n  - Academic programs offered\n  - How to support a child's education\n  - Contact and location details\n  - Our students and community impact\n\nWhat would you like to know?",
    cta: [],
  },
};

// ── Keyword matcher ───────────────────────────────────────────────────────────
function getResponse(raw) {
  const m = raw.toLowerCase().trim();
  if (/^(hi|hello|hey|good\s*(morning|afternoon|evening)|greetings)/i.test(m)) return KB.hello;
  if (/founder|samuel|enders|started by|who started|who founded/i.test(m))      return KB.founder;
  if (/mission|goal|purpose|vision/i.test(m))                                    return KB.mission;
  if (/program|education|curriculum|course|subject|grade|k-12|academic/i.test(m)) return KB.programs;
  if (/contact|reach|get in touch/i.test(m))                                     return KB.contact;
  if (/phone|call|number|dial/i.test(m))                                         return KB.contact;
  if (/email|mail/i.test(m))                                                     return KB.contact;
  if (/address|location|where|map/i.test(m))                                     return KB.campus;
  if (/donat|sponsor|support|give|fund|\$30|contribut|help/i.test(m))            return KB.sponsor;
  if (/history|founded|start|when|begin|2012|story/i.test(m))                    return KB.history;
  if (/campus|campuses|branch|building/i.test(m))                                return KB.campus;
  if (/staff|teacher|employee|team|educator/i.test(m))                           return KB.staff;
  if (/student|enroll|children|kids|how many/i.test(m))                          return KB.students;
  if (/meal|food|health|care|welfare/i.test(m))                                  return KB.support;
  if (/women|vocational|training|community|skill|parent|mother/i.test(m))        return KB.community;
  if (/about|ada|academy|school|what is|who are|overview/i.test(m))              return KB.about;
  return KB.fallback;
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// ── Responsive hook ───────────────────────────────────────────────────────────
function useIsMobile() {
  const [m, setM] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const h = () => setM(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────
const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const CloseIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ChatBubbleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const PhoneIcon = ({ color = "rgba(255,255,255,0.75)", size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.27 16l.65.92z" />
  </svg>
);
const MailIcon = ({ color = "rgba(255,255,255,0.75)", size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const MapPinIcon = ({ color = "rgba(255,255,255,0.75)", size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const ArrowRightIcon = ({ size = 10, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const GlobeIcon = ({ size = 9, color = T.amber }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// ── Chip icons ────────────────────────────────────────────────────────────────
const SchoolIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const UsersIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const BookOpenIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const PhoneChipIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.27 16l.65.92z" />
  </svg>
);
const ClockIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const AwardIcon = ({ size = 11 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

// ── Quick chips ───────────────────────────────────────────────────────────────
const CHIPS = [
  { label: "About ADA",    msg: "Tell me about ADA",           Icon: SchoolIcon },
  { label: "Sponsorship",  msg: "How to support a child?",     Icon: UsersIcon },
  { label: "Programs",     msg: "What programs do you offer?", Icon: BookOpenIcon },
  { label: "Contact",      msg: "Contact details",             Icon: PhoneChipIcon },
  { label: "Our History",  msg: "ADA history",                 Icon: ClockIcon },
  { label: "Students",     msg: "How many students?",          Icon: AwardIcon },
];

// ── Typing indicator ──────────────────────────────────────────────────────────
const TypingDots = () => (
  <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem" }}>
    <BotAvatar />
    <div style={{
      display: "flex", gap: 5, padding: "12px 16px",
      background: T.surface, border: `1px solid ${T.border}`,
      borderRadius: "14px 14px 14px 4px",
    }}>
      {[0, 150, 300].map(d => (
        <div key={d} style={{
          width: 6, height: 6, borderRadius: "50%", background: T.amber,
          animation: `ada-dot 1s ease-in-out ${d}ms infinite`,
        }} />
      ))}
    </div>
  </div>
);

// ── Bot Avatar ────────────────────────────────────────────────────────────────
const BotAvatar = () => (
  <div style={{
    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
    background: `linear-gradient(135deg, ${T.crimson}, ${T.crimsonD})`,
    border: "1.5px solid rgba(240,180,41,0.45)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: SERIF, fontSize: "9px", fontWeight: 600, color: T.gold,
    letterSpacing: "0.3px", boxShadow: "0 1px 6px rgba(139,26,26,0.22)",
  }}>ADA</div>
);

// ── CTA Buttons ───────────────────────────────────────────────────────────────
const ctaBase = {
  display: "inline-flex", alignItems: "center", gap: 5,
  padding: "6px 13px", borderRadius: "999px",
  fontSize: "11.5px", fontWeight: 600, fontFamily: FF,
  textDecoration: "none", cursor: "pointer", border: "none",
  outline: "none", transition: "transform 0.12s, filter 0.12s",
};

const CTAButtons = ({ ctas }) => {
  if (!ctas || !ctas.length) return null;
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
      {ctas.includes("contact") && (
        <a href="/foundation/contact" className="ada-cta"
          style={{ ...ctaBase, background: T.ink, color: T.white, boxShadow: "0 2px 8px rgba(26,10,0,0.2)" }}>
          Contact ADA <ArrowRightIcon size={10} color={T.white} />
        </a>
      )}
      {ctas.includes("phone") && (
        <>
          <a href="tel:+18888655217" className="ada-cta"
            style={{ ...ctaBase, background: "rgba(139,26,26,0.08)", color: T.crimson, border: `1px solid rgba(139,26,26,0.2)` }}>
            <PhoneIcon color={T.crimson} size={11} /> USA
          </a>
          <a href="tel:+231202002656" className="ada-cta"
            style={{ ...ctaBase, background: "rgba(139,26,26,0.08)", color: T.crimson, border: `1px solid rgba(139,26,26,0.2)` }}>
            <PhoneIcon color={T.crimson} size={11} /> Liberia
          </a>
        </>
      )}
      {ctas.includes("email") && (
        <a href="mailto:wendy@africandreamacademy.info" className="ada-cta"
          style={{ ...ctaBase, background: "rgba(139,26,26,0.08)", color: T.crimson, border: `1px solid rgba(139,26,26,0.2)` }}>
          <MailIcon color={T.crimson} size={11} /> Email Us
        </a>
      )}
      {ctas.includes("map") && (
        <a href="https://maps.google.com/?q=Paynesville,Monrovia,Liberia" target="_blank" rel="noopener noreferrer"
          className="ada-cta"
          style={{ ...ctaBase, background: "rgba(139,26,26,0.08)", color: T.crimson, border: `1px solid rgba(139,26,26,0.2)` }}>
          <MapPinIcon color={T.crimson} size={11} /> View Map
        </a>
      )}
    </div>
  );
};

// ── Message Bubble ────────────────────────────────────────────────────────────
const Bubble = ({ msg, isMobile }) => {
  const isUser = msg.sender === "user";
  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      alignItems: "flex-end",
      gap: 8,
      animation: "ada-msg 0.25s ease forwards",
    }}>
      {!isUser && <BotAvatar />}
      <div style={{ display: "flex", flexDirection: "column", gap: 5, maxWidth: "82%" }}>
        <div style={isUser ? {
          padding: isMobile ? "9px 13px" : "10px 14px",
          borderRadius: "14px 14px 4px 14px",
          background: `linear-gradient(135deg, ${T.crimson}, ${T.crimsonD})`,
          color: T.white,
          fontSize: isMobile ? "13px" : "13.5px",
          lineHeight: 1.65, whiteSpace: "pre-wrap", wordBreak: "break-word",
          fontFamily: FF, boxShadow: "0 3px 12px rgba(139,26,26,0.25)",
        } : {
          padding: isMobile ? "9px 13px" : "10px 14px",
          borderRadius: "14px 14px 14px 4px",
          background: T.surface, border: `1px solid ${T.border}`,
          color: T.text,
          fontSize: isMobile ? "13px" : "13.5px",
          lineHeight: 1.72, whiteSpace: "pre-wrap", wordBreak: "break-word",
          fontFamily: FF,
        }}>
          {msg.text}
        </div>
        {!isUser && <CTAButtons ctas={msg.cta} />}
        <div style={{
          fontSize: "10px", color: T.muted, fontFamily: FF,
          padding: "0 4px", textAlign: isUser ? "right" : "left",
        }}>
          {msg.time}
        </div>
      </div>
    </div>
  );
};

// ── Header icon link/button ───────────────────────────────────────────────────
const HBtn = ({ href, title, children }) => (
  <a href={href} title={title}
    className="ada-hbtn"
    target={href && href.startsWith("http") ? "_blank" : undefined}
    rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
    style={{
      width: 32, height: 32, borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.15)",
      background: "rgba(255,255,255,0.08)",
      display: "flex", alignItems: "center", justifyContent: "center",
      textDecoration: "none", cursor: "pointer", outline: "none",
      transition: "background 0.15s", flexShrink: 0,
    }}>
    {children}
  </a>
);

// ── Main Component ────────────────────────────────────────────────────────────
export default function ADAFloatingChat() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [messages, setMessages] = useState([{
    sender: "bot",
    text: "Hello, welcome to the African Dream Academy assistant.\n\nI can help you learn about our free school in Liberia, our academic programs, how to get in touch, or how to support our students.\n\nWhat would you like to know?",
    cta: [],
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  }]);
  const [input, setInput]               = useState("");
  const [typing, setTyping]             = useState(false);
  const [chipsVisible, setChipsVisible] = useState(true);
  const endRef   = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = useCallback((override) => {
    const trimmed = (typeof override === "string" ? override : input).trim();
    if (!trimmed || typing) return;
    setInput("");
    setChipsVisible(false);
    setMessages(prev => [...prev, {
      sender: "user", text: trimmed, cta: [],
      time: nowTime(),
    }]);
    setTyping(true);
    const delay = 500 + Math.random() * 600;
    setTimeout(() => {
      const reply = getResponse(trimmed);
      setMessages(prev => [...prev, {
        sender: "bot", text: reply.text, cta: reply.cta,
        time: nowTime(),
      }]);
      setTyping(false);
      setTimeout(() => inputRef.current?.focus(), 80);
    }, delay);
  }, [input, typing]);

  const cardW = "min(96vw, 420px)";
  const cardH = isMobile ? "75vh" : "640px";
  const pad   = isMobile ? "0.6rem" : "0.875rem";

  // ── FAB ──
  if (!open) return (
    <button className="ada-fab" onClick={() => setOpen(true)} aria-label="Open ADA Chat"
      style={{
        position: "fixed",
        bottom: isMobile ? "1.25rem" : "1.5rem",
        right:  isMobile ? "0.75rem" : "1.5rem",
        zIndex: 9999,
        width: 56, height: 56, borderRadius: "50%",
        background: `linear-gradient(135deg, ${T.crimson}, ${T.crimsonD})`,
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 5px 20px rgba(139,26,26,0.38)",
        overflow: "visible",
      }}>
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: "2px solid rgba(240,180,41,0.45)",
        animation: "ada-pulse 2.5s ease-in-out infinite",
      }} />
      <ChatBubbleIcon />
      <div style={{
        position: "absolute", top: 3, right: 3,
        width: 10, height: 10, borderRadius: "50%",
        background: "#22c55e", border: `2px solid ${T.crimson}`,
      }} />
    </button>
  );

  // ── Chat Window ──
  return (
    <div role="dialog" aria-label="African Dream Academy Chat"
      style={{
        position: "fixed",
        right:  isMobile ? "0.5rem"  : "1.5rem",
        top:    isMobile ? "auto"    : "30%",
        bottom: isMobile ? "1.25rem" : "auto",
        width: cardW, height: cardH, zIndex: 9999,
        background: T.warm,
        borderRadius: isMobile ? "20px" : "24px",
        border: "1px solid rgba(139,26,26,0.1)",
        boxShadow: "0 20px 60px rgba(139,26,26,0.14), 0 4px 16px rgba(0,0,0,0.08)",
        display: "flex", flexDirection: "column",
        overflow: "hidden", fontFamily: FF,
        animation: "ada-in 0.25s ease forwards",
      }}>

      {/* ── HEADER ── */}
      <div style={{
        background: `linear-gradient(135deg, ${T.crimson} 0%, #7a1212 100%)`,
        flexShrink: 0, position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 180, height: 180, borderRadius: "50%",
          background: "rgba(240,180,41,0.07)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -20,
          width: 140, height: 140, borderRadius: "50%",
          background: "rgba(255,255,255,0.04)", pointerEvents: "none",
        }} />
        <div style={{
          height: 3,
          background: `linear-gradient(to right, ${T.gold}, ${T.amber}, #c97c0a)`,
        }} />
        <div style={{
          padding: isMobile ? "12px 14px" : "14px 18px",
          display: "flex", alignItems: "center", gap: 12,
          position: "relative", zIndex: 1,
        }}>
          {/* avatar */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{
              width: 46, height: 46, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(240,180,41,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, color: T.gold, letterSpacing: "0.4px" }}>
                ADA
              </span>
            </div>
            <div style={{
              position: "absolute", bottom: 1, right: 1,
              width: 11, height: 11, borderRadius: "50%",
              background: "#22c55e", border: `2px solid ${T.crimson}`,
              animation: "ada-status 2s ease-in-out infinite",
            }} />
          </div>

          {/* info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 600, color: T.white, letterSpacing: "-0.01em" }}>
              African Dream Academy
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: 1 }}>
              Educational Assistant · Liberia
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%", background: T.gold,
                animation: "ada-blink 2.5s ease-in-out infinite",
              }} />
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.03em" }}>
                Online · Replies instantly
              </span>
            </div>
          </div>

          {/* action buttons */}
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <HBtn href="tel:+18888655217" title="Call ADA USA"><PhoneIcon /></HBtn>
            <HBtn href="mailto:wendy@africandreamacademy.info" title="Email ADA"><MailIcon /></HBtn>
            <HBtn href="https://maps.google.com/?q=Paynesville,Monrovia,Liberia" title="ADA Location"><MapPinIcon /></HBtn>
            <button className="ada-hbtn" onClick={() => setOpen(false)} aria-label="Close chat"
              style={{
                width: 32, height: 32, borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                outline: "none", transition: "background 0.15s",
                WebkitTapHighlightColor: "transparent",
              }}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ── QUICK CHIPS ── */}
      {chipsVisible && (
        <div style={{
          padding: `${isMobile ? "8px" : "10px"} ${pad} 0`,
          display: "flex", gap: "6px", flexWrap: "wrap",
          flexShrink: 0, background: T.warm,
        }}>
          {CHIPS.map(({ label, msg, Icon }) => (
            <button key={label} className="ada-chip"
              onClick={() => handleSend(msg)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: isMobile ? "11px" : "11.5px", fontWeight: 500,
                color: T.crimson, background: "rgba(139,26,26,0.06)",
                border: "1px solid rgba(139,26,26,0.18)", borderRadius: "999px",
                padding: isMobile ? "5px 10px" : "5px 11px",
                cursor: "pointer", outline: "none", fontFamily: FF,
                whiteSpace: "nowrap", transition: "background 0.13s, transform 0.1s",
                WebkitTapHighlightColor: "transparent",
              }}>
              <Icon size={11} />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* divider */}
      <div style={{
        height: 1, flexShrink: 0,
        margin: `${chipsVisible ? "10px" : "0"} 0 0`,
        background: "linear-gradient(to right, transparent, rgba(139,26,26,0.08), transparent)",
      }} />

      {/* ── MESSAGES ── */}
      <div className="ada-scroll" role="log" aria-live="polite"
        style={{
          flex: 1, minHeight: 0, overflowY: "auto",
          padding: pad,
          display: "flex", flexDirection: "column",
          gap: isMobile ? "10px" : "12px",
          background: T.warm, scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}>
        {messages.map((msg, i) => <Bubble key={i} msg={msg} isMobile={isMobile} />)}
        {typing && <TypingDots />}
        <div ref={endRef} />
      </div>

      {/* ── INPUT ROW ── */}
      <div style={{
        padding: `${isMobile ? "8px" : "10px"} ${pad}`,
        borderTop: "1px solid rgba(139,26,26,0.07)",
        display: "flex", gap: 8, alignItems: "center",
        flexShrink: 0, background: T.warm,
      }}>
        <input
          ref={inputRef}
          className="ada-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && handleSend()}
          placeholder="Ask about ADA, programs, contact..."
          disabled={typing}
          inputMode="text"
          autoComplete="off"
          aria-label="Chat message"
          style={{
            flex: 1, height: 42, padding: "0 14px", borderRadius: "999px",
            border: "1.5px solid rgba(139,26,26,0.16)",
            fontFamily: FF, fontSize: isMobile ? "13px" : "13.5px",
            color: T.text, background: T.surface,
            outline: "none", transition: "border-color 0.15s, box-shadow 0.15s",
            WebkitTextSizeAdjust: "100%",
          }}
        />
        <button
          className="ada-send"
          onClick={() => handleSend()}
          disabled={typing}
          aria-label="Send message"
          style={{
            width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
            background: `linear-gradient(135deg, ${T.crimson}, ${T.crimsonD})`,
            border: "1px solid rgba(240,180,41,0.2)", color: T.white,
            cursor: typing ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            outline: "none", opacity: typing ? 0.5 : 1,
            boxShadow: "0 3px 10px rgba(139,26,26,0.3)",
            transition: "background 0.14s, transform 0.1s, opacity 0.14s",
            WebkitTapHighlightColor: "transparent",
          }}>
          <SendIcon />
        </button>
      </div>

      {/* ── FOOTER ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 5, padding: "5px 14px 9px",
        fontSize: "10px", color: T.muted, letterSpacing: "0.025em",
        background: T.warm, flexShrink: 0,
        borderTop: "1px solid rgba(139,26,26,0.04)", fontFamily: FF,
      }}>
        <GlobeIcon size={9} />
        <span>Powered by ADA · Empowering children in Liberia since 2012</span>
      </div>
    </div>
  );
}