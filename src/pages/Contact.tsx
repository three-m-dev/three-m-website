import { Helmet } from "react-helmet";
import { ContactForm, Footer, Navbar } from "../components";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Three M | Contact</title>
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
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
