import { motion } from "framer-motion";

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
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

const ambassadors = [
  {
    name: "Ben Pedrazzi",
    short: "Ben",
    image: "/images/ambassadors/ben.webp",
    school: "James Caldwell High School",
    location: "West Caldwell, NJ",
    grade: "Junior",
    bio: "My name is Ben Pedrazzi, and I'm a junior at James Caldwell High School in West Caldwell, NJ. I'm passionate about supporting the African Dream Academy because I believe every child deserves access to quality education and the chance to build a better future. Outside of school I enjoy participating in Future Business Leaders of America, Track, and playing keyboard and singing in my band.",
    interests: ["Future Business Leaders of America", "Track", "Music & Keyboard"],
    accent: P.crimson,
  },
  {
    name: "Kaitlyn Kopf",
    short: "Kaitlyn",
    image: "/images/ambassadors/kaitlyn.webp",
    school: "Indian River High School",
    location: "Sussex County, DE",
    grade: "Junior",
    bio: "My name is Kaitlyn Kopf, and I'm super excited to be a Youth Ambassador for the Africa Dream Academy Foundation. I gained an interest in this program after helping my cousin package up boxes of school supplies for the academy. It showed me the impact I could make on people's lives with just a little community involvement. Plus, I've always loved helping people, and I love kids, so it seemed like the perfect fit! I am also a member of the marching band and the president of my school's Business Professionals of America Chapter!",
    interests: ["Marching Band", "BPA Chapter President", "Community Service"],
    accent: P.amber,
  },
  {
    name: "Ollie Mui",
    short: "Ollie",
    image: "/images/ambassadors/ollie.webp",
    school: "The Masters School",
    location: "Westchester / New York City, NY",
    grade: "Junior",
    bio: "My name is Ollie Mui and I am very excited to be one of the Youth Ambassadors for the African Dream Academy. I am a junior at The Masters School in Westchester, but I live in New York City. I love to cook and play basketball and golf. After tagging along with Dr. Lydia Spinelli on one of her trips to the African Dream Academy, I became invested in the school. When I got back, I was filled with ideas on ways I could help support ADA in any aspect, and I will continue to do so as one of the Youth Ambassadors.",
    interests: ["Cooking", "Basketball", "Golf"],
    accent: P.gold,
  },
  {
    name: "Zahra Toure",
    short: "Zahra",
    image: "/images/ambassadors/zahra.webp",
    school: "Convent of the Sacred Heart",
    location: "New York City, NY",
    grade: "Sophomore",
    bio: "My name is Zahra Toure, I'm a sophomore at Convent of the Sacred Heart in New York City, and I'm really excited to be a Youth Ambassador for African Dream Academy! I care a lot about helping others and supporting equality, so I hope to bring that into everything I do with the Academy. At school, I'm a grade representative, on the speech team, and I also sing with the Young People's Chorus of New York City. I love photography and martial arts, and I can't wait to help make a difference for the students at African Dream Academy!",
    interests: ["Speech Team", "Young People's Chorus NYC", "Photography & Martial Arts"],
    accent: P.crimson,
  },
];

export default function YouthAmbassador() {
  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .ya-hero-inner { padding: 120px 2rem 96px; }
        .ya-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .ya-ambassadors-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .ya-card-img { transition: transform 0.5s ease; }
        .ya-card:hover .ya-card-img { transform: scale(1.04); }

        @media (max-width: 900px) {
          .ya-hero-inner { padding: 80px 1.25rem 64px; }
          .ya-mission-grid { grid-template-columns: 1fr; gap: 40px; }
          .ya-ambassadors-grid { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 480px) {
          .ya-hero-inner { padding: 64px 1rem 56px; }
        }
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

        <div className="ya-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              ADAF · 2025–26
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
            Youth Ambassador{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Program
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

          <motion.p {...fadeUp(0.28)} style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "680px", margin: "0 auto 48px", fontWeight: 400,
          }}>
            Empowering the next generation of changemakers is at the heart of ADAF's mission.
            A dynamic group of young leaders committed to raising awareness, building support,
            and making a meaningful difference in the lives of 1,500 ADA students in Liberia.
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.38)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {[
              { v: "4", l: "Ambassadors" },
              { v: "1,500", l: "ADA Students" },
              { v: "2025–26", l: "Program Year" },
              { v: "U.S.", l: "Based" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "12px 22px", flex: "1 1 auto", maxWidth: "160px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderTop: `2px solid ${P.gold}`,
                borderRadius: "2px", textAlign: "center",
              }}>
                <div style={{ fontSize: "1.3rem", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginTop: "5px" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="ya-mission-grid">

            {/* Text */}
            <motion.div {...fadeUp(0)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  About the Program
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800,
                color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                Young Leaders,{" "}
                <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                  Real Impact
                </span>
              </h2>
              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "24px" }} />

              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                The Youth Ambassador Program connects passionate high school students in the U.S.
                with the mission of the African Dream Academy. Ambassadors lead creative campaigns,
                organize school and community events and fundraisers, and collaborate with one
                another to spread ADAF's mission in bold and meaningful ways.
              </p>
              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 24px" }}>
                Through this program, they develop skills in leadership, advocacy, problem-solving,
                and creative thinking — all while working toward fundraising goals that directly
                impact 1,500 ADA students in Liberia. They're not only representing the Foundation,
                they're shaping the future of global youth leadership.
              </p>

              {/* Skills pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {["Leadership", "Advocacy", "Fundraising", "Problem-Solving", "Creative Thinking", "Global Awareness"].map((tag, i) => (
                  <span key={i} style={{
                    padding: "6px 14px",
                    background: i % 2 === 0 ? "rgba(139,26,26,0.07)" : "rgba(232,146,10,0.09)",
                    border: `1px solid ${i % 2 === 0 ? "rgba(139,26,26,0.18)" : "rgba(232,146,10,0.22)"}`,
                    borderRadius: "2px", fontSize: "11px", fontWeight: 700,
                    color: i % 2 === 0 ? P.crimson : "#7a4a00",
                    letterSpacing: "0.5px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div style={{
                background: "#fff",
                border: "1px solid rgba(139,26,26,0.1)",
                borderLeft: `3px solid ${P.amber}`,
                borderRadius: "2px",
                padding: "20px 24px",
                boxShadow: "0 2px 16px rgba(26,10,0,0.05)",
              }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber, marginBottom: "8px" }}>
                  Get Involved
                </div>
                <p style={{ fontSize: "0.88rem", color: "rgba(26,10,0,0.6)", lineHeight: 1.75, margin: "0 0 12px" }}>
                  Interested in becoming a Youth Ambassador? Reach out to Sophia Pedrazzi to learn more and get involved.
                </p>
                <a
                  href="mailto:slpedrazzi@gmail.com"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    fontSize: "11px", fontWeight: 700,
                    letterSpacing: "1.5px", textTransform: "uppercase",
                    color: P.crimson, textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  slpedrazzi@gmail.com
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Decorative quote block */}
            <motion.div {...fadeUp(0.14)} style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", right: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(232,146,10,0.18)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{
                position: "relative", zIndex: 1,
                background: P.crimson,
                borderRadius: "2px", overflow: "hidden",
                padding: "48px 40px",
                boxShadow: "0 16px 48px rgba(26,10,0,0.14)",
              }}>
                <div style={{
                  position: "absolute", top: "-60px", right: "-60px",
                  width: "220px", height: "220px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(240,180,41,0.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />

                {/* Big quote mark */}
                <div style={{ fontSize: "80px", lineHeight: 0.8, color: "rgba(240,180,41,0.25)", fontWeight: 900, marginBottom: "24px", fontFamily: "Georgia, serif" }}>
                  "
                </div>

                <p style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.8, margin: "0 0 28px", fontStyle: "italic", fontWeight: 400,
                }}>
                  These driven students have set ambitious goals and are eager to be part of something
                  bigger than themselves. With your support, they can transform their passion into
                  real-world impact.
                </p>

                <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "20px" }} />

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "3px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})` }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber }}>
                    ADAF Mission
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AMBASSADORS — crimson
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-120px", left: "-120px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                2024–25 Cohort
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Meet Our{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                Youth Ambassadors
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

          {/* Ambassador cards grid */}
          <div className="ya-ambassadors-grid">
            {ambassadors.map((a, i) => (
              <motion.div
                key={a.name}
                {...fadeUp(i * 0.09)}
                className="ya-card"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Photo */}
                <div style={{ overflow: "hidden", position: "relative", height: "300px" }}>
                  <img
                    src={a.image}
                    alt={a.name}
                    className="ya-card-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(26,10,0,0.75) 0%, rgba(26,10,0,0.1) 50%, transparent 100%)",
                  }} />

                  {/* Name overlay */}
                  <div style={{ position: "absolute", bottom: "18px", left: "20px", right: "20px" }}>
                    <div style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      background: a.accent === P.gold ? P.gold : a.accent === P.amber ? P.amber : P.crimsonD,
                      borderRadius: "2px",
                      fontSize: "9px", fontWeight: 700,
                      letterSpacing: "2.5px", textTransform: "uppercase",
                      color: a.accent === P.gold ? P.ink : "#fff",
                      marginBottom: "8px",
                    }}>
                      {a.grade} · {a.location}
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
                      {a.name}
                    </h3>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "2px", letterSpacing: "0.3px" }}>
                      {a.school}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 24px 28px" }}>
                  {/* Accent rule */}
                  <div style={{
                    width: "28px", height: "3px", borderRadius: "2px",
                    background: `linear-gradient(to right, ${a.accent}, ${P.gold})`,
                    marginBottom: "14px",
                  }} />

                  <p style={{
                    fontSize: "0.875rem", color: "rgba(255,255,255,0.68)",
                    lineHeight: 1.8, margin: "0 0 20px",
                  }}>
                    {a.bio}
                  </p>

                  {/* Interests */}
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
                    <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber, marginBottom: "10px" }}>
                      Interests & Activities
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {a.interests.map((tag, j) => (
                        <span key={j} style={{
                          padding: "4px 12px",
                          background: "rgba(255,255,255,0.06)",
                          border: `1px solid rgba(255,255,255,0.12)`,
                          borderRadius: "2px",
                          fontSize: "11px", fontWeight: 600,
                          color: "rgba(255,255,255,0.65)",
                          letterSpacing: "0.3px",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left accent border */}
                <div style={{
                  position: "absolute", top: 0, left: 0, bottom: 0, width: "3px",
                  background: a.accent,
                }} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          JOIN CTA — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>

          <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              Join the Movement
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h2 {...fadeUp(0.08)} style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
            color: P.ink, lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 16px",
          }}>
            Become a{" "}
            <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
              Youth Ambassador
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{
              transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
              background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
              margin: "0 auto 28px",
            }}
          />

          <motion.p {...fadeUp(0.14)} style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "rgba(26,10,0,0.6)",
            lineHeight: 1.85, maxWidth: "560px", margin: "0 auto 40px",
          }}>
            Are you a high school student passionate about education, global leadership, and making a
            real difference? We'd love to hear from you. Reach out to Sophia Pedrazzi to learn more
            and take your first step toward becoming a Youth Ambassador.
          </motion.p>

          <motion.div {...fadeUp(0.2)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a
              href="mailto:slpedrazzi@gmail.com"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                background: P.crimson,
                color: "#fff",
                fontWeight: 800, fontSize: "12px",
                letterSpacing: "2px", textTransform: "uppercase",
                borderRadius: "2px", textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = P.crimsonD}
              onMouseLeave={e => e.currentTarget.style.background = P.crimson}
            >
              Contact Sophia
            </a>
            <a
              href="/foundation/contact"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                background: "transparent",
                color: P.ink,
                fontWeight: 700, fontSize: "12px",
                letterSpacing: "2px", textTransform: "uppercase",
                borderRadius: "2px",
                border: `1px solid rgba(26,10,0,0.2)`,
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(26,10,0,0.5)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(26,10,0,0.2)"}
            >
              Support the Mission
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
}