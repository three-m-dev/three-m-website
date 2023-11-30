import { useState } from "react";
import { useCreateSubscriber } from "../hooks/useCreateSubscriber";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);

  const [dataSubmitted, setDataSubmitted] = useState(false);

  const { createSubscriber, error } = useCreateSubscriber();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subscriberData = {
      email: email,
    };

    if (email === "") {
      setEmptyEmail(true);
      return;
    } else {
      setEmptyEmail(false);
    }

    const result = await createSubscriber(subscriberData);

    if (result.success) {
      setDataSubmitted(true);
    }
  };

  return (
    <section className="bg-primary py-8 md:py-16">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex min-h-[208px] items-center justify-center">
          {!dataSubmitted ? (
            <div className="w-full">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="mb-4 text-center font-bebas text-3xl font-bold leading-tight tracking-wider text-white md:text-5xl">
                  Join our Newsletter
                </h1>

                <p className="hidden text-white sm:mt-4 sm:block">
                  Get the latest updates, exclusive insights, and expert tips
                  from the heart of the manufacturing world. Don't miss out on
                  the innovations of Three M.
                </p>
              </div>

              <div className="mx-auto mt-8 max-w-xl">
                <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
                  <div className="sm:flex-1">
                    <label className="sr-only">Email address</label>

                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={
                        `text-md w-full rounded bg-white px-4 py-2 text-gray-700 shadow-sm transition-all focus:border-white focus:outline-none sm:mb-0 ` +
                        (emptyEmail ? ` placeholder-red-500` : ``) +
                        (error ? ` text-red-500` : ``)
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 rounded border-2 border-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-primary sm:mt-0"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <div className="mx-auto max-w-lg text-center">
                <h1 className="mb-4 text-center font-bebas text-3xl font-bold leading-tight tracking-wider text-white md:text-5xl">
                  Welcome to Our Community!
                </h1>

                <p className="text-white sm:block">
                  Thank you for subscribing!
                </p>
                <p className="text-white sm:mt-2 sm:block">
                  Stay tuned for the latest updates and expert tips from the
                  manufacturing world.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
