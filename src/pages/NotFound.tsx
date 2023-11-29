import { Helmet } from "react-helmet-async";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
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

      <div className="h-screen">
        <Navbar />
        <div className="flex h-full flex-col items-center justify-center gap-4 pb-40">
          <h1 className="px-8 text-center text-3xl">
            Uh oh.. Looks like that page doesn't exist
          </h1>
          <Link
            to="/"
            className="rounded border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
