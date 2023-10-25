const ServicePreview = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 mb-16">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 xl:w-3/5 mb-6 sm:mb-0 px-4">
            <h1 className="font-heading font-bold text-4xl text-gray-800">
              Services
            </h1>
          </div>
          <div className="w-full sm:w-1/2 xl:w-auto ml-auto px-4">
            <div className="flex items-center sm:justify-end">
              <a
                className="inline-flex w-20 h-8 mr-4 items-center justify-center rounded-md border-2 border-primary hover:border-gray-700"
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
                className="inline-flex w-20 h-8 items-center justify-center rounded-md bg-primary hover:bg-blue-200 transition duration-200 text-white"
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
      <div className="px-4 overflow-hidden">
        <div className="flex flex-nowrap -mx-4 justify-center">
          <div className="flex-shrink-0 hidden sm:block sm:w-2/5 lg:w-1/4 px-4">
            <a className="group block relative" href="#">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
              <img
                className="block mb-6 w-full h-80 object-cover"
                src="vendia-assets/images/category/category-2-items1.png"
                alt=""
              />
              <div>
                <span className="text-sm text-gray-500 font-medium">
                  Desk and Office
                </span>
                <h5 className="text-xl font-bold text-white group-hover:text-primary mt-2">
                  Work from home accessories
                </h5>
              </div>
            </a>
          </div>
          <div className="flex-shrink-0 hidden lg:block w-1/4 px-4">
            <a className="group block relative" href="#">
              <img
                className="block mb-6 w-full h-80 object-cover"
                src="vendia-assets/images/category/category-2-items3.png"
                alt=""
              />
              <div>
                <span className="text-sm text-gray-500 font-medium">
                  Desk and Office
                </span>
                <h5 className="text-xl font-bold text-white group-hover:text-primary mt-2">
                  Work from home accessories
                </h5>
              </div>
            </a>
          </div>
          <div className="flex-shrink-0 w-full xs:w-1/2 sm:w-2/5 lg:w-1/4 px-4">
            <a className="group block relative" href="#">
              <img
                className="block mb-6 w-full h-80 object-cover"
                src="vendia-assets/images/category/category-2-items2.png"
                alt=""
              />
              <div>
                <span className="text-sm text-gray-500 font-medium">
                  Self-Improvement
                </span>
                <h5 className="text-xl font-bold text-white group-hover:text-primary mt-2">
                  Book that really helps
                </h5>
              </div>
            </a>
          </div>
          <div className="flex-shrink-0 hidden xs:block xs:w-1/2 sm:w-2/5 lg:w-1/4 px-4">
            <a className="group block relative" href="#">
              <img
                className="block mb-6 w-full h-80 object-cover"
                src="vendia-assets/images/category/category-2-items1.png"
                alt=""
              />
              <div>
                <span className="text-sm text-gray-500 font-medium">
                  Fitness
                </span>
                <h5 className="text-xl font-bold text-white group-hover:text-primary mt-2">
                  Daily exercise essentials
                </h5>
              </div>
            </a>
          </div>
          <div className="flex-shrink-0 hidden sm:block sm:w-2/5 lg:w-1/4 px-4">
            <a className="group block relative" href="#">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
              <img
                className="block mb-6 w-full h-80 object-cover"
                src="vendia-assets/images/category/category-2-items2.png"
                alt=""
              />
              <div>
                <span className="text-sm text-gray-500 font-medium">
                  Desk and Office
                </span>
                <h5 className="text-xl font-bold text-white group-hover:text-primary mt-2">
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
