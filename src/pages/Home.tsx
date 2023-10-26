import {
  Footer,
  Hero,
  ImageMenu,
  Navbar,
  NewsletterCTA,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <ImageMenu />
      <NewsletterCTA />
      <Footer />
    </>
  );
};

export default Home;
