import { Helmet } from "react-helmet";
import { BulletinList, Footer, Navbar, NewsletterCTA } from "../components";

const Bulletin = () => {
  return (
    <>
      <Helmet>
        <title>Three M | Bulletin</title>
        <meta
          name="description"
          content="Three M Tool & Machine Inc. specializes in tool and machine services including bench work, assembly, lathe operations, grinding, and milling. Dedicated to precision and quality in every project."
        />
        <meta
          name="keywords"
          content="tool shop, machine shop, bench work, assembly services, lathe operations, precision grinding, milling services, CNC machining, precision machining, industrial machining, Michigan machine shop, quality machining, custom machining solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
      </Helmet>

      <Navbar />
      <BulletinList />
      <NewsletterCTA />
      <Footer />
    </>
  );
};

export default Bulletin;
