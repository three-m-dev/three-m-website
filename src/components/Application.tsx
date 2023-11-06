import { useState } from "react";
import { useParams } from "react-router-dom";

const Application = () => {
  const { careerId } = useParams();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [applicationQuestions, setApplicationQuestions] = useState([
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
    setApplicationQuestions((prevQandA) =>
      prevQandA.map((qa, idx) =>
        idx === index ? { ...qa, answer: newValue } : qa,
      ),
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const applicationData = {
      fullName,
      emailAddress,
      phoneNumber,
      resume: resume ? resume.name : null,
      applicationQuestions,
    };
    console.log(JSON.stringify(applicationData, null, 2));
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4">
        <form onSubmit={handleSubmit} className="rounded p-8">
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="Phone"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-300 bg-white p-3 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <input
              id="resume-input"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
              className=" hidden"
            />
          </div>

          {applicationQuestions.map((qa, index) => (
            <div key={index}>
              <textarea
                placeholder={qa.question}
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
