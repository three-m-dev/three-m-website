import {
  BulletinPreview,
  ContentBlock,
  Footer,
  Hero,
  Navbar,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContentBlock />
      <Testimonials />
      <BulletinPreview />
      <Footer />
    </>
  );
};

export default Home;
