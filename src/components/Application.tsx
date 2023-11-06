import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Application = () => {
  const { careerId } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [questionaire, setQuestionaire] = useState([
    { question: "Do you give a shit?", answer: "" },
    { question: "Are you versatile?", answer: "" },
    { question: "Do you create solutions?", answer: "" },
    { question: "Do you like to have fun?", answer: "" },
  ]);

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

  const handleInputChange = (index: number, newValue: string) => {
    setQuestionaire((prevQandA) =>
      prevQandA.map((qa, idx) =>
        idx === index ? { ...qa, answer: newValue } : qa,
      ),
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const applicationData = {
      id: uuidv4(),
      position: careerId,
      status: "new",
      date: new Date(),
      source: "website",
      applicant: {
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        resume: resume ? resume.name : null,
        questionaire,
      },
    };
    console.log(JSON.stringify(applicationData, null, 2));
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4">
        <form onSubmit={handleSubmit} className="rounded px-8">
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="First Name"
                autoComplete="off"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="last-name"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                autoComplete="off"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="w-full">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                autoComplete="off"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="resume-input"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Resume
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  document.getElementById("upload-resume")?.click()
                }
                className="rounded border-2 border-gray-300 bg-white px-4 py-2 text-left text-gray-700 shadow-sm transition focus:border-primary focus:outline-none focus:ring-0"
              >
                Upload File
              </button>

              {resume && (
                <span className="text-sm text-gray-700">{resume.name}</span>
              )}
              <input
                id="upload-resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {questionaire.map((qa, index) => (
            <div key={index}>
              <label
                htmlFor={`question-${index}`}
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                {qa.question}
              </label>
              <textarea
                id={`question-${index}`}
                placeholder="Your answer"
                required
                value={qa.answer}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mb-2.5 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              ></textarea>
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-md rounded border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Application;
