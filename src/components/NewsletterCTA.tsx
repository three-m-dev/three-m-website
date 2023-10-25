const NewsletterCTA = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-10 w-full px-4 md:mb-0 md:w-1/2">
            <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Sign up for our newsletter
            </h3>
            <p className="text-coolGray-500 text-lg font-medium md:text-xl">
              Stay in the loop with everything you need to know.
            </p>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mx-auto md:mr-0 md:max-w-md">
              <div className="mb-1 flex flex-wrap">
                <div className="mb-3 w-full md:mb-0 md:mr-6 md:flex-1">
                  <input
                    className="text-coolGray-500 placeholder-coolGray-500 border-coolGray-200 shadow-xsm w-full rounded-lg border px-4 py-3 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <button className="text-md rounded-md border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
