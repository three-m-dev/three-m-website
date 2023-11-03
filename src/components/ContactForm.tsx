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
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="flex w-full flex-col lg:w-1/2">
            <div>
              <h1 className="font-bebas mb-4 text-4xl font-bold tracking-wide text-gray-800 md:text-5xl">
                Contact Us
              </h1>

              <h2 className="mb-4 text-xl md:text-3xl">
                Three M Tool & Machine Inc.
              </h2>

              <p className="text-lg md:text-2xl">8155 Richardson Road</p>
              <p className="mb-4 text-2xl">Commerce Charter Twp, MI 48390</p>
              <p>
                Email:
                <a href="mailto:sales@three-m.com" className="text-primary">
                  sales@three-m.com
                </a>
              </p>
              <p>
                Phone:
                <a href="tel:2483631555" className="text-primary">
                  248-363-1555
                </a>
              </p>
            </div>
            <div className="h-96 w-full bg-gray-400"></div>
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
                  className="mb-4 w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  className="mb-4 w-full rounded border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
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
                  className="text-md -rounded border-2 border-white px-4 py-2 font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-primary"
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
