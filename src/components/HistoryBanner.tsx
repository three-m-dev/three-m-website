import FamilyPhoto from "../assets/images/family-photo.webp";
import MichaelMedwid from "../assets/images/michael-medwid.jpeg";

const HistoryBanner = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[45vh] w-full bg-gray-100">
        <img
          src={FamilyPhoto}
          alt="Family Photo"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <section className="bg-white py-8 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <span className="mb-4 inline-block rounded bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary">
              Family Owned
            </span>
            <h1 className="mb-4 font-bebas text-4xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
              Three M Tool & Machine
            </h1>
            <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
              Excellence in tool and machining since 1971.
            </p>
          </div>

          <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
            <p className="w-full indent-8 text-lg font-medium text-gray-600">
              Founded by Michael Medwid, a pioneer in machining, Three M Tool &
              Machine stands as a hallmark of precision in Commerce Township,
              Michigan. Now led by his son, Sam, the company merges tradition
              with modern technology. The skilled team is committed to
              excellence, managing a range of projects from classic to
              contemporary. This dedication ensures Three M Tool & Machine
              remains at the forefront of the precision engineering industry.
            </p>

            <div className="h-56 w-full overflow-clip rounded bg-red-50 sm:h-80">
              <img
                src={MichaelMedwid}
                alt="Michael Medwid"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryBanner;
