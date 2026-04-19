import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="section">
      <div className="container-custom max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold">
            Founder’s Welcome
          </h1>
          <p className="subheading">
            A message from Samuel R. Enders, Founder & CEO
          </p>
        </motion.div>

        {/* Image + Intro */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          
          <img
            src="/images/foundation/founder.jpg"
            className="rounded-xl2 shadow-soft w-full"
          />

          <div>
            <h2 className="text-2xl font-semibold">
              Samuel R. Enders
            </h2>
            <p className="text-grayText mt-2">
              Founder & CEO, African Dream Academy
            </p>

            <p className="mt-4">
              Having grown up in poverty in Liberia, I have experienced firsthand
              the challenges children face and the life-changing power of education.
            </p>
          </div>
        </div>

        {/* Full Story */}
        <div className="space-y-6 text-gray-700 leading-relaxed">

          <p>
            As the youngest of nine children, I lost my father at just two months old.
            Survival was a daily struggle. Basic necessities like food, clothing,
            healthcare, and education were beyond reach. By age 15, I had only
            received a third-grade education.
          </p>

          <p>
            Liberia’s civil war further devastated opportunities for children like me.
            Unfortunately, my story reflects the reality faced by many children across Liberia today.
          </p>

          <p>
            Through determination and opportunity, I pursued higher education,
            earning degrees in Organizational Leadership and Divinity.
            Today, my mission is to empower Liberian youth through education.
          </p>

          <p>
            African Dream Academy began in 2005 as a youth outreach program,
            helping over 6,000 children. In 2012, we opened our first school with 144 students.
          </p>

          <p>
            Today, ADA serves over 1500 students from Nursery through Twelfth Grade,
            supported by a dedicated Liberian staff.
          </p>

          <p>
            Education is the key to breaking the cycle of poverty, and we are committed
            to building a brighter future for Liberia’s children.
          </p>

          <p>
            I invite you to explore our mission and be part of this journey.
          </p>

        </div>

        {/* Signature */}
        <div className="mt-10">
          <p className="font-semibold">Sincerely,</p>
          <p className="mt-2 font-bold">Samuel R. Enders</p>
          <p className="text-grayText">
            Founder & CEO, African Dream Academy
          </p>
        </div>

      </div>
    </section>
  );
}