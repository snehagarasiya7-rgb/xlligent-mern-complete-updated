import SEO from "../component/SEO";
import { company } from "../data/company";
import "./Legal.css";

export function PrivacyPolicy() {
  return (
    <>
      <SEO path="/privacy-policy" title="Privacy Policy" description={`Privacy Policy for ${company.name}.`} />
      <section className="section legal-page">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">This page is a placeholder pending final legal content.</p>
          <p>
            {company.legalName} respects your privacy. Details on how we
            collect, use, and protect information submitted through this
            website will be published here.
          </p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO path="/terms" title="Terms of Use" description={`Terms of Use for ${company.name}.`} />
      <section className="section legal-page">
        <div className="container">
          <h1>Terms of Use</h1>
          <p className="legal-updated">This page is a placeholder pending final legal content.</p>
          <p>
            Terms governing the use of this website and {company.name}'s
            products will be published here.
          </p>
        </div>
      </section>
    </>
  );
}
