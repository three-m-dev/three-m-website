import { useState } from "react";
import { useCreateInquiry } from "../hooks/useCreateInquiry";

const ContactBlock = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  const { createInquiry, error } = useCreateInquiry();

  let apiKey;

  if (import.meta.env.VITE_GOOGLE_API_KEY) {
    apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  } else {
    apiKey = process.env.VITE_GOOGLE_API_KEY;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inquiryData = {
      organization: 1,
      message: {
        name,
        company,
        email,
        subject,
        body,
      },
    };

    console.log(inquiryData);

    setMessageSubmitted(true);

    if (messageSubmitted) {
      return;
    }

    const result = await createInquiry(inquiryData);

    if (result.success) {
      setMessageSubmitted(true);
    } else {
      console.error("Error submitting inquiry:", error);
    }
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary">
            Connect with Us
          </span>
          <h1 className="mb-4 font-bebas text-3xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
            Contact Information
          </h1>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Reach out to us for inquiries, feedback, or support. We are always
            here to assist you.
          </p>
        </div>
        <div className="mb-8 flex flex-col-reverse gap-8 md:flex-row">
          <div className="h-[495px] w-full rounded bg-red-50 md:min-h-[495px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Google Maps"
              src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=42.577369689941406,-83.4441909790039&zoom=18`}
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full rounded bg-primary">
            <form onSubmit={handleSubmit} className="flex flex-col p-4">
              <div className="flex w-full gap-4">
                <div className="mb-2 w-full">
                  <label className="mb-2 block font-bold text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-600 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-2 w-full">
                  <label className="mb-2 block font-bold text-white">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-600 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2 w-full">
                <label className="mb-2 block font-bold text-white">Email</label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-600 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-2 w-full">
                <label className="mb-2 block font-bold text-white">
                  Subject
                </label>
                <select
                  className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-400 shadow-sm transition focus:border-white focus:outline-none sm:mb-0" // Default color (gray-400)
                  defaultValue=""
                  onChange={(e) => {
                    e.target.className =
                      e.target.value === ""
                        ? "text-md w-full rounded border-white bg-white px-4 py-2 text-gray-400 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                        : "text-md w-full rounded border-white bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0";
                    setSubject(e.target.value);
                  }}
                  required
                >
                  <option value="" className="text-gray-400">
                    Select a Subject
                  </option>
                  <option value="general" className="text-gray-600">
                    General Inquiry
                  </option>
                  <option value="sales" className="text-gray-600">
                    Sales Inquiry
                  </option>
                  <option value="support" className="text-gray-600">
                    Support
                  </option>
                  <option value="other" className="text-gray-600">
                    Other
                  </option>
                </select>
              </div>

              <div className="mb-2 w-full">
                <label className="mb-2 block font-bold text-white">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  rows={5}
                  placeholder="Type Message Here"
                  className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-600 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>

              <div className="flex w-full justify-end">
                <button
                  type="submit"
                  className="rounded border-2 border-white px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-primary"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center p-8">
            <div className="mb-4 rounded border-2 border-primary bg-white p-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold leading-tight md:text-2xl">
              Email
            </h3>
            <div className="flex flex-col gap-1 text-center font-medium text-gray-600">
              <p>info@three-m.com</p>
              <p>sales@three-m.com</p>
              <p>support@three-m.com</p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center p-8">
            <div className="mb-4 rounded border-2 border-primary bg-white p-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold leading-tight md:text-2xl">
              Phone
            </h3>
            <div className="flex flex-col gap-1 text-center font-medium text-gray-600">
              <p>(248) 363 1555</p>
              <p>Sales Ext. xxx</p>
              <p>Quality Ext. xxx</p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center p-8">
            <div className="mb-4 rounded border-2 border-primary bg-white p-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
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
            <h3 className="mb-2 text-xl font-bold leading-tight md:text-2xl">
              Office
            </h3>
            <div className="flex flex-col gap-1 text-center font-medium text-gray-600">
              <p>8155 Richardson Rd</p>
              <p>Commerce Charter Township</p>
              <p>Michigan 48390</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
