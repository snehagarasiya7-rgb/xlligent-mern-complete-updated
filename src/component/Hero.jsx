import { Link } from "react-router-dom";
import "./Hero.css";
import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <p className="hero-tag">Product-Based Software Company</p>

          <h1>
            Business management software built for <span>real business operations</span>
          </h1>

          <p className="hero-desc">
            Xlligent Softwares designs and builds practical, industry-focused
            software products — from AI-powered management software to
            enterprise software solutions — that help organizations in
            India, the USA and across Asia run their day-to-day operations.
            Not one-off client projects, but products built to be used,
            refined, and scaled.
          </p>

          <div className="hero-btns">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Xlligent AI-powered business management software platform" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
