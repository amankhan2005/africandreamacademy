import { motion } from "framer-motion";
import { useState } from "react";

const P = {
  crimson:   "#8B1A1A",
  crimsonD:  "#6B1212",
  amber:     "#E8920A",
  gold:      "#F0B429",
  ink:       "#1A0A00",
  warmWhite: "#FFFBF5",
};

const FONT = "'Inter', system-ui, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

const leadership = [
  {
    name: "The Rev. Samuel R. Enders",
    role: "Founder & Executive Director",
    image: "/images/board/enders.webp",
    bio: "Founder of ADA School (2012) and the Children's Health Clinic (2016). Elected Congressman of District 6, Montserrado County, Liberia (2017, re-elected 2023). Graduate of Anderson University (B.S.) and Anderson University School of Theology (M.Div.).",
  },
  {
    name: "Kurt W. Roeloffs, Jr.",
    role: "Chairman Emeritus",
    image: "/images/board/kurt.webp",
    bio: "Former Global Officer of Deutsche Bank's $55B real estate investment management division. B.A. Columbia University; M.B.A. Wharton School, University of Pennsylvania. Currently pursuing graduate studies in theology and business ethics in Cambridge, England.",
  },
  {
    name: "Lydia Spinelli, Ed.D.",
    role: "President",
    image: "/images/board/lydia.webp",
    bio: "Director of the Brick Church School (1983–2019). Ed.D. from Teachers College, Columbia University. Founder of Summer Steps and board member of Early Steps, promoting racial diversity in NYC independent schools.",
  },
  {
    name: "Heidi Leiser",
    role: "Vice President",
    image: "/images/board/heidi.webp",
    bio: "Independent consultant in contemporary art; founder of Les Arts Lulu, LLC (2006). Background in finance (BlackRock, Sumitomo-Mitsui, Dexia Bank). BBA from Pace University; MA, Art Business, Sotheby's Institute of Art. Formerly taught school in Nairobi, Kenya.",
  },
  {
    name: "Gracey Stoddard, LMSW",
    role: "Vice President",
    image: "/images/board/gracey.webp",
    bio: "Past Board President (2013–2018). Certified social worker and former District Representative for Congresswoman Carolyn B. Maloney. BA, Sweet Briar College; MSW, Columbia University.",
  },
  {
    name: "Richard D. Rippe",
    role: "Treasurer",
    image: "/images/board/rippe.webp",
    bio: "Managing Director and Economist at Evercore ISI. Former Chief Economist at Prudential Securities and Dean Witter Reynolds. AB Economics (magna cum laude) and Ph.D. in Business Economics, Harvard University.",
  },
];

const directors = [
  {
    name: "Daryl Davis, Esq.",
    role: "Corporate Secretary (Acting)",
    image: "/images/board/daryl.webp",
    bio: "Counsel to Leo Law; Co-Founder of Huntsville Aeronautics Company. Yale Law School (J.D., Ford Foundation Fellowship); Morehouse College (Phi Beta Kappa). Active pro bono practice advising non-profits and African asylum seekers.",
  },
  {
    name: "The Rev. Thomas Smith, Ph.D.",
    role: "Corporate Secretary",
    image: "/images/board/smith.webp",
    bio: "Pastor of Presbyterian Chapel of the Lakes, Angola, Indiana since 1986. Adjunct philosophy instructor at Trine University. Licensed Clinical Social Worker, Marriage & Family Therapist, and registered Family Law Mediator in Indiana.",
  },
  {
    name: "Jennifer Coyle",
    role: "Board Member",
    image: "/images/board/coyle.webp",
    bio: "Executive Director at Macquarie, leading the Resources division of Specialized & Asset Finance globally. Former Managing Director, Caterpillar Financial; created GE Capital's European Equipment Finance Syndication. BA Economics & German, College of the Holy Cross.",
  },
  {
    name: "Lise Evans",
    role: "Board Member",
    image: "/images/board/lise.webp",
    bio: "BA Journalism, NYU; MA Teaching English, Teachers College, Columbia. Board of Whitney Museum (2011), NY Presbyterian Hospital (2018), South Hampton Fresh Air Fund (2008), and Summer Steps (founding). Chair of The Storefront School Board.",
  },
  {
    name: "Inzata Fofana",
    role: "Board Member",
    image: "/images/board/inzata.webp",
    bio: "Entrepreneur and founder of D'Amony, a natural skincare line. Former sales and advertising professional, Palmolive Division of Lever Brothers, Côte d'Ivoire. Currently assistant teacher at The Brick Church School.",
  },
  {
    name: "Christine Garrison",
    role: "Board Member",
    image: "/images/board/christine.webp",
    bio: "Teacher with the Life Adjustment Center for children with special needs. Extensive career in children's theater with NYU Creative Arts Team and Shoestring Players. BA Liberal Arts, Wilberforce University; Drama certificate, American Musical & Dramatic Academy.",
  },
  {
    name: "William H. Hardie",
    role: "Board Member",
    image: "/images/board/hardie.webp",
    bio: "Managing Director, Houlihan Lokey Financial Restructuring Group. Former EVP at Marvel Enterprises and Fleer/SkyBox International. Associate, Winthrop Stimson law firm. B.S. Economics, University of Alabama; J.D. Vanderbilt University Law Review.",
  },
  {
    name: "Blanche Goble Mansfield",
    role: "Board Member",
    image: "/images/board/blanche.webp",
    bio: "Secretary, Board of Trustees, American Community School at Beirut (1,200 students). Former Head of Lower School, Nightingale-Bamford School, NYC (1985–2016). AB American Studies, Smith College; graduate studies, Bank Street College of Education.",
  },
  {
    name: "Bob McCrie",
    role: "Board Member",
    image: "/images/board/mccrie.webp",
    bio: "Professor of security management and deputy chair, Dept. of Security, Fire & Emergency Management, John Jay College, CUNY. Founding editor of Security Journal. Ph.D., CUNY Graduate School; degrees from Ohio Wesleyan, University of Toledo, and Hunter College.",
  },
  {
    name: "Sophia Pedrazzi",
    role: "Board Member",
    image: "/images/board/sophia.webp",
    bio: "Civil engineering student at Lafayette College (minor in environmental science). Founded Sophia's Funds for Friends at age 5, raising money for children with medical needs. Collected supplies for ADA and visited Monrovia in April 2024.",
  },
  {
    name: "Kathryn Smerling, Ph.D.",
    role: "Board Member",
    image: "/images/board/kathryn.webp",
    bio: "Family therapist; Ph.D. from Fordham University, Masters from Cornell and NYU. CNN, Fox News, and ABC News contributor. Author of Instep (Random House). Psychologist, OB/GYN department, Mount Sinai Hospital.",
  },
  {
    name: "Alison Kenworthy",
    role: "Board Member",
    image: "/images/board/alison.webp",
    bio: "Three-time Emmy Award-winning TV producer and founder of Homeworthy, generating 1.2B+ minutes watched annually. Formerly ABC's Good Morning America. Covers red carpets of the Golden Globes and Met Gala.",
  },
  {
    name: "Miranda Orbach",
    role: "Board Member",
    image: "/images/board/miranda.webp",
    bio: "Head of Lower School Literacy and Social Studies, The Chapin School. BA, Wesleyan; two MAs, Columbia (incl. M.Ed. in Independent School Leadership). Taught writing to incarcerated women; years with Olevolos Project, Tanzania.",
  },
  {
    name: "Kristin Allen",
    role: "Board Member",
    image: "/images/board/kristin.webp",
    bio: "Investment banker: Morgan Stanley M&A, 33 years at Credit Suisse (Broadcasting & Media), and Greenhill/Mizuho Digital Infrastructure M&A. MBA, Tuck School, Dartmouth; BA, Brown University.",
  },
];

function MemberCard({ member, i, accent }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      {...fadeUp(i * 0.06)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid rgba(139,26,26,0.1)`,
        borderTop: `3px solid ${accent}`,
        borderRadius: "2px",
        overflow: "hidden",
        boxShadow: hovered ? "0 12px 40px rgba(26,10,0,0.12)" : "0 2px 16px rgba(26,10,0,0.06)",
        transition: "box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: "100%", height: "260px", objectFit: "cover", display: "block",
            objectPosition: "center top",
            transition: "transform 0.45s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(26,10,0,0.55) 0%, transparent 55%)",
        }} />
        {/* Role badge */}
        <div style={{
          position: "absolute", bottom: "14px", left: "14px",
          background: "rgba(26,10,0,0.72)",
          backdropFilter: "blur(6px)",
          border: `1px solid rgba(240,180,41,0.3)`,
          borderLeft: `3px solid ${accent}`,
          padding: "5px 12px", borderRadius: "2px",
        }}>
          <span style={{ fontSize: "10px", color: accent, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700 }}>
            {member.role}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ width: "28px", height: "3px", borderRadius: "2px", background: `linear-gradient(to right, ${accent}, ${P.gold})`, marginBottom: "10px" }} />
        <h3 style={{ fontSize: "1rem", fontWeight: 800, color: P.ink, margin: "0 0 10px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
          {member.name}
        </h3>

        {/* Bio — truncated / expanded */}
        <p style={{
          fontSize: "0.875rem", color: "rgba(26,10,0,0.6)",
          lineHeight: 1.75, margin: "0 0 12px",
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : 3,
          WebkitBoxOrient: "vertical",
          overflow: expanded ? "visible" : "hidden",
        }}>
          {member.bio}
        </p>

        <button
          onClick={() => setExpanded(e => !e)}
          style={{
            alignSelf: "flex-start",
            background: "none", border: "none", padding: 0,
            cursor: "pointer",
            fontSize: "11px", fontWeight: 700,
            color: accent,
            letterSpacing: "1.5px", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: "4px",
          }}
        >
          {expanded ? "Read less ↑" : "Read more ↓"}
        </button>
      </div>
    </motion.div>
  );
}

export default function Board() {
  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .board-hero-inner { padding: 120px 2rem 96px; }
        .board-grid       { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        @media (max-width: 960px) {
          .board-grid     { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .board-hero-inner { padding: 80px 1.25rem 64px; }
        }
        @media (max-width: 560px) {
          .board-grid     { grid-template-columns: 1fr; gap: 20px; }
          .board-hero-inner { padding: 56px 1rem 48px; }
          .board-section-pad { padding: 56px 0 !important; }
        }
      `}</style>

      {/* ══ HERO — crimson ══ */}
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

        <div className="board-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              African Dream Academy Foundation
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(1.8rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
            Board of{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Directors
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22 }}
            style={{
              transformOrigin: "center", height: "3px", width: "56px", borderRadius: "2px",
              background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
              margin: "22px auto 28px",
            }}
          />

          <motion.p {...fadeUp(0.35)} style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "600px", margin: "0 auto 40px",
          }}>
            Dedicated volunteers guiding the African Dream Academy Foundation — independently
            and passionately committed to transforming education in Liberia.
          </motion.p>

          {/* Stat pills */}
          <motion.div {...fadeUp(0.42)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {[
              { v: "20+", l: "Board members" },
              { v: "100%", l: "Voluntary service" },
              { v: "2012", l: "Founded" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "12px 24px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderTop: `2px solid ${P.gold}`,
                borderRadius: "2px", textAlign: "center",
              }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginTop: "5px" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ LEADERSHIP — warm white ══ */}
      <section className="board-section-pad" style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Executive Leadership
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Officers &{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Leadership
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
                margin: "0 auto",
              }}
            />
          </motion.div>

          <div className="board-grid">
            {leadership.map((member, i) => (
              <MemberCard
                key={i}
                member={member}
                i={i}
                accent={i % 2 === 0 ? P.crimson : P.amber}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ══ DIRECTORS — crimson ══ */}
      <section className="board-section-pad" style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>
        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-140px", left: "-140px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Board Members
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Directors &{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                Members
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                margin: "0 auto",
              }}
            />
          </motion.div>

          <div className="board-grid">
            {directors.map((member, i) => (
              <MemberCard
                key={i}
                member={member}
                i={i}
                accent={i % 2 === 0 ? P.gold : P.amber}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ══ FOOTNOTE — warm white ══ */}
      <section style={{ background: P.warmWhite, padding: "48px 0" }}>
        <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <motion.p {...fadeUp(0)} style={{
            fontSize: "0.875rem", color: "rgba(26,10,0,0.45)",
            lineHeight: 1.8, fontStyle: "italic",
            borderTop: `1px solid rgba(139,26,26,0.12)`,
            paddingTop: "32px",
          }}>
            * Members of the Board of Directors serve on a voluntary basis and independently
            of any other professional or organizational affiliation.
          </motion.p>
        </div>
      </section>

    </div>
  );
}