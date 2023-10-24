import { useState } from "react";
import { Link } from "react-router-dom";

const BulletinList = () => {
  const [filter, setFilter] = useState<"all" | "article" | "update">("all");

  const bulletinPosts = [
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "article",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "update",
    },
    {
      id: "1",
      date: "23 Oct 2023",
      author: "Jacob Reppuhn",
      title: "Website Revamp: Introducing Our New Digital Frontier!",
      description:
        "We are thrilled to announce the launch of our newly redesigned website! Designed with our valued clients and partners in mind, the revamped site offers a user-friendly experience, improved navigation, and the latest insights into our manufacturing advancements. Explore now to see what's new!",
      type: "update",
    },
  ];

  const filteredPosts = bulletinPosts.filter((post) => {
    if (filter === "all") return true;
    return post.type === filter;
  });

  const loadMore = () => {
    console.log("Loading more");
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto mb-8 md:mb-8 text-center">
          <span className="inline-block py-1 px-2 mb-4 text-sm leading-5 tracking-wider text-primary bg-blue-200 uppercase rounded-md shadow-sm">
            Articles & Updates
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkgray-900 font-bold tracking-tighter">
            Stay informed with the latest from Three M
          </h3>
          <p className="mb-10 text-lg md:text-xl text-gray-500 font-medium">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage your business in one secure
            platform.
          </p>
          <div className="relative mx-auto md:w-80 flex justify-between">
            <input
              className="w-full py-3 pl-12 pr-4 text-gray-900 leading-tight border border-gray-300 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div></div>

        <ul className="flex flex-wrap gap-2 mb-8 text-center text-sm">
          <li>
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md ${
                filter === "all"
                  ? "bg-blue-200 text-primary"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              View All
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("article")}
              className={`px-4 py-2 rounded-md ${
                filter === "article"
                  ? "bg-blue-200 text-primary"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Articles
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("update")}
              className={`px-4 py-2 rounded-md ${
                filter === "update"
                  ? "bg-blue-200 text-primary"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Updates
            </button>
          </li>
        </ul>
        <div className="flex flex-wrap -mx-4">
          {filteredPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <p className="mb-2 text-gray-500 flex gap-2 items-center">
                <span className="uppercase tracking-wider text-sm">
                  {post.date}
                </span>
                <span className="bg-gray-200 text-gray-800 py-1 px-2 text-xs uppercase tracking-wider rounded-md">
                  {post.type}
                </span>
              </p>
              <Link
                className="inline-block mb-2 text-2xl leading-tight text-gray-800 font-bold hover:underline"
                to={`/bulletin/` + post.id}
              >
                {post.title}
              </Link>
              <p className="text-base md:text-lg text-gray-500 font-medium">
                {post.description}
              </p>
              <Link
                className="inline-flex items-center text-base md:text-lg text-primary hover:text-gray-400 font-semibold"
                to={`/bulletin/` + post.id}
              ></Link>
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
