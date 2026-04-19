import { motion } from "framer-motion";

export default function About() {
  return (
    <div>

      {/* 🔴 HERO SECTION */}
      <section className="bg-[#8B1A1A] text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About African Dream Academy
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/80 leading-relaxed">
            Founded in 2012, African Dream Academy has grown from 144 students
            into a thriving institution educating over 1500 children — 
            providing tuition-free, world-class education in Liberia.
          </p>

        </div>
      </section>

      {/* 🟡 OVERVIEW */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/about/overview.jpg"
            className="w-full h-[400px] object-cover shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold text-[#1A0A00]">
              A School Built on Opportunity
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The African Dream Academy operates a full academic program
              from early childhood through twelfth grade across two campuses
              in Monrovia, Liberia.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              The school follows national and international standards,
              equipping students with the knowledge, discipline, and
              critical thinking skills needed to succeed.
            </p>
          </div>

        </div>
      </section>

      {/* 🎓 SCHOOL DIVISIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A0A00]">
            Academic Divisions
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-10">

            {/* Early */}
            <div>
              <img src="/images/about/early.jpg" className="w-full h-64 object-cover" />
              <h3 className="mt-4 text-xl font-semibold">Early Childhood</h3>
              <p className="text-gray-600 mt-2">
                Focused on cognitive, emotional, and social development
                during the most critical years of brain growth.
              </p>
            </div>

            {/* Elementary */}
            <div>
              <img src="/images/about/elementary.jpg" className="w-full h-64 object-cover" />
              <h3 className="mt-4 text-xl font-semibold">Elementary School</h3>
              <p className="text-gray-600 mt-2">
                Strong foundation in academics, creativity, and character
                through a balanced curriculum.
              </p>
            </div>

            {/* Junior */}
            <div>
              <img src="/images/about/junior.jpg" className="w-full h-64 object-cover" />
              <h3 className="mt-4 text-xl font-semibold">Junior High</h3>
              <p className="text-gray-600 mt-2">
                Specialized learning with focus on core academic subjects
                and preparation for national exams.
              </p>
            </div>

            {/* High */}
            <div>
              <img src="/images/about/high.jpg" className="w-full h-64 object-cover" />
              <h3 className="mt-4 text-xl font-semibold">High School</h3>
              <p className="text-gray-600 mt-2">
                Advanced education preparing students for university,
                careers, and leadership roles.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 🏥 HEALTH + SUPPORT */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#1A0A00]">
              Health & Student Support
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Every student receives free healthcare through a partnership
              with Haven Care, along with daily meals and nutritional support.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              This ensures students are healthy, focused, and ready to learn.
            </p>
          </div>

          <img
            src="/images/about/health.jpg"
            className="w-full h-[380px] object-cover shadow-xl"
          />

        </div>
      </section>

      {/* 🛠 VOCATIONAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/about/vocational.jpg"
            className="w-full h-[380px] object-cover shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold text-[#1A0A00]">
              Vocational Training Program
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              ADA also empowers parents through vocational training programs
              teaching skills such as tailoring, carpentry, computing,
              and more.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Over 1,500 women and many fathers have benefited,
              helping strengthen families and communities.
            </p>
          </div>

        </div>
      </section>

      {/* 📸 IMAGE GALLERY */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A0A00]">
            Life at African Dream Academy
          </h2>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">

            {Array.from({ length: 12 }).map((_, i) => (
              <img
                key={i}
                src={`/images/about/gallery/${i + 1}.jpg`}
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}