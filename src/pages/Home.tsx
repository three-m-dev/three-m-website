import {
  BulletinPreview,
  ContentBlock,
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;
