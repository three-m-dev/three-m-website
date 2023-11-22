import { useEffect } from "react";
import {
  CareerDetails,
  CareerList,
  Footer,
  Navbar,
  ResumeBucket,
} from "../components";
import { useGetCareerListings } from "../hooks/useGetCareerListings";
import { Route, Routes, useParams } from "react-router";
import { ICareerListing } from "../interfaces/ICommon"; // Import your ICareerListing type

const Careers = () => {
  const { getCareerListings, careerListings, isLoading, error } =
    useGetCareerListings();

  useEffect(() => {
    getCareerListings();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <CareerList careerListings={careerListings} />
              <ResumeBucket />
            </>
          }
        />
        <Route
          path="/:careerId"
          element={<CareerDetailsWrapper careerListings={careerListings} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

interface CareerDetailsWrapperProps {
  careerListings: ICareerListing[];
}

const CareerDetailsWrapper = ({
  careerListings,
}: CareerDetailsWrapperProps) => {
  const { careerId } = useParams<{ careerId: string }>();
  const selectedCareer = careerListings.find(
    (listing) => listing.id === careerId,
  );

  if (!selectedCareer) {
    return <div>Career not found.</div>;
  }

  return <CareerDetails careerDetails={selectedCareer} />;
};

export default Careers;
