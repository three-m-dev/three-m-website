const NewsletterCTA = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
            <h3 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
              Sign up for our newsletter
            </h3>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Stay in the loop with everything you need to know.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mx-auto md:mr-0 md:max-w-md">
              <div className="flex flex-wrap mb-1">
                <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <button className="py-2 px-4 border-2 border-primary uppercase text-primary font-bold rounded-md text-md hover:text-white hover:bg-primary transition-all duration-300">
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
