import Layout from "../../app/layout";
import Testimonials from "./Clients";
import Expertise from "./Expertise";
import FAQ from "./Faq";
import HeroPage from "./Hero";

function HomePage() {
  return (
    <Layout>
      <section id="home">
        <HeroPage />
      </section>

      <section id="services">
        <Expertise />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </Layout>
  );
}

export default HomePage;
