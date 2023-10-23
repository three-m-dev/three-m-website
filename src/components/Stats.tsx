const Stats = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h3 className="mb-4 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
            We believe in the power of data
          </h3>
          <p className="mb-16 xl:mb-24 mx-auto text-lg md:text-xl text-coolGray-500 font-medium max-w-4xl">
            Flex is the only business platform that lets you run your business
            on one platform, seamlessly across all digital channels.
          </p>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
                235.000
              </h2>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                Projects completed
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
                $10m
              </h2>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                APR
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
                +50.000
              </h2>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                Hours Saved Annually
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4">
              <h2 className="mb-2 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
                3.500
              </h2>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                Unique Users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
