import { Footer, Hero, Navbar } from "../components";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </>
  );
};

export default Home;
