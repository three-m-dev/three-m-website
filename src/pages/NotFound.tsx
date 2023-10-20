import { Button, Footer, Navbar } from "../components";

const NotFound = () => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="h-full flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl px-8 text-center">
            Uh oh.. Looks like that page doesn't exist
          </h1>
          <Button type="link" text="Return Home" to="/" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
