import { useState } from "react";
import { ServiceModal } from ".";

const ServiceBlocks = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    if (!isModalOpen) {
      const documentWidth = document.documentElement.clientWidth;
      const scrollbarWidth = Math.abs(window.innerWidth - documentWidth);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    setModalOpen(!isModalOpen);
  };

  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <span className="inline-block py-1 px-2 mb-4 text-sm leading-5 text-primary bg-blue-200 uppercase rounded-md shadow-sm">
            Innovative Manufacturing
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-gray-800 font-bold tracking-tighter">
            Modern Precision Manufacturing
          </h3>
          <p className="mb-10 text-lg md:text-xl text-gray-500 font-medium">
            Discover the blend of classic craftsmanship and today's technology.
            Together, we reshape industry standards.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 px-4 mb-8">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex items-end h-72 w-full p-6 rounded-md overflow-hidden"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://www.pretool.com/uploads/3/7/8/6/37861209/header_images/1687817843.jpg"
                    alt=""
                  />
                  <div className="relative">
                    <a
                      className="font-heading text-lg text-white hover:underline"
                      href="#"
                    >
                      Inspection
                    </a>
                  </div>
                </button>
              </div>
              <div className="w-full sm:w-1/2 px-4 mb-8">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex items-end h-72 w-full p-6 rounded-md overflow-hidden"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://www.mantool.com/wp-content/uploads/2020/01/3-Axis-CNC-machining3.jpg"
                    alt=""
                  />
                  <div className="relative">
                    <a
                      className="font-heading text-lg text-white hover:underline"
                      href="#"
                    >
                      Machining Centers
                    </a>
                  </div>
                </button>
              </div>
              <div className="w-full px-4">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex items-end h-140 w-full p-6 rounded-md overflow-hidden"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://www.fictiv.com/wp-content/uploads/2022/08/metalworking-cnc-milling-machine-cutting-metal-shutterstock_1020591757-scaled.jpeg"
                    alt=""
                  />
                  <div className="relative">
                    <a
                      className="font-heading text-3xl text-white hover:underline"
                      href="#"
                    >
                      Vertical Turning
                    </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-8">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex items-end h-140 w-full p-6 rounded-md overflow-hidden"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://cdn.thomasnet.com/insights-images/embedded-images/995dbbb4-8673-4b23-aa7f-dadb502d6463/46a74a51-dd51-4254-b28e-378e65cbbd0d/FullHD/A-horizontal-CNC-milling-machine-performing-a-milling-operation-on-a-metal-part.jpg"
                    alt=""
                  />
                  <div className="relative">
                    <a
                      className="font-heading text-3xl text-white hover:underline"
                      href="#"
                    >
                      Horizontal Turning
                    </a>
                  </div>
                </button>
              </div>
              <div className="w-full sm:w-1/2 px-4 mb-8 sm:mb-0">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex items-end h-72 w-full p-6 rounded-md overflow-hidden"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://cdn.emag.com/fileadmin/_processed_/f/2/csm_grinding-machines_1120x800_bcdd32a477.jpg"
                    alt=""
                  />
                  <div className="relative">
                    <a
                      className="font-heading text-lg text-white hover:underline"
                      href="#"
                    >
                      Grinding
                    </a>
                  </div>
                </button>
              </div>
              <div className="w-full sm:w-1/2 px-4">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex items-end h-72 w-full p-6 rounded-md overflow-hidden"
                >
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://envato-shoebox-0.imgix.net/d030/20fc-319e-4b3a-aa63-0a2207abcc60/48676.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=d3640ba5e0e684ca99e6acc95b6b4618"
                    alt=""
                  />
                  <div className="relative">
                    <a
                      className="font-heading text-lg text-white hover:underline"
                      href="#"
                    >
                      Assembly
                    </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ServiceModal toggle={toggleModal} />}
    </section>
  );
};

export default ServiceBlocks;
