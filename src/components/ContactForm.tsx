import { useState } from "react";
import { useCreateInquiry } from "../hooks/useCreateInquiry";

const ContactForm = () => {
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [body, setBody] = useState("");

  const { createInquiry, error } = useCreateInquiry();

  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inquiryData = {
      company: 1,
      message: {
        firstName,
        lastName,
        company,
        phoneNumber,
        email,
        body,
      },
    };

    const result = await createInquiry(inquiryData);

    if (result.success) {
      setMessageSubmitted(true);
    } else {
      console.error("Error submitting inquiry:", error);
    }
  };

  return (
    <>
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
              <div className="flex h-full w-full rounded bg-gray-400 md:h-full">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Google Maps"
                  src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_API_KEY}&center=42.577369689941406,-83.4441909790039&zoom=18`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded bg-primary p-8">
                {!messageSubmitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col gap-4"
                  >
                    <h2 className="font-bebas text-3xl font-bold leading-tight tracking-wide text-white md:text-4xl">
                      Send us a message
                    </h2>

                    <div className="flex w-full flex-col gap-4 sm:flex-row">
                      <input
                        className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />

                      <input
                        className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>

                    <div className="flex w-full flex-col gap-4 sm:flex-row">
                      <input
                        className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                        type="text"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />

                      <input
                        className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                        type="text"
                        placeholder="Phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <input
                      className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <textarea
                      className="text-md w-full rounded border-white bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none sm:mb-0"
                      rows={4}
                      placeholder="Message"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />

                    <div className="flex w-full justify-end">
                      <button
                        className="rounded border-2 border-white px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-primary"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-bold text-white">
                      Thank you for reaching out!
                    </h1>
                    <p className="text-white">
                      A Three M representative will contact you within 1
                      business day.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white py-8 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/3">
              <div className="h-full p-8 text-center">
                <div className="mx-auto mb-7 inline-flex items-center justify-center rounded border-2 border-primary bg-white p-2 text-primary">
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                  Quality
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Delivering products that are both visually flawless and
                  functionally impeccable. Excellence in every detail.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="h-full p-8 text-center">
                <div className="mx-auto mb-7 inline-flex items-center justify-center rounded border-2 border-primary bg-white p-2 text-primary">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                  Efficiency
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Prioritizing right-first-time processes. Leveraging technology
                  and training for cost-effective solutions.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="h-full p-8 text-center">
                <div className="mx-auto mb-7 inline-flex items-center justify-center rounded border-2 border-primary bg-white p-2 text-primary">
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
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold leading-tight md:text-2xl">
                  Delivery
                </h3>
                <p className="text-coolGray-500 font-medium">
                  Meeting or beating deadlines, ensuring products reach
                  customers promptly and as expected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
