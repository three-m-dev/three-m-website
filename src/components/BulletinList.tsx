import { useState } from "react";
import { Link } from "react-router-dom";

const BulletinList = () => {
  const [bulletinView, setBulletinView] = useState();

  const bulletinPosts = [
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "Update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "Update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "Update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "Update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "Update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "Update",
    },
  ];

  const loadMore = () => {
    console.log("Loading more");
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
          <span className="inline-block py-1 px-2 mb-4 text-sm leading-5 text-primary bg-blue-200 uppercase rounded-md shadow-sm">
            Articles & Updates
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
            Stay informed with the latest from Three M
          </h3>
          <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage your business in one secure
            platform.
          </p>
          <div className="relative mx-auto md:w-80">
            <img
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              src="flex-ui-assets/elements/blog/search.svg"
              alt=""
            />
            <input
              className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <ul className="flex flex-wrap mb-8 -mx-2 text-center">
          <li className="w-full md:w-auto px-2">
            <a
              className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-primary hover:bg-blue-200 font-bold rounded-md hover:shadow-sm"
              href="#"
            >
              View All
            </a>
          </li>
          <li className="w-full md:w-auto px-2">
            <a
              className="inline-block w-full py-2 px-4 mb-4 md:mb-0 text-sm text-coolGray-400 hover:text-primary hover:bg-blue-200 font-bold rounded-md hover:shadow-sm"
              href="#"
            >
              Articles
            </a>
          </li>
          <li className="w-full md:w-auto px-2">
            <a
              className="inline-block w-full py-2 px-4 text-sm text-coolGray-400 hover:text-primary hover:bg-blue-200 font-bold rounded-md hover:shadow-sm"
              href="#"
            >
              Updates
            </a>
          </li>
        </ul>
        <div className="flex flex-wrap -mx-4">
          {bulletinPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <a className="block mb-6 overflow-hidden rounded-md" href="#">
                <img
                  className="w-full"
                  src="flex-ui-assets/images/blog/effect.jpg"
                  alt=""
                />
              </a>
              <div className="mb-4">
                <a
                  className="inline-block py-1 px-2 text-sm leading-5 text-primary hover:text-blue-600 bg-blue-200 hover:bg-gray-200 rounded-md shadow-sm"
                  href="#"
                >
                  {post.type}
                </a>
              </div>
              <p className="mb-2 text-coolGray-500 font-medium">
                {post.author} / {post.date}
              </p>
              <Link
                className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline"
                to={`/bulletin/` + post.id}
              >
                {post.title}
              </Link>
              <p className="mb-4 text-base md:text-lg text-coolGray-400 font-medium">
                {post.description}
              </p>
              <Link
                className="inline-flex items-center text-base md:text-lg text-primary hover:text-green-600 font-semibold"
                to={`/bulletin/` + post.id}
              >
                <span className="mr-2">Read Post</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {bulletinPosts.length > 6 && (
          <div className="flex flex-col items-center">
            <button
              onClick={loadMore}
              className="py-2 px-4 bg-primary uppercase font-bold text-white border-2 border-primary rounded-md hover:text-primary hover:bg-white"
            >
              <span>View More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BulletinList;
