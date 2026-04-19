import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-grayText">
        Page not found
      </p>

      <Link to="/" className="btn-primary mt-6 inline-block">
        Go Back Home
      </Link>
    </section>
  );
}