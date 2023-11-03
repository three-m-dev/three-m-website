import { useState } from "react";

const NewsletterCTA = () => {
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email address:", emailAddress);
  };

  return (
    <section className="bg-primary py-8 md:py-16">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="font-bebas mb-4 text-center text-3xl font-bold leading-tight tracking-wider text-white md:text-5xl">
            Join our Newsletter
          </h1>

          <p className="hidden text-white sm:mt-4 sm:block">
            Get the latest updates, exclusive insights, and expert tips from the
            heart of the manufacturing world. Don't miss out on the innovations
            of Three M.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label className="sr-only">Email address</label>

              <input
                type="email"
                placeholder="Email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="mb-4 w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
              />
            </div>

            <button
              type="submit"
              className="text-md rounded border-2 border-white px-4 py-2 font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <span> Sign Up </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
