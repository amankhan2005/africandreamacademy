const blogs = [
  {
    title: "How Education is Changing Lives in Liberia",
    desc: "Discover how ADA is transforming communities through education.",
  },
  {
    title: "A Day in the Life of an ADA Student",
    desc: "Experience daily life at African Dream Academy.",
  },
];

export default function Blog() {
  return (
    <section className="section">
      <div className="container-custom">

        <h1 className="text-4xl font-bold text-center mb-10">
          Dream Academy Blog
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {blogs.map((blog, i) => (
            <div key={i} className="card">
              <h3 className="text-xl font-semibold">
                {blog.title}
              </h3>
              <p className="text-grayText mt-2">
                {blog.desc}
              </p>
              <button className="btn-primary mt-4">
                Read More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}