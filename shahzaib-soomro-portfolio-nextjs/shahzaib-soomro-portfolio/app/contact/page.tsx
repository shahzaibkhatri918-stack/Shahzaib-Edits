import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section className="page-hero">
          <div className="eyebrow">
            <span className="dot"></span>
            Contact
          </div>
          <h1>Let’s Create Your Next Video</h1>
          <p>
            Need a professional video editor for talking head, VSL, podcast,
            reels, YouTube, event recap, or social media content? Let’s connect.
          </p>
        </section>

        <section className="page-section">
          <div className="contact-box">
            <h2>Available For Projects</h2>
            <p>
              Email: shahzaibkhatri918@gmail.com<br />
              Phone / WhatsApp: 03112224164
            </p>

            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="btn" href="mailto:shahzaibkhatri918@gmail.com">Email Me</a>
              <a className="btn secondary" href="tel:03112224164">Call / WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
