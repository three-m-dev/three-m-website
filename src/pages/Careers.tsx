import { useEffect } from "react";
import {
  CareerApplication,
  CareerDetails,
  CareerList,
  Footer,
  Navbar,
  ResumeBucket,
} from "../components";
import { useGetCareerListings } from "../hooks/useGetCareerListings";
import { Route, Routes, useParams } from "react-router";
import { ICareerListing } from "../interfaces/ICommon"; // Import your ICareerListing type
import { Helmet } from "react-helmet";

const Careers = () => {
  const { getCareerListings, careerListings, isLoading, error } =
    useGetCareerListings();

  useEffect(() => {
    getCareerListings();
  }, []);

  return (
    <>
      <Helmet>
        <title>Three M | Careers</title>
        <meta
          name="description"
          content="Three M Tool & Machine Inc. specializes in tool and machine services including bench work, assembly, lathe operations, grinding, and milling. Dedicated to precision and quality in every project."
        />
        <meta
          name="keywords"
          content="tool shop, machine shop, bench work, assembly services, lathe operations, precision grinding, milling services, CNC machining, precision machining, industrial machining, Michigan machine shop, quality machining, custom machining solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
      </Helmet>

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

        <Route path="/:careerId/apply" element={<CareerApplication />} />
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
