import {
  BulletinPreview,
  ContentBlock,
  Footer,
  FrequentQuestions,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ContentBlock />
      {/* <Testimonials />
      <BulletinPreview /> */}
      <FrequentQuestions />
      <Footer />
    </>
  );
};

export default Home;
