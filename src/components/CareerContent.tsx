import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

type Career = {
  id: string;
  title: string;
  description: string;
  location: string;
  salary: string;
  type: string;
  experienceLevel: string;
  requirements: string[];
  responsibilities: string[];
  qualifications: string[];
};

const CareerContent = () => {
  const { careerId } = useParams();
  const [career, setCareer] = useState<Career | null>(null);

  useEffect(() => {
    const fetchCareer = async () => {
      const response = await fetch("../data/careers.json");
      const data = await response.json();
      const foundCareer = data.find((c: Career) => c.id === careerId);
      setTimeout(() => {
        if (foundCareer) {
          setCareer(foundCareer);
        }
      }, 500);
    };

    fetchCareer();
  }, [careerId]);

  if (!career) {
    return (
      <div className="min-h-[90vh] flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-4 text-2xl font-bold">{career.title}</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Description</h3>
          <p>{career.description}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="capitalize">{career.location.replace(/-/g, " ")}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Salary</h3>
          <p>{career.salary}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Type</h3>
          <p className="capitalize">{career.type.replace(/-/g, " ")}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Experience Level</h3>
          <p className="capitalize">
            {career.experienceLevel.replace(/-/g, " ")}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Requirements</h3>
          <ul>
            {career.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Responsibilities</h3>
          <ul>
            {career.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Qualifications</h3>
          <ul>
            {career.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>
        <button className="text-md rounded border-2 border-primary px-4 py-2 font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CareerContent;
