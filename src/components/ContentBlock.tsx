const ContentBlock = () => {
  return (
    <section className="bg-primary text-white">
      <div className="py-8 px-4 md:px-8 mx-auto max-w-screen-xl lg:py-16">
        <div className="max-w-screen-lg sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-wide uppercase">
            Powering innovation at <span className="font-bold">200,000+</span>{" "}
            companies worldwide
          </h2>
          <p className="mb-4 font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ex unde corrupti non atque sed modi pariatur consequatur excepturi, aliquam similique aperiam autem enim, accusantium, facilis voluptates voluptas odio! Suscipit.
          </p>
          <p className="mb-4 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consectetur dignissimos facilis dicta! Quae laudantium sint rerum quasi veniam molestias sunt quis, nam odit totam in quia. Ratione, esse laboriosam.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Learn more
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
