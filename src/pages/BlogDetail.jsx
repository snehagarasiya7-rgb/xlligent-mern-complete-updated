import { Link, useParams, Navigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaRegCalendarAlt, FaRegClock, FaUserEdit } from "react-icons/fa";
import SEO from "../component/SEO";
import { blogPosts } from "../data/blog";
import { BLOG_ICONS } from "../component/blogIcons";
import "./ProductDetail.css";
import "./ServiceDetail.css";
import "./Blog.css";
import "./BlogDetail.css";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const Icon = BLOG_ICONS[post.icon];
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
  };

  return (
    <>
      <SEO
        path={`/blog/${post.slug}`}
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        schema={articleSchema}
      />

      <section className="page-hero">
        <div className="container">
          <Link to="/blog" className="back-link">
            <FaArrowLeft /> All Articles
          </Link>
          <span className="eyebrow">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>

          <div className="blog-detail-meta">
            <span>
              <FaUserEdit /> {post.author}
            </span>
            <span>
              <FaRegCalendarAlt /> {formatDate(post.date)}
            </span>
            <span>
              <FaRegClock /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="section blog-detail-section">
        <div className="container blog-detail-grid">
          <article className="blog-detail-content">
            {Icon && (
              <div className="blog-detail-icon">
                <Icon />
              </div>
            )}
            {post.content.map((block) => (
              <div key={block.heading}>
                <h2 className="blog-section-heading">{block.heading}</h2>
                {block.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ))}
          </article>

          <aside className="service-side">
            <div className="service-side-card">
              <h3>Talk to our team</h3>
              <p>
                Curious how this applies to your business? Our team can walk
                you through the right product or service for your operations.
              </p>
              <Link to="/contact" className="btn btn-primary btn-block">
                Contact Us
              </Link>
            </div>
            <div className="service-side-card">
              <h3>Explore our products</h3>
              <p>See the AI-enabled software products this article relates to.</p>
              <Link to="/products" className="product-link">
                View Products <FaArrowRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section related-posts-section">
          <div className="container">
            <h2 className="section-heading">More from the blog</h2>
            <div className="blog-grid">
              {related.map((p) => {
                const RelIcon = BLOG_ICONS[p.icon];
                return (
                  <Link to={`/blog/${p.slug}`} className="blog-card" key={p.slug}>
                    <div className="blog-card-media">
                      {RelIcon && <RelIcon />}
                      <span className="blog-card-category">{p.category}</span>
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span>
                          <FaRegCalendarAlt /> {formatDate(p.date)}
                        </span>
                        <span>
                          <FaRegClock /> {p.readTime}
                        </span>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
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
      )}

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to solve this for your business?</h2>
          <p>Get in touch and our team will help you figure out the right next step.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
