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
              <h1 className="font-bebas mb-4 text-3xl font-bold tracking-wide text-gray-800 md:text-5xl">
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
              className="flex flex-col items-center gap-4 rounded bg-gray-200 p-8"
              onSubmit={handleSubmit}
            >
              <label className="block w-full">
                <span className="text-gray-700">First name</span>
                <input
                  className="form-input mt-1 block w-full rounded px-1 py-2 caret-gray-400 focus:outline-none"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className="block w-full">
                <span className="text-gray-700">Last name</span>
                <input
                  className="form-input mt-1 block w-full rounded px-1 py-2 caret-gray-400 focus:outline-none"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>

              <label className="block w-full">
                <span className="text-gray-700">Company</span>
                <input
                  className="form-input mt-1 block w-full rounded px-1 py-2 caret-gray-400 focus:outline-none"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>

              <label className="block w-full">
                <span className="text-gray-700">Email</span>
                <input
                  className="form-input mt-1 block w-full rounded px-1 py-2 caret-gray-400 focus:outline-none"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="block w-full">
                <span className="text-gray-700">Phone</span>
                <input
                  className="form-input mt-1 block w-full rounded px-1 py-2 caret-gray-400 focus:outline-none"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <label className="block w-full">
                <span className="text-gray-700">Message</span>
                <textarea
                  rows={5}
                  className="form-input mt-1 block w-full rounded px-1 py-2 caret-gray-400 focus:outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <div className="flex w-full justify-end">
                <button
                  className="text-md rounded border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white"
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
