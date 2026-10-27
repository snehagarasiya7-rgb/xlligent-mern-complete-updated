import { Link } from "react-router-dom";
import { FaArrowRight, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import SEO from "../component/SEO";
import { blogPosts } from "../data/blog";
import { BLOG_ICONS } from "../component/blogIcons";
import "./Blog.css";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Xlligent Softwares Blog",
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <>
      <SEO
        path="/blog"
        title="Blog — Software, AI & Business Insights"
        description="Practical articles on ERP, school and hospital management, AI in business software, and choosing the right software development partner — from Xlligent Softwares."
        schema={blogSchema}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Blog</span>
          <h1>Insights on software, AI, and running better operations</h1>
          <p>
            Practical, no-fluff articles from our team on ERP, education and
            healthcare technology, AI in business software, and what actually
            matters when choosing a development partner.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => {
              const Icon = BLOG_ICONS[post.icon];
              return (
                <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                  <div className="blog-card-media">
                    {Icon && <Icon />}
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>
                        <FaRegCalendarAlt /> {formatDate(post.date)}
                      </span>
                      <span>
                        <FaRegClock /> {post.readTime}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="product-link">
                      Read Article <FaArrowRight />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Have a project or a problem to solve?</h2>
          <p>Tell us what you're working on and our team will get back to you.</p>
          <div className="cta-btns">
            <Link to="/products" className="btn btn-ghost">
              View Products
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
