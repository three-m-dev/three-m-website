import React, { useState } from "react";

const ResumeBucket = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      const allowedExtensions = [".pdf", ".doc", ".docx"];
      const fileExtension = selectedFile.name.toLowerCase().slice(-4);

      if (allowedExtensions.includes(fileExtension)) {
        setResume(selectedFile);
      } else {
        console.error(
          "Invalid file extension. Please select a PDF or DOC file.",
        );
        setResume(null);
      }
    } else {
      setResume(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center px-4 lg:col-span-2">
            <h1 className="mb-4 text-center font-bebas text-4xl font-bold leading-tight tracking-wider text-gray-800 md:text-5xl">
              Don't see a position that fits?
            </h1>
            <p className="text-center text-lg font-medium text-gray-500 md:text-xl">
              Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
          </div>

          <div className="rounded bg-primary p-8 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">First Name</label>
                  <input
                    className="w-full rounded border-gray-200 p-3 text-sm focus:outline-none"
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="sr-only">Last Name</label>
                  <input
                    className="w-full rounded border-gray-200 p-3 text-sm focus:outline-none"
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">Email</label>
                  <input
                    className="w-full rounded border-gray-200 p-3 text-sm focus:outline-none"
                    placeholder="Email Address"
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>

                <div>
                  <label className="sr-only">Phone</label>
                  <input
                    className="w-full rounded border-gray-200 p-3 text-sm focus:outline-none"
                    placeholder="Phone Number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                <label className="sr-only">Resume</label>
                <input
                  className="hidden w-full border-gray-200 text-sm text-white"
                  id="upload-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col-reverse gap-4 sm:flex-row">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      document.getElementById("upload-file")?.click();
                    }}
                    className="text-md rounded border-2 border-white px-4 py-2 font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-primary"
                  >
                    Upload
                  </button>
                  {resume !== null && (
                    <div className="flex w-full items-center justify-center sm:justify-start">
                      <p className="text-white">{resume.name}</p>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="text-md rounded border-2 border-white px-4 py-2 font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-primary"
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

export default ResumeBucket;
