import {
  Footer,
  Hero,
  ImageMenu,
  Navbar,
  NewsletterCTA,
  ServicePreview,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicePreview />
      <Testimonials />
      <ImageMenu />
      <NewsletterCTA />
      <Footer />
    </>
  );
};

export default Home;
