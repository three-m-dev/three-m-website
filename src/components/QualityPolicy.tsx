const QualityPolicy = () => {
  return (
    <section className="bg-white p-8 md:p-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-8 text-center md:mb-8 md:max-w-5xl">
          <span className="mb-4 inline-block rounded bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary">
            Excellence in Engineering
          </span>
          <h1 className="mb-4 font-bebas text-3xl font-bold leading-tight tracking-wider text-gray-800 md:text-5xl">
            Our Commitment
          </h1>
          <p className="text-lg font-medium text-gray-500 md:text-xl">
            Driven by precision and efficiency, Three M Tool & Machine delivers
            unparalleled craftsmanship in every product and service.
          </p>
        </div>

        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center px-4 md:px-8">
            <div className="mb-4 rounded border-2 border-primary bg-white p-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">
              Quality
            </h3>
            <div className="flex flex-col text-center font-medium text-gray-600 md:text-lg">
              <p>
                Delivering products that are both visually flawless and
                functionally impeccable. Excellence in every detail.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center px-4 md:px-8">
            <div className="mb-4 rounded border-2 border-primary bg-white p-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">
              Efficiency
            </h3>
            <div className="flex flex-col text-center font-medium text-gray-600 md:text-lg">
              <p>
                Prioritizing right-first-time processes. Leveraging technology
                and training for cost-effective solutions.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center px-4 md:px-8">
            <div className="mb-4 rounded border-2 border-primary bg-white p-2 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 md:text-xl">
              Delivery
            </h3>
            <div className="flex flex-col text-center font-medium text-gray-600 md:text-lg">
              <p>
                Meeting or beating deadlines, ensuring products reach customers
                promptly and as expected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
