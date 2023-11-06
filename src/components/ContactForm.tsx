import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <h1 className="mb-4 text-center font-bebas text-4xl font-bold tracking-wider text-gray-800 md:hidden">
          Contact Us
        </h1>
        <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-16">
          <div className="flex w-full flex-col lg:w-1/2">
            <div>
              <h1 className="mb-4 hidden font-bebas text-5xl font-bold tracking-wider text-gray-800 md:block">
                Contact Us
              </h1>

              <h2 className="font-bebas text-xl font-bold uppercase text-gray-800 md:text-2xl">
                Three M Tool & Machine Inc.
              </h2>

              <p className="text-lg text-gray-800">8155 Richardson Road</p>
              <p className="mb-4 text-lg text-gray-800">
                Commerce Township, MI 48390
              </p>
              <p className="text-lg text-gray-800">
                Email:
                <a
                  href="mailto:sales@three-m.com"
                  className="ml-1 lowercase text-primary"
                >
                  sales@three-m.com
                </a>
              </p>
              <p className="mb-4 text-lg text-gray-800">
                Phone:
                <a href="tel:2483631555" className="ml-1 text-primary">
                  248-363-1555
                </a>
              </p>
            </div>
            <div className="h-44 w-full rounded bg-gray-400 md:h-full"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <form
              className="flex flex-col items-center gap-4 rounded bg-primary p-8"
              onSubmit={handleSubmit}
            >
              <h2 className="font-bebas text-3xl font-bold leading-tight tracking-wide text-white md:text-4xl">
                Send us a message
              </h2>

              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <input
                  className="w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  className="w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <input
                  className="w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />

                <input
                  className="w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <input
                className="w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                className="w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                rows={4}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="flex w-full justify-end">
                <button
                  className="text-md rounded border-2 border-white px-4 py-2 font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-primary"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
