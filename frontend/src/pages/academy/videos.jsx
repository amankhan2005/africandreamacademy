export default function Videos() {
  return (
    <section className="section">
      <div className="container-custom">

        <h1 className="text-4xl font-bold text-center mb-10">
          ADA School Videos
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <iframe
            className="w-full h-[300px] rounded-xl2"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="ADA Video"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full h-[300px] rounded-xl2"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="ADA Video"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}