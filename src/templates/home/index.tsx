import Testimonials from "./Clients";
import Expertise from "./Expertise";
import FAQ from "./Faq";
import HeroPage from "./Hero";
import FeaturedProjects from "./Projects";

function HomePage() {
  return (
    <div>
      <section id="home">
        <HeroPage />
      </section>

      <section id="services">
        <Expertise />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </div>
  );
}

export default HomePage;
