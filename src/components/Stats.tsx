const Stats = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center text-center -mx-4">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h2 className="mb-2 text-4xl md:text-5xl font-bold text-coolGray-900 tracking-tighter">
              50+
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Years of Dedication
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h2 className="mb-2 font-bold text-4xl md:text-5xl text-coolGray-900 tracking-tighter">
              45
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Team Members
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            <h2 className="mb-2 font-bold text-4xl md:text-5xl text-coolGray-900 tracking-tighter">
              15,000+
            </h2>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Jobs Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
