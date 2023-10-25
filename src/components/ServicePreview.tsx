const ServicePreview = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto mb-16 max-w-screen-xl px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-6 w-full px-4 sm:mb-0 sm:w-1/2 xl:w-3/5">
            <h1 className="font-heading text-4xl font-bold text-gray-800">
              Services
            </h1>
          </div>
          <div className="ml-auto w-full px-4 sm:w-1/2 xl:w-auto">
            <div className="flex items-center sm:justify-end">
              <a
                className="mr-4 inline-flex h-8 w-20 items-center justify-center rounded-md border-2 border-primary hover:border-gray-700"
                href="#"
              >
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.06245 8.2123L1.28774 8.2123M1.28774 8.2123L1.28774 2.4376M1.28774 8.2123L8.71236 0.787683"
                    stroke="#84878A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                className="inline-flex h-8 w-20 items-center justify-center rounded-md bg-primary text-white transition duration-200 hover:bg-blue-200"
                href="#"
              >
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.93766 0.787683L8.71236 0.787683M8.71236 0.787683L8.71236 6.56239M8.71236 0.787683L1.28774 8.2123"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden px-4">
        <div className="-mx-4 flex flex-nowrap justify-center">
          <div className="hidden flex-shrink-0 px-4 sm:block sm:w-2/5 lg:w-1/4">
            <a className="group relative block" href="#">
              <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-75"></div>
              <img
                className="mb-6 block h-80 w-full object-cover"
                src="vendia-assets/images/category/category-2-items1.png"
                alt=""
              />
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Desk and Office
                </span>
                <h5 className="mt-2 text-xl font-bold text-white group-hover:text-primary">
                  Work from home accessories
                </h5>
              </div>
            </a>
          </div>
          <div className="hidden w-1/4 flex-shrink-0 px-4 lg:block">
            <a className="group relative block" href="#">
              <img
                className="mb-6 block h-80 w-full object-cover"
                src="vendia-assets/images/category/category-2-items3.png"
                alt=""
              />
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Desk and Office
                </span>
                <h5 className="mt-2 text-xl font-bold text-white group-hover:text-primary">
                  Work from home accessories
                </h5>
              </div>
            </a>
          </div>
          <div className="xs:w-1/2 w-full flex-shrink-0 px-4 sm:w-2/5 lg:w-1/4">
            <a className="group relative block" href="#">
              <img
                className="mb-6 block h-80 w-full object-cover"
                src="vendia-assets/images/category/category-2-items2.png"
                alt=""
              />
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Self-Improvement
                </span>
                <h5 className="mt-2 text-xl font-bold text-white group-hover:text-primary">
                  Book that really helps
                </h5>
              </div>
            </a>
          </div>
          <div className="xs:block xs:w-1/2 hidden flex-shrink-0 px-4 sm:w-2/5 lg:w-1/4">
            <a className="group relative block" href="#">
              <img
                className="mb-6 block h-80 w-full object-cover"
                src="vendia-assets/images/category/category-2-items1.png"
                alt=""
              />
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Fitness
                </span>
                <h5 className="mt-2 text-xl font-bold text-white group-hover:text-primary">
                  Daily exercise essentials
                </h5>
              </div>
            </a>
          </div>
          <div className="hidden flex-shrink-0 px-4 sm:block sm:w-2/5 lg:w-1/4">
            <a className="group relative block" href="#">
              <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-75"></div>
              <img
                className="mb-6 block h-80 w-full object-cover"
                src="vendia-assets/images/category/category-2-items2.png"
                alt=""
              />
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Desk and Office
                </span>
                <h5 className="mt-2 text-xl font-bold text-white group-hover:text-primary">
                  Work from home accessories
                </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
