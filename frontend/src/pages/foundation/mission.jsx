import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="section">
      <div className="container-custom max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold">Our Mission</h1>
          <p className="subheading">
            Many Dreams. One Hope.
          </p>
        </motion.div>

        {/* Mission */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The shared mission of the African Dream Academy (ADA) and the
            African Dream Academy Foundation (ADAF) is to reduce poverty
            and foster sustainable development by empowering African children
            through education.
          </p>
        </div>

        {/* Vision */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our vision is to build a state-of-the-art educational institution
            in Liberia that provides a positive, healthy, and challenging
            environment for personal growth.
          </p>
        </div>

        {/* Philosophy */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Our Philosophy</h2>
          <div className="mt-4 space-y-5 text-gray-700 leading-relaxed">

            <p>
              We believe every child deserves the opportunity to achieve
              their dreams through education. Our goal is to help students
              become responsible citizens and future leaders in their communities.
            </p>

            <p>
              ADA offers tuition-free education so that children who cannot
              afford school fees can still receive quality education.
            </p>

            <p>
              We provide a nurturing environment that supports intellectual,
              emotional, social, physical, and spiritual development.
            </p>

            <p>
              By recognizing individual differences, we encourage students
              to think logically, creatively, and critically.
            </p>

            <p>
              Every student contributes uniquely to the African Dream Academy
              community, and we celebrate that diversity.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}