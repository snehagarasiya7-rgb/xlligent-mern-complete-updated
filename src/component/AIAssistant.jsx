import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMicrophone,
} from "react-icons/fa";
import { products } from "../data/products";
import { featureGroups } from "../data/featureGroups";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { blogPosts } from "../data/blog";
import { company, whatsappLink } from "../data/company";
import "./AIAssistant.css";

// ---------------------------------------------------------------------------
// UI strings in English and Hindi. The assistant's own sentences switch with
// the language toggle; product/service/blog descriptions come from
// src/data/*.js as-is (they're written in English there).
// ---------------------------------------------------------------------------
const STRINGS = {
  en: {
    panelTitle: "Xlligent AI Assistant",
    panelSubtitle: "Product & support assistant · Online",
    welcome: `Hello, I'm the ${company.name} AI Assistant. Ask me about our products, the problems they solve, our AI features, or how to get in touch — I'm here to help.`,
    suggestions: [
      "What products do you offer?",
      "What problem does ERP solve?",
      "Is it AI-powered?",
      "How do I get a demo?",
    ],
    emptyInput: "Could you type your question? I'm happy to help.",
    greeting: `Hello! I'm the ${company.name} assistant. I can walk you through our products, the problems they solve, our AI features, or connect you with our team.`,
    thanks: "You're welcome! Let me know if there's anything else I can help with.",
    pricing:
      "Pricing depends on the product, the modules you need, and the size of your organization. Share a few details on our contact form and our team will send an accurate quote.",
    getQuote: "Get a Quote",
    contactLine: `You can reach our team at ${company.email} or ${company.phones[0]} (call or WhatsApp), or submit the contact form and we'll respond promptly.`,
    contactUs: "Contact Us",
    career: "We're always open to meeting good engineers and designers. Current openings and internships are listed on our Career page.",
    viewCareers: "View Careers",
    keyFeatures: "Key Features",
    viewProduct: (name) => `View ${name}`,
    whatProblem: "What problem does it solve?",
    isAiPowered: "Is it AI-powered?",
    howDemo: "How do I get a demo?",
    blogIntro: "Here are a few articles from our blog:",
    readBlog: "Read Our Blog",
    readArticle: "Read the Full Article",
    problemLabel: "The Problem",
    solutionLabel: "Our Solution",
    problemGeneric:
      "Every product we build starts with a real operational problem — lost data, slow follow-ups, missed alerts. Tell me an industry (school, hospital, retail, hotel, travel, manufacturing) and I'll explain exactly what problem our software solves there.",
    aiInfo:
      "Our products are built with AI where it helps most — from attendance-risk predictions in schools and no-show forecasting in hospitals to fraud detection in billing and e-commerce. Open any product page to see its AI features.",
    learnAbout: (title) => `Learn About ${title}`,
    servicesIntro: "Beyond our products, we also offer these services:",
    viewAllServices: "View All Services",
    industriesIntro: "We build software for these industries:",
    viewIndustries: "View Industries",
    productsIntro: (n) => `We build ${n} core products:`,
    locationIntro: "We're headquartered with offices across:",
    fallback:
      "I'm not fully certain about that one, but I can tell you about our products, the problems they solve, our AI features, our services, or connect you with our team directly.",
    contactTeam: "Contact Our Team",
    inputPlaceholder: "Ask about our products, AI, or services…",
    micTitle: "Speak your question",
    micListening: "Listening… speak now",
    micUnsupported: "Voice input isn't supported in this browser. Please try Chrome on desktop or Android.",
  },
  hi: {
    panelTitle: "Xlligent AI असिस्टेंट",
    panelSubtitle: "प्रोडक्ट और सपोर्ट असिस्टेंट · ऑनलाइन",
    welcome: `नमस्ते, मैं ${company.name} का AI असिस्टेंट हूं। मुझसे हमारे प्रोडक्ट्स, उनकी समस्याओं के समाधान, AI फीचर्स, या संपर्क करने के तरीके के बारे में पूछें — मैं मदद के लिए यहां हूं।`,
    suggestions: [
      "आप कौन-कौन से प्रोडक्ट्स ऑफर करते हैं?",
      "ERP किस समस्या को हल करता है?",
      "क्या यह AI-पावर्ड है?",
      "डेमो कैसे लूं?",
    ],
    emptyInput: "कृपया अपना सवाल लिखें, मुझे मदद करने में खुशी होगी।",
    greeting: `नमस्ते! मैं ${company.name} का असिस्टेंट हूं। मैं आपको हमारे प्रोडक्ट्स, उनकी समस्याओं के समाधान, AI फीचर्स के बारे में बता सकता हूं, या आपको हमारी टीम से जोड़ सकता हूं।`,
    thanks: "आपका स्वागत है! अगर कुछ और चाहिए तो जरूर बताइए।",
    pricing:
      "कीमत प्रोडक्ट, जरूरी मॉड्यूल्स और आपकी संस्था के साइज पर निर्भर करती है। हमारे कॉन्टैक्ट फॉर्म पर कुछ जानकारी दीजिए, हमारी टीम सही कोटेशन भेज देगी।",
    getQuote: "कोटेशन लें",
    contactLine: `आप हमसे ${company.email} या ${company.phones[0]} (कॉल या व्हाट्सएप) पर संपर्क कर सकते हैं, या कॉन्टैक्ट फॉर्म भरें — हम जल्द जवाब देंगे।`,
    contactUs: "हमसे संपर्क करें",
    career: "हम हमेशा अच्छे इंजीनियर्स और डिज़ाइनर्स से मिलने के लिए तैयार हैं। मौजूदा वेकेंसी और इंटर्नशिप हमारे करियर पेज पर देखें।",
    viewCareers: "करियर देखें",
    keyFeatures: "मुख्य फीचर्स",
    viewProduct: (name) => `${name} देखें`,
    whatProblem: "यह किस समस्या को हल करता है?",
    isAiPowered: "क्या यह AI-पावर्ड है?",
    howDemo: "डेमो कैसे लूं?",
    blogIntro: "हमारे ब्लॉग से कुछ आर्टिकल्स:",
    readBlog: "ब्लॉग पढ़ें",
    readArticle: "पूरा आर्टिकल पढ़ें",
    problemLabel: "समस्या",
    solutionLabel: "हमारा समाधान",
    problemGeneric:
      "हम जो भी प्रोडक्ट बनाते हैं वह किसी असली समस्या से शुरू होता है — डेटा खोना, धीमा फॉलो-अप, अलर्ट मिस होना। मुझे कोई इंडस्ट्री बताइए (स्कूल, हॉस्पिटल, रिटेल, होटल, ट्रैवल, मैन्युफैक्चरिंग) और मैं बताऊंगा कि हमारा सॉफ्टवेयर वहां कौन सी समस्या हल करता है।",
    aiInfo:
      "हमारे प्रोडक्ट्स में AI वहाँ जोड़ा गया है जहाँ उसकी सबसे ज़्यादा ज़रूरत है — स्कूलों में अटेंडेंस-रिस्क प्रिडिक्शन, हॉस्पिटल्स में नो-शो फोरकास्टिंग, और बिलिंग व ई-कॉमर्स में फ्रॉड डिटेक्शन। किसी भी प्रोडक्ट पेज पर उसके AI फीचर्स देखें।",
    learnAbout: (title) => `${title} के बारे में जानें`,
    servicesIntro: "प्रोडक्ट्स के अलावा, हम ये सर्विसेज़ भी देते हैं:",
    viewAllServices: "सभी सर्विसेज़ देखें",
    industriesIntro: "हम इन इंडस्ट्रीज़ के लिए सॉफ्टवेयर बनाते हैं:",
    viewIndustries: "इंडस्ट्रीज़ देखें",
    productsIntro: (n) => `हम ${n} मुख्य प्रोडक्ट्स बनाते हैं:`,
    locationIntro: "हमारे ऑफिस इन जगहों पर हैं:",
    fallback:
      "मुझे इसके बारे में पूरी जानकारी नहीं है, लेकिन मैं आपको हमारे प्रोडक्ट्स, उनकी समस्याओं के समाधान, AI फीचर्स, सर्विसेज़ के बारे में बता सकता हूं, या सीधे हमारी टीम से जोड़ सकता हूं।",
    contactTeam: "टीम से संपर्क करें",
    inputPlaceholder: "प्रोडक्ट्स, AI या सर्विसेज़ के बारे में पूछें…",
    micTitle: "अपना सवाल बोलें",
    micListening: "सुन रहा हूं… अब बोलिए",
    micUnsupported: "इस ब्राउज़र में वॉइस इनपुट सपोर्ट नहीं है। कृपया डेस्कटॉप या एंड्रॉइड पर Chrome आज़माएं।",
  },
};

// ---------------------------------------------------------------------------
// Lightweight local knowledge engine — matches the visitor's question against
// real product, service, industry and blog data (src/data/*.js) so answers
// stay accurate as that data changes. Runs entirely in the browser, no
// external API calls, so it responds instantly and never leaks a key.
// Keyword patterns include both English and Hindi (Devanagari) terms so it
// understands questions typed or spoken in either language.
// ---------------------------------------------------------------------------
function scoreMatch(text, terms) {
  return terms
    .join(" ")
    .toLowerCase()
    .split(/\s+/)
    .some((word) => word.length > 3 && text.includes(word));
}

function findProductMatch(text) {
  return products.find((p) =>
    scoreMatch(text, [p.name, p.slug.replace(/-/g, " "), ...(p.industries || [])])
  );
}

function findServiceMatch(text) {
  return services.find((s) => scoreMatch(text, [s.title, s.slug.replace(/-/g, " ")]));
}

function findBlogMatch(text) {
  return blogPosts.find((b) => scoreMatch(text, [b.title, b.category]));
}

function getAnswer(raw, lang) {
  const t = STRINGS[lang];
  const text = raw.toLowerCase().trim();

  if (!text) {
    return { text: t.emptyInput };
  }

  if (/\b(hi|hello|hey|namaste|good morning|good afternoon|good evening|नमस्ते|हैलो|हाय)\b/.test(text)) {
    return { text: t.greeting, chips: t.suggestions };
  }

  if (/\b(thank|thanks|thank you|धन्यवाद|शुक्रिया)\b/.test(text)) {
    return { text: t.thanks };
  }

  if (/\b(price|pricing|cost|quote|charge|budget|कीमत|दाम|प्राइस|खर्च|बजट)\b/.test(text)) {
    return { text: t.pricing, cta: { label: t.getQuote, to: "/contact" } };
  }

  if (
    /\b(demo|trial|get started|contact|talk|sales|call|phone|email|mail|number|whatsapp|reach|डेमो|संपर्क|कॉल|फोन|नंबर|ईमेल|बात)\b/.test(
      text
    )
  ) {
    return { text: t.contactLine, cta: { label: t.contactUs, to: "/contact" } };
  }

  if (/\b(job|career|hiring|vacancy|internship|work with you|apply|नौकरी|करियर|वेकेंसी|इंटर्नशिप)\b/.test(text)) {
    return { text: t.career, cta: { label: t.viewCareers, to: "/career" } };
  }

  // Product match is checked before blog/topic matches so that asking about
  // a specific product (e.g. "tell me about your hotel software") always
  // surfaces that product's features, never a blog article.
  const matchedProduct = findProductMatch(text);
  if (matchedProduct) {
    const pdfGroups = featureGroups[matchedProduct.slug];
    const featureList = pdfGroups
      ? pdfGroups.map((g) => `• ${g.title}: ${g.items.join(", ")}`).join("\n")
      : (matchedProduct.features || [])
          .slice(0, 6)
          .map((f) => `• ${f.title}: ${f.description}`)
          .join("\n");
    return {
      text: `${matchedProduct.name}: ${matchedProduct.description}${
        featureList ? `\n\n${t.keyFeatures}:\n${featureList}` : ""
      }`,
      cta: { label: t.viewProduct(matchedProduct.name), to: `/products/${matchedProduct.slug}` },
      chips: [t.whatProblem, t.isAiPowered, t.howDemo],
    };
  }

  if (/\b(blog|article|articles|insight|insights|read|learn more about|ब्लॉग|आर्टिकल|लेख)\b/.test(text)) {
    const list = blogPosts.slice(0, 4).map((b) => `• ${b.title}`).join("\n");
    return {
      text: `${t.blogIntro}\n${list}`,
      cta: { label: t.readBlog, to: "/blog" },
      chips: blogPosts.slice(0, 4).map((b) => b.title),
    };
  }

  const matchedBlog = findBlogMatch(text);
  if (matchedBlog) {
    return {
      text: `"${matchedBlog.title}" — ${matchedBlog.excerpt}`,
      cta: { label: t.readArticle, to: `/blog/${matchedBlog.slug}` },
    };
  }

  if (/\b(problem|challenge|pain point|issue|struggle|solve|समस्या|दिक्कत|परेशानी)\b/.test(text)) {
    const matched = findProductMatch(text);
    if (matched && matched.keyProblem) {
      return {
        text: `${t.problemLabel}: ${matched.keyProblem}\n\n${t.solutionLabel}: ${matched.keySolution}`,
        cta: { label: t.viewProduct(matched.name), to: `/products/${matched.slug}` },
      };
    }
    return { text: t.problemGeneric, chips: products.slice(0, 4).map((p) => p.name) };
  }

  if (/\b(ai|artificial intelligence|smart|predict|automat|एआई|आर्टिफिशियल इंटेलिजेंस|स्मार्ट)\b/.test(text)) {
    return { text: t.aiInfo, chips: products.map((p) => p.name) };
  }

  if (
    /\b(service|development|design|support|maintenance|mobile app|website|सर्विस|सेवा|डेवलपमेंट|वेबसाइट|ऐप)\b/.test(
      text
    )
  ) {
    const matchedService = findServiceMatch(text);
    if (matchedService) {
      return {
        text: `${matchedService.title}: ${matchedService.description}`,
        cta: { label: t.learnAbout(matchedService.title), to: `/services/${matchedService.slug}` },
      };
    }
    const list = services.slice(0, 5).map((s) => `• ${s.title}`).join("\n");
    return { text: `${t.servicesIntro}\n${list}`, cta: { label: t.viewAllServices, to: "/services" } };
  }

  if (/\b(industr|sector|domain|vertical|इंडस्ट्री|क्षेत्र|सेक्टर)\b/.test(text)) {
    const list = industries.map((i) => `• ${i.title} — ${i.subtitle}`).join("\n");
    return { text: `${t.industriesIntro}\n${list}`, cta: { label: t.viewIndustries, to: "/industries" } };
  }

  if (/\b(product|offer|solution|software|what.*(do|can)|प्रोडक्ट|सॉफ्टवेयर)\b/.test(text)) {
    const list = products.map((p) => `• ${p.name} — ${p.tagline}`).join("\n");
    return { text: `${t.productsIntro(products.length)}\n${list}`, chips: products.map((p) => p.name) };
  }

  if (/\b(where|location|office|based|country|address|कहां|लोकेशन|ऑफिस|पता)\b/.test(text)) {
    const locs = company.locations
      .map((l) => `${l.city}${l.region ? `, ${l.region}` : ""} (${l.country})`)
      .join(" · ");
    return { text: `${t.locationIntro} ${locs}.` };
  }

  return { text: t.fallback, cta: { label: t.contactTeam, to: "/contact" }, chips: t.suggestions };
}

// Web Speech API is vendor-prefixed in Chrome/Edge and unavailable in some
// browsers (e.g. Firefox, desktop Safari) — always feature-detect before use.
const SpeechRecognitionAPI =
  typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : null;

function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en"); // "en" | "hi"
  const [messages, setMessages] = useState([
    { role: "bot", text: STRINGS.en.welcome, chips: STRINGS.en.suggestions },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const sendRef = useRef(null);

  const t = STRINGS[lang];

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const send = (value) => {
    const question = (value ?? input).trim();
    if (!question) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setTyping(true);

    const delay = 450 + Math.random() * 350;
    setTimeout(() => {
      const answer = getAnswer(question, lang);
      setMessages((prev) => [...prev, { role: "bot", ...answer }]);
      setTyping(false);
    }, delay);
  };

  // Keep a ref to the latest `send` so the speech recognition callback below
  // (created once per language) always calls the current version, avoiding
  // stale closures over `input`/`lang`.
  useEffect(() => {
    sendRef.current = send;
  });

  // Set up / tear down speech recognition whenever the language changes, so
  // the recognizer listens in the right locale (Hindi or Indian English).
  useEffect(() => {
    if (!SpeechRecognitionAPI) return undefined;

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = lang === "hi" ? "hi-IN" : "en-IN";

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript ?? "";
      setListening(false);
      if (transcript.trim()) {
        sendRef.current?.(transcript);
      }
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;

    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      recognition.abort();
    };
  }, [lang]);

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      setMessages((prev) => [...prev, { role: "bot", text: t.micUnsupported }]);
      return;
    }
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      setInput("");
      try {
        recognition.start();
        setListening(true);
      } catch {
        setListening(false);
      }
    }
  };

  const switchLang = (next) => {
    if (next === lang) return;
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
    }
    setLang(next);
    setMessages([{ role: "bot", text: STRINGS[next].welcome, chips: STRINGS[next].suggestions }]);
  };

  return (
    <div className="ai-assistant">
      {open && (
        <div className="ai-panel" role="dialog" aria-label="Xlligent AI Assistant">
          <div className="ai-panel-head">
            <div className="ai-panel-title">
              <span className="ai-avatar">
                <FaRobot />
                <span className="ai-status-dot" aria-hidden="true" />
              </span>
              <div>
                <strong>{t.panelTitle}</strong>
                <span>{t.panelSubtitle}</span>
              </div>
            </div>
            <div className="ai-panel-actions">
              <div className="ai-lang-toggle" role="group" aria-label="Language">
                <button
                  type="button"
                  className={lang === "en" ? "active" : ""}
                  onClick={() => switchLang("en")}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={lang === "hi" ? "active" : ""}
                  onClick={() => switchLang("hi")}
                >
                  HI
                </button>
              </div>
              <button
                type="button"
                className="ai-close"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="ai-panel-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ai-msg ai-msg-${m.role}`}>
                <p>{m.text}</p>
                {m.cta && (
                  <Link to={m.cta.to} className="ai-cta">
                    {m.cta.label} <FaArrowRight />
                  </Link>
                )}
                {m.chips && (
                  <div className="ai-chips">
                    {m.chips.map((chip) => (
                      <button
                        type="button"
                        key={chip}
                        className="ai-chip"
                        onClick={() => send(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="ai-msg ai-msg-bot">
                <p className="ai-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              </div>
            )}
          </div>

          <div className="ai-contact-strip">
            <Link to="/contact">{t.contactUs}</Link>
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
              <FaPhoneAlt /> {company.phones[0]}
            </a>
            <a href={`mailto:${company.email}`}>
              <FaEnvelope /> {company.email}
            </a>
          </div>

          <form
            className="ai-panel-input"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <button
              type="button"
              className={`ai-mic-btn${listening ? " listening" : ""}`}
              onClick={toggleListening}
              aria-label={t.micTitle}
              title={t.micTitle}
            >
              <FaMicrophone />
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={listening ? t.micListening : t.inputPlaceholder}
              aria-label={t.inputPlaceholder}
            />
            <button type="submit" aria-label="Send" disabled={!input.trim()}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      <div className="ai-dock">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="ai-whatsapp"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <button
          type="button"
          className="ai-launcher"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <FaRobot />
          <span>Ask AI</span>
        </button>
      </div>
    </div>
  );
}

export default AIAssistant;
