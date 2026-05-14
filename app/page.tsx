import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              DaVinci Resolve Video Editor
            </div>
            <h1>
              Premium Videos That <span className="gradient-text">Keep People Watching</span>
            </h1>
            <p>
              I am Shahzaib Soomro, a professional freelance video editor creating clean,
              modern, fast-paced, cinematic, and conversion-focused videos for brands,
              businesses, creators, and international clients.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/work">View My Work</Link>
              <Link className="btn secondary" href="/contact">Contact Me</Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="preview-box">
              <div className="play">▶</div>
            </div>
            <div>
              <div className="timeline"><span></span></div>
              <p className="card-text" style={{ marginTop: "18px" }}>
                Talking Head • VSL • Ads • Podcasts • Reels • YouTube
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="section-top">
            <h2>Selected Work</h2>
            <p>
              Add your best project videos here. Replace the placeholder cards with thumbnails,
              video links, or embedded project previews.
            </p>
          </div>
          <div className="grid">
            {projects.slice(0, 3).map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="thumb">Project {index + 1}</div>
                <div className="tag">{project.category}</div>
                <h3>{project.title}</h3>
                <p className="card-text">{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
