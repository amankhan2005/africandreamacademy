import { motion } from "framer-motion";
import { useState } from "react";

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

const economyStats = [
  { value: "$380", label: "GDP per capita (2017)", sub: "Source: The World Bank" },
  { value: "90%", label: "Rice is imported", sub: "Staple food vulnerability" },
  { value: "20.4%", label: "Child malnutrition (2007)", sub: "Children under age 5" },
  { value: "17%", label: "Sanitation access (2008)", sub: "Adequate facilities" },
];

const timelineEvents = [
  { year: "1822", title: "American Colonization Society", body: "Americans form the American Colonization Society to resettle freed American and Caribbean slaves in West Africa, with support from the U.S. government." },
  { year: "1847", title: "Independence Declared", body: "The American \"colony\" declared independence as Africa's oldest republic, taking the name \"Liberia\" from 'liber' — meaning free. English became the official language." },
  { year: "1980", title: "Military Coup", body: "Sergeant Samuel Doe overthrows President Tolbert in a public execution of him and 13 aides, suspending the Liberian Constitution and seizing control." },
  { year: "1989–1997", title: "First Civil War", body: "Charles Taylor leads the NPFL into the capital, triggering years of arbitrary rule, economic collapse, and widespread displacement. Doe is executed in 1990. Taylor wins the presidential election in 1997." },
  { year: "1999–2003", title: "Second Civil War", body: "Fighting resumes as LURD rebels attack Monrovia. In August 2003, peace agreements end the war and prompt Charles Taylor's exile to Nigeria. UN peacekeeping troops deploy." },
  { year: "2005", title: "Historic Election", body: "Ellen Johnson Sirleaf is elected President — becoming the first woman elected as president or head of state anywhere in Africa." },
  { year: "2006", title: "Taylor Charged", body: "Former President Charles Taylor is charged with crimes against humanity and sentenced to 50 years in prison by the UN-backed court. In July, President Sirleaf restores electricity to Monrovia after 15 years of darkness." },
  { year: "2011", title: "Nobel Peace Prize", body: "President Ellen Johnson Sirleaf is awarded the Nobel Peace Prize and wins reelection for a second and final term." },
  { year: "2013–2016", title: "Ebola Outbreak", body: "A severe Ebola outbreak strikes Liberia. Emergency measures are enacted. In 2016, the UN declares Liberia and West Africa free of Ebola, and hands security responsibility back to the Liberian army and police." },
  { year: "2017", title: "George Weah Elected", body: "In the first elections run entirely by the Liberian government, George Weah — former football star who played in Europe in the 1990s — wins the presidency with over 60% of the vote." },
  { year: "2023", title: "Joseph Boakai Elected", body: "In a run-off election, Joseph Nyumah Boakai defeats Weah for the presidency, having previously served as the 29th Vice President under President Sirleaf from 2006 to 2018." },
];

const images = [
  { src: "/images/liberia/1.webp", caption: "Liberia, West Africa" },
  { src: "/images/liberia/2.webp", caption: "Monrovia streets" },
  { src: "/images/liberia/3.webp", caption: "Liberian children" },
  { src: "/images/liberia/4.webp", caption: "Community life" },
  { src: "/images/liberia/5.webp", caption: "West Africa" },
  { src: "/images/liberia/6.webp", caption: "Paynesville, Monrovia" },
];

export default function Liberia() {
  const [activeImg, setActiveImg] = useState(null);
  const [hovered, setHovered]     = useState(null);

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .lib-hero-inner    { padding: 120px 2rem 96px; }
        .lib-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .lib-econ-grid     { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .lib-exports-grid  { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
        .lib-gallery-grid  { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        @media (max-width: 1024px) {
          .lib-econ-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 900px) {
          .lib-overview-grid { grid-template-columns: 1fr; gap: 40px; }
          .lib-gallery-grid  { grid-template-columns: repeat(2,1fr); gap: 8px; }
          .lib-exports-grid  { grid-template-columns: repeat(2,1fr); }
          .lib-hero-inner    { padding: 80px 1.25rem 64px; }
          .lib-img-order     { order: -1; }
        }
        @media (max-width: 480px) {
          .lib-econ-grid    { grid-template-columns: 1fr 1fr; }
          .lib-gallery-grid { grid-template-columns: 1fr 1fr; }
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

        <div className="lib-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              West Africa · Republic of Liberia
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
            Liberia:{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Country Profile
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
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "680px", margin: "0 auto 48px", fontWeight: 400,
          }}>
            Africa's oldest republic, founded in 1847 by freed American and Caribbean slaves,
            Liberia holds a unique historical relationship with the United States. Today it is
            home to a predominantly indigenous African population — and one of the world's most
            pressing education crises.
          </motion.p>

          {/* Quick facts */}
          <motion.div {...fadeUp(0.38)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {[
              { v: "1847", l: "Independence" },
              { v: "English", l: "Official language" },
              { v: "20+", l: "Indigenous languages" },
              { v: "85.6%", l: "Christian" },
              { v: "5%", l: "Freed slave descendants" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "14px 22px",
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
          OVERVIEW — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="lib-overview-grid">

            {/* Image */}
            <motion.div {...fadeUp(0)} style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", left: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(232,146,10,0.2)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,10,0,0.13)" }}>
                <img
                  src="/images/liberia/1.jpg"
                  alt="Liberia"
                  style={{ width: "100%", height: "440px", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,0,0.4) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: P.gold, boxShadow: `0 0 8px ${P.gold}` }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
                    Republic of Liberia
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp(0.12)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  Background
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 800,
                color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                Africa's Oldest{" "}
                <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                  Republic
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "24px" }} />

              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                The Republic of Liberia holds a unique historical relationship with the United
                States. It began in 1822 when Americans formed the American Colonization Society
                to resettle freed American and Caribbean slaves with the support of the U.S.
                government. This "colony" declared its independence in 1847, taking the name
                Liberia from 'liber' — meaning free.
              </p>
              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                Today Liberia is mostly made up of indigenous Africans, with the freed slaves'
                descendants comprising just 5% of the population. English is the official
                language, though over 20 indigenous languages are spoken. Christianity is
                practiced by 85.6% of the population.
              </p>
              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: 0 }}>
                Despite its rich natural resources, Liberia remains one of the world's poorest
                nations — a consequence of two devastating civil wars and decades of political
                instability.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ECONOMY — crimson
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
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Economic Overview
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Economy &{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                Challenges
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                margin: "0 auto 20px",
              }}
            />
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
              Richly endowed with natural resources, Liberia's economy relies heavily on
              foreign assistance and remains extremely vulnerable to food shortages and
              infrastructure collapse.
            </p>
          </motion.div>

          {/* Stat cards */}
          <div className="lib-econ-grid" style={{ marginBottom: "48px" }}>
            {economyStats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.09)} style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderTop: `3px solid ${i % 2 === 0 ? P.gold : P.amber}`,
                borderRadius: "2px", padding: "28px 24px", textAlign: "center",
              }}>
                <div style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "10px" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#fff", marginBottom: "4px", letterSpacing: "0.2px" }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two-col: description + exports */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

            <motion.div {...fadeUp(0.1)}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: P.amber, marginBottom: "16px" }}>
                Economic Context
              </div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.92rem, 1.2vw, 1rem)", lineHeight: 1.85, margin: "0 0 14px" }}>
                Liberia imports 90% of its rice — a staple food — leaving the country
                extremely vulnerable to food shortages. The infrastructure largely remains
                in ruins following two civil wars spanning from 1989 to 2003.
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.92rem, 1.2vw, 1rem)", lineHeight: 1.85, margin: 0 }}>
                The monetary unit is the Liberian dollar, with 1 LRD equal to $0.0057 USD.
                The economy is low-income and heavily relies on foreign assistance, though it
                is richly endowed with natural resources, minerals, and agricultural potential.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.18)}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: P.amber, marginBottom: "16px" }}>
                Main Exports
              </div>
              <div className="lib-exports-grid">
                {["Diamonds", "Iron Ore", "Rubber", "Timber", "Coffee", "Cocoa"].map((exp, i) => (
                  <div key={i} style={{
                    padding: "11px 14px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "2px",
                    fontSize: "12px", fontWeight: 600,
                    color: "rgba(255,255,255,0.8)",
                    textAlign: "center", letterSpacing: "0.3px",
                  }}>
                    {exp}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "14px", lineHeight: 1.6 }}>
                The UN lifted a ban on diamond exports in April 2007 and on timber exports
                in 2006 — both of which had fueled the civil wars.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          PHOTO GALLERY — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Photo Gallery
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Life in{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Liberia
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

          <div className="lib-gallery-grid">
            {images.map((img, i) => {
              const tall = i === 0 || i === 4;
              const uid  = `lib-${i}`;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.07)}
                  onClick={() => setActiveImg(img.src)}
                  onMouseEnter={() => setHovered(uid)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "relative", cursor: "pointer",
                    overflow: "hidden", borderRadius: "2px",
                    boxShadow: "0 4px 20px rgba(26,10,0,0.1)",
                    gridRow: tall ? "span 2" : "span 1",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{
                      width: "100%",
                      height: tall ? "100%" : "210px",
                      minHeight: tall ? "432px" : "210px",
                      objectFit: "cover", display: "block",
                      transition: "transform 0.45s ease",
                      transform: hovered === uid ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(to top, rgba(139,26,26,0.72) 0%, rgba(139,26,26,0.05) 55%, transparent 100%)`,
                    opacity: hovered === uid ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }} />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px",
                    transform: hovered === uid ? "translateY(0)" : "translateY(8px)",
                    opacity: hovered === uid ? 1 : 0,
                    transition: "all 0.3s ease",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                      {img.caption}
                    </div>
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                    background: `linear-gradient(to right, ${P.crimson}, ${P.gold})`,
                    transform: hovered === uid ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left", transition: "transform 0.3s ease",
                  }} />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          RECENT HISTORY TIMELINE — crimson
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                1822 – Present
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              History &{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                Recent Events
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

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: "50%", top: 0, bottom: 0,
              width: "1px", background: "rgba(255,255,255,0.12)",
              transform: "translateX(-50%)",
            }} />

            <div style={{ display: "flex", flexDirection: "column" }}>
              {timelineEvents.map((ev, i) => {
                const isLeft = i % 2 === 0;
                const accent = i % 3 === 0 ? P.gold : i % 3 === 1 ? P.amber : "rgba(255,255,255,0.7)";
                return (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.05)}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 48px 1fr",
                      marginBottom: "8px",
                    }}
                  >
                    <div style={{ padding: isLeft ? "0 32px 0 0" : "0" }}>
                      {isLeft && (
                        <div style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderLeft: `3px solid ${accent}`,
                          borderRadius: "2px", padding: "18px 22px",
                        }}>
                          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber, marginBottom: "6px" }}>{ev.year}</div>
                          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.01em" }}>{ev.title}</h3>
                          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.8, margin: 0 }}>{ev.body}</p>
                        </div>
                      )}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "22px" }}>
                      <div style={{
                        width: "14px", height: "14px", borderRadius: "50%",
                        background: accent,
                        border: `3px solid ${P.crimson}`,
                        boxShadow: `0 0 0 1px ${accent}`,
                        flexShrink: 0, zIndex: 1,
                      }} />
                    </div>

                    <div style={{ padding: !isLeft ? "0 0 0 32px" : "0" }}>
                      {!isLeft && (
                        <div style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderLeft: `3px solid ${accent}`,
                          borderRadius: "2px", padding: "18px 22px",
                        }}>
                          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber, marginBottom: "6px" }}>{ev.year}</div>
                          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.01em" }}>{ev.title}</h3>
                          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.8, margin: 0 }}>{ev.body}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CLOSING — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="lib-overview-grid">

            {/* Image */}
            <motion.div {...fadeUp(0)} className="lib-img-order" style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", right: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(232,146,10,0.2)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,10,0,0.13)" }}>
                <img
                  src="/images/liberia/ada.png"
                  alt="Paynesville, Monrovia"
                  style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,0,0.38) 0%, transparent 55%)" }} />
                <div style={{
                  position: "absolute", bottom: "24px", left: "24px",
                  background: "rgba(26,10,0,0.72)", backdropFilter: "blur(8px)",
                  border: "1px solid rgba(240,180,41,0.25)", borderLeft: `3px solid ${P.gold}`,
                  padding: "14px 20px", borderRadius: "2px",
                }}>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1 }}>Paynesville</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginTop: "5px" }}>
                    Monrovia, Liberia
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp(0.12)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  Why ADA Exists
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 800,
                color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                Education as the{" "}
                <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                  Path Forward
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "24px" }} />

              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                Liberia has one of the world's highest illiteracy rates. Two civil wars, an
                Ebola outbreak, and entrenched poverty have left millions of children without
                access to consistent, quality education.
              </p>
              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                It is precisely this reality that brought African Dream Academy to Paynesville,
                Monrovia in 2012. ADA believes education is the most powerful tool to break the
                cycle — giving every child a tuition-free, world-class education and a future
                full of promise.
              </p>

              {/* Tag pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
                {["Tuition-Free", "K–12 Education", "1,500+ Students", "Two Campuses", "Monrovia, Liberia"].map((tag, i) => (
                  <span key={i} style={{
                    padding: "7px 16px",
                    background: i % 2 === 0 ? "rgba(139,26,26,0.08)" : "rgba(232,146,10,0.1)",
                    border: `1px solid ${i % 2 === 0 ? "rgba(139,26,26,0.2)" : "rgba(232,146,10,0.25)"}`,
                    borderRadius: "2px", fontSize: "12px", fontWeight: 600,
                    color: i % 2 === 0 ? P.crimson : "#7a4a00",
                    letterSpacing: "0.5px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════════ */}
      {activeImg && (
        <motion.div
          onClick={() => setActiveImg(null)}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{
            position: "fixed", inset: 0, background: "rgba(26,10,0,0.94)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.28 }}
            onClick={e => e.stopPropagation()}
            style={{
              padding: "4px",
              background: `linear-gradient(135deg, ${P.gold}, ${P.crimson})`,
              borderRadius: "3px",
            }}
          >
            <img
              src={activeImg} alt="Liberia"
              style={{ maxHeight: "85vh", maxWidth: "88vw", objectFit: "contain", display: "block", borderRadius: "1px" }}
            />
          </motion.div>
          <button
            onClick={() => setActiveImg(null)}
            style={{
              position: "absolute", top: "24px", right: "28px",
              background: "none", border: `1px solid rgba(240,180,41,0.4)`,
              borderRadius: "50%", width: "44px", height: "44px",
              color: P.gold, fontSize: "24px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = P.gold; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)"; e.currentTarget.style.color = P.gold; }}
          >
            ×
          </button>
        </motion.div>
      )}

    </div>
  );
}