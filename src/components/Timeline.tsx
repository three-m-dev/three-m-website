const Timeline = () => {
  const timelineEvents = [{}];

  return (
    <section className="py-8 md:py-16">
      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-md bg-blue-200 px-2 py-1 text-sm uppercase leading-5 text-primary shadow-sm">
            Timeline & History
          </span>
          <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-5xl">
            Our Journey Over the Years
          </h3>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Explore the key milestones and events that have shaped our company's
            history.
          </p>
        </div>

        <div className="relative text-sm font-semibold text-gray-700 antialiased">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-blue-200 sm:block"></div>

          <div className="mt-6 sm:mb-12 sm:mt-0">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="mx-auto flex w-full items-center justify-start">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="rounded-md border-2 border-primary bg-white p-4 shadow">
                    2000 - Founded with a vision.
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-md bg-primary text-white sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mb-12 sm:mt-0">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="mx-auto flex w-full items-center justify-end">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="rounded-md border-2 border-primary bg-white p-4 shadow">
                    2005 - Launched our first product.
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-md bg-primary text-white sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mb-12 sm:mt-0">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="mx-auto flex w-full items-center justify-start">
                <div className="w-full sm:w-1/2 sm:pr-8">
                  <div className="rounded-md border-2 border-primary bg-white p-4 shadow">
                    2015 - Focused on innovation.
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-md bg-primary text-white sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <div className="flex flex-col items-center sm:flex-row">
              <div className="mx-auto flex w-full items-center justify-end">
                <div className="w-full sm:w-1/2 sm:pl-8">
                  <div className="rounded-md border-2 border-primary bg-white p-4 shadow">
                    2020 - Committed to sustainability.
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-md bg-primary text-white sm:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
