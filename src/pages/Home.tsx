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
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <ContentBlock />
      <Testimonials />
      <BulletinPreview />
      <Footer />
    </>
  );
};

export default Home;
