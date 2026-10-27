import { Link } from "react-router-dom";
import SEO from "../component/SEO";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="not-found">
        <div className="container">
          <h1>404</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
