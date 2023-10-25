const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 text-center md:mb-8 md:max-w-5xl">
          <span className="mb-4 inline-block rounded-md bg-blue-200 px-2 py-1 text-sm uppercase leading-5 tracking-wider text-primary shadow-sm">
            Reach Out & Connect
          </span>
          <h3 className="text-darkgray-900 mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Contact Three M for Business Opportunities
          </h3>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Our dedicated team is here to assist. Connect with us for inquiries,
            support, or partnerships
          </p>
        </div>
        <div className="mx-auto">
          <div className="mx-auto max-w-md rounded-md bg-white shadow md:max-w-none">
            <div className="-mx-4 flex flex-wrap">
              <div className="mb-16 w-full px-4 lg:mb-0 lg:w-1/2">
                <div className="max-w-md">
                  <span className="text-sm font-semibold uppercase">
                    <span>Feel free to </span>
                    <span className="text-primary">contact us</span>
                  </span>
                  <h4 className="font-heading mb-24 mt-2 max-w-xs text-3xl sm:text-4xl">
                    See what this extension tool looks like
                  </h4>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div>
                  <h4 className="font-heading mb-4 text-lg font-medium">
                    Send a message
                  </h4>
                  <form action="">
                    <div className="mb-4">
                      <label className="mb-2 block text-sm leading-6">
                        Name
                      </label>
                      <input
                        className="font-heading block w-full rounded bg-gray-50 p-4 text-gray-300 placeholder-gray-300 outline-none"
                        type="text"
                        placeholder="Type your name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="mb-2 block text-sm leading-6">
                        E-mail address
                      </label>
                      <input
                        className="font-heading block w-full rounded bg-gray-50 p-4 text-gray-300 placeholder-gray-300 outline-none"
                        type="email"
                        placeholder="Type your e-mail"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="mb-2 block text-sm leading-6">
                        Message
                      </label>
                      <textarea
                        className="font-heading block h-40 w-full resize-none rounded bg-gray-50 p-4 text-gray-300 placeholder-gray-300 outline-none"
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                    <div className="text-right">
                      <button
                        className="font-heading mb-4 inline-block w-full rounded-sm border border-primary bg-primary px-6 py-4 text-center text-base font-medium text-white transition duration-200 hover:border-green-600 hover:bg-green-600 sm:mb-0 sm:mr-4 sm:w-auto"
                        type="submit"
                      >
                        Send now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="w-full p-4 md:w-1/3">
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h3 className="font-heading mb-2 text-xl font-black text-gray-900">
                  Email Us
                </h3>
                <p className="font-bold text-gray-500">sales@three-m.com</p>
                <p className="font-bold text-gray-500">support@three-m.com</p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/3">
              <div className="h-full rounded-3xl py-10 text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading mb-2 text-xl font-black text-gray-900">
                  Call Us
                </h3>
                <p className="font-bold text-gray-500">
                  Mon - Fri : 7am - 3:30pm
                </p>
                <p className="font-bold text-gray-500">+1 248 363 1555</p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/3">
              <div className="h-full rounded-3xl py-10 text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading mb-2 text-xl font-black text-gray-900">
                  Address
                </h3>
                <p className="font-bold text-gray-500">8155 Richardson Road</p>
                <p className="font-bold text-gray-500">
                  Commerce, Michigan, 48390
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
