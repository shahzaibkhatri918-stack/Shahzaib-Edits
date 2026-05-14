import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section className="page-hero">
          <div className="eyebrow">
            <span className="dot"></span>
            Editing Services
          </div>
          <h1>Services</h1>
          <p>
            Professional editing services built for attention, retention, and conversions.
          </p>
        </section>

        <section className="page-section">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={service}>
                <h3>{service}</h3>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
