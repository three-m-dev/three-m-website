import {
  Carousel,
  Footer,
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
      <Carousel />
      <ServicePreview />
      <Testimonials />
      <ImageMenu />
      <NewsletterCTA />
      <Footer />
    </>
  );
};

export default Home;
