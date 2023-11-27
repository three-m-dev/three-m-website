import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateApplication } from "../hooks/useCreateApplication";

interface Props {
  onFileChange: (file: File | null) => void;
}

const CareerApplication = () => {
  const { careerId } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [answers, setAnswers] = useState([
    { question: "Do you give a shit?", answer: "" },
    { question: "Are you versatile?", answer: "" },
    { question: "Do you create solutions?", answer: "" },
    { question: "Do you like to have fun?", answer: "" },
  ]);

  const { createApplication, createdApplication, isLoading, error } =
    useCreateApplication();

  const navigate = useNavigate();

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
    setAnswers((prevQandA) =>
      prevQandA.map((qa, idx) =>
        idx === index ? { ...qa, answer: newValue } : qa,
      ),
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const applicationData = {
      applicant: {
        firstName,
        lastName,
        email,
        phoneNumber,
        resume: resume ? resume.name : null,
        answers,
      },
    };

    await createApplication(careerId!, applicationData);

    if (!error) {
      navigate("/careers");
    }
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
                className="mb-4 w-full rounded border-2 border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
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
                className="mb-4 w-full rounded border-2 border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full rounded border-2 border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
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
                className="mb-4 w-full rounded border-2 border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="file-upload"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Resume / Coverletter
            </label>
            <div className="flex items-center justify-center">
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer items-center space-x-2 rounded-l border-2 border-primary bg-primary px-4 py-2.5 text-sm font-bold uppercase text-white hover:bg-white hover:text-primary focus:outline-none"
              >
                <span>Upload</span>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
              <div
                id="file-upload-name"
                className="flex-1 rounded-r border-2 border-l-0 border-gray-200 bg-white p-2 text-gray-900"
              >
                {resume ? resume.name : "No files chosen"}
              </div>
            </div>
          </div>

          {answers.map((qa, index) => (
            <div key={index}>
              <label
                htmlFor={`question-${index}`}
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                {qa.question}
              </label>
              <textarea
                id={`question-${index}`}
                placeholder="Answer here"
                required
                value={qa.answer}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mb-2.5 w-full rounded border-2 border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
              ></textarea>
            </div>
          ))}

          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Additional Information
            </label>
            <textarea
              placeholder="Please provide any additional information about yourself!"
              required
              className="mb-2.5 w-full rounded border-2 border-gray-200 bg-white p-2 text-gray-700 shadow-sm transition focus:border-primary focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            {error && <div>{error}</div>}
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

export default CareerApplication;
