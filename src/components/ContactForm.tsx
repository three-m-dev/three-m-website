const ContactForm = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="md:max-w-5xl mx-auto mb-8 md:mb-8 text-center">
          <span className="inline-block py-1 px-2 mb-4 text-sm leading-5 tracking-wider text-primary bg-blue-200 uppercase rounded-md shadow-sm">
            Reach Out & Connect
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkgray-900 font-bold tracking-tighter">
            Contact Three M for Business Opportunities
          </h3>
          <p className="mb-10 text-md md:text-xl text-gray-500 font-medium">
            Our dedicated team is here to assist. Connect with us for inquiries,
            support, or partnerships
          </p>
        </div>
        <div className="max-w-screen-5xl mx-auto">
          {/* <form className="p-10 bg-gray-100 border border-gray-100 rounded-3xl">
            <div className="flex flex-wrap -m-5 mb-1">
              <div className="w-full md:w-1/2 p-5">
                <label className="block mb-2 text-sm text-gray-500 font-bold">
                  Full Name
                </label>
                <input
                  className="appearance-none px-6 py-3.5 w-full text-md text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-md"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full md:w-1/2 p-5">
                <label className="block mb-2 text-sm text-gray-500 font-bold">
                  Emaill address
                </label>
                <input
                  className="appearance-none px-6 py-3.5 w-full text-md text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-md"
                  type="text"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="flex flex-wrap -m-5">
              <div className="w-full md:w-1/2 p-5">
                <label className="block mb-2 text-sm text-gray-500 font-bold">
                  Phone
                </label>
                <input
                  className="appearance-none px-6 py-3.5 w-full text-md text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-md"
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="w-full md:w-1/2 p-5">
                <label className="block mb-2 text-sm text-gray-500 font-bold">
                  Subject
                </label>
                <input
                  className="appearance-none px-6 py-3.5 w-full text-md text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-md"
                  type="text"
                  placeholder="Type your subject"
                />
              </div>
            </div>
            <div className="flex flex-wrap -m-3.5">
              <div className="w-full p-3.5">
                <label className="block mb-2 text-sm text-gray-500 font-bold">
                  Message
                </label>
                <textarea
                  className="appearance-none px-6 py-5 w-full text-md text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-md"
                  rows={8}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap md:justify-end">
                  <button className="py-2 px-4 border-2 border-primary uppercase text-primary font-bold rounded-md text-md hover:text-white hover:bg-primary transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form> */}
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="py-10 text-center">
                <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-gray-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                  Email Us
                </h3>
                <p className="text-gray-500 font-bold">sales@three-m.com</p>
                <p className="text-gray-500 font-bold">support@three-m.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="py-10 text-center h-full rounded-3xl">
                <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-gray-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                  Call Us
                </h3>
                <p className="text-gray-500 font-bold">
                  Mon - Fri : 7am - 3:30pm
                </p>
                <p className="text-gray-500 font-bold">+1 248 363 1555</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="py-10 text-center h-full rounded-3xl">
                <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-gray-100 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
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
                <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                  Address
                </h3>
                <p className="text-gray-500 font-bold">8155 Richardson Road</p>
                <p className="text-gray-500 font-bold">
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
