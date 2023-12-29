import { useState } from "react";
import { ServiceModal } from ".";
import vertical from "../assets/images/vertical-turning.jpg";
import grind from "../assets/images/grind.jpg";
import bench from "../assets/images/bench.jpg";

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
    <section className="overflow-hidden py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary">
            Innovative Manufacturing
          </span>
          <h1 className="mb-4 font-bebas text-3xl font-bold leading-tight tracking-wide text-gray-800 md:text-5xl">
            Precision Manufacturing
          </h1>
          <p className="text-lg font-medium text-gray-500 md:text-xl">
            Discover the blend of classic craftsmanship and today's technology.
            Together, we reshape industry standards.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
            <div className="-mx-4 flex flex-wrap">
              <div className="mb-8 w-full px-4 sm:w-1/2">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex h-72 w-full items-end overflow-hidden"
                >
                  <img
                    className="absolute left-0 top-0 h-full w-full rounded object-cover"
                    src="https://www.pretool.com/uploads/3/7/8/6/37861209/header_images/1687817843.jpg"
                    alt=""
                  />
                  <div className="group relative flex h-full w-full items-end justify-start bg-transparent p-2 transition-all duration-300 hover:bg-white/50">
                    <span className="font-heading rounded border-2 border-white bg-white px-4 py-2 text-sm uppercase tracking-wider text-primary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      Inspection
                    </span>
                  </div>
                </button>
              </div>
              <div className="mb-8 w-full px-4 sm:w-1/2">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex h-72 w-full items-end overflow-hidden"
                >
                  <img
                    className="absolute left-0 top-0 h-full w-full rounded object-cover"
                    src="https://www.mantool.com/wp-content/uploads/2020/01/3-Axis-CNC-machining3.jpg"
                    alt=""
                  />
                  <div className="group relative flex h-full w-full items-end justify-start bg-transparent p-2 transition-all duration-300 hover:bg-white/50">
                    <span className="font-heading rounded border-2 border-white bg-white px-4 py-2 text-sm uppercase tracking-wider text-primary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      Machining Centers
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full px-4">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex h-72 w-full items-end overflow-hidden sm:h-140"
                >
                  <img
                    className="absolute left-0 top-0 h-full w-full rounded object-cover hover:opacity-50"
                    src={vertical}
                    alt=""
                  />
                  <div className="group relative flex h-full w-full items-end justify-start bg-transparent p-2 transition-all duration-300 hover:bg-white/50">
                    <span className="font-heading rounded border-2 border-white bg-white px-4 py-2 text-sm uppercase tracking-wider text-primary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      Vertical Turning
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-4 flex flex-wrap">
              <div className="mb-8 w-full px-4">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex h-72 w-full items-end overflow-hidden sm:h-140"
                >
                  <img
                    className="absolute left-0 top-0 h-full w-full rounded object-cover"
                    src="https://cdn.thomasnet.com/insights-images/embedded-images/995dbbb4-8673-4b23-aa7f-dadb502d6463/46a74a51-dd51-4254-b28e-378e65cbbd0d/FullHD/A-horizontal-CNC-milling-machine-performing-a-milling-operation-on-a-metal-part.jpg"
                    alt=""
                  />
                  <div className="group relative flex h-full w-full items-end justify-start bg-transparent p-2 transition-all duration-300 hover:bg-white/50">
                    <span className="font-heading rounded border-2 border-white bg-white px-4 py-2 text-sm uppercase tracking-wider text-primary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      Horizontal Turning
                    </span>
                  </div>
                </button>
              </div>
              <div className="mb-8 w-full px-4 sm:mb-0 sm:w-1/2">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex h-72 w-full items-end overflow-hidden"
                >
                  <img
                    className="absolute left-0 top-0 h-full w-full rounded object-cover"
                    src={grind}
                    alt=""
                  />
                  <div className="group relative flex h-full w-full items-end justify-start bg-transparent p-2 transition-all duration-300 hover:bg-white/50">
                    <span className="font-heading rounded border-2 border-white bg-white px-4 py-2 text-sm uppercase tracking-wider text-primary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      Grinding
                    </span>
                  </div>
                </button>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <button
                  onClick={() => {
                    toggleModal();
                  }}
                  className="relative flex h-72 w-full items-end overflow-hidden"
                >
                  <img
                    className="absolute left-0 top-0 h-full w-full rounded object-cover"
                    src={bench}
                    alt=""
                  />
                  <div className="group group relative flex h-full w-full items-end justify-start bg-transparent p-2 transition-all duration-300 hover:bg-white/50">
                    <span className="font-heading rounded border-2 border-white bg-white px-4 py-2 text-sm uppercase tracking-wider text-primary transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      Bench Work
                    </span>
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
