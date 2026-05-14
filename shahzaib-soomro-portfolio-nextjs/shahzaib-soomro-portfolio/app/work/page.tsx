import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function WorkPage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section className="page-hero">
          <div className="eyebrow">
            <span className="dot"></span>
            Portfolio
          </div>
          <h1>Selected Work</h1>
          <p>
            A showcase of my video editing projects. Replace these cards with your
            best real work, thumbnails, YouTube links, or client results.
          </p>
        </section>

        <section className="page-section">
          <div className="grid">
            {projects.map((project, index) => (
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
