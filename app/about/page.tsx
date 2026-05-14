import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { skills } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section className="page-hero">
          <div className="eyebrow">
            <span className="dot"></span>
            About Shahzaib
          </div>
          <h1>Professional Freelance Video Editor</h1>
          <p>
            I work with local and international clients, creating engaging and
            conversion-focused videos for businesses, brands, and creators.
          </p>
        </section>

        <section className="page-section">
          <div className="about-layout">
            <div className="about-card">
              <h3>Editing Style</h3>
              <p className="card-text">
                Clean, modern, professional, high-retention, fast-paced, engaging,
                cinematic editing with smooth transitions, sound design, and color grading.
              </p>
            </div>

            <div className="about-card">
              <h3>Main Software</h3>
              <p className="card-text">
                DaVinci Resolve is my main editing software for professional video editing,
                color grading, transitions, audio, and cinematic storytelling.
              </p>
              <div className="skill-wrap">
                {skills.map((skill) => (
                  <span className="skill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
