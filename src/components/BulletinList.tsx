import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type PostType = {
  id: number;
  date: string;
  type: "article" | "update";
  title: string;
  description: string;
};

const BulletinList = () => {
  const [filter, setFilter] = useState<"all" | "article" | "update">("all");
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("../data/posts.json")
      .then((response) => response.json())
      .then((data: PostType[]) => {
        if (filter === "all") {
          setFilteredPosts(data);
        } else {
          setFilteredPosts(data.filter((post) => post.type === filter));
        }
      })
      .catch((error) => console.error("Error fetching the posts:", error))
      .finally(() => setLoading(false));
  }, [filter]);

  const loadMore = () => {
    console.log("Loading more");
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-8 text-center md:mb-8 md:max-w-5xl">
          <span className="mb-4 inline-block rounded-md bg-blue-200 px-2 py-1 text-sm uppercase leading-5 tracking-wider text-primary shadow-sm">
            News & Insights
          </span>
          <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-5xl">
            The Latest Developments from Three M
          </h3>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Stay ahead of the curve. Explore our latest projects, innovations,
            and milestones, all in one place.
          </p>
        </div>

        <ul className="mb-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm">
          <li>
            <button
              onClick={() => setFilter("all")}
              className={`rounded-md px-4 py-2 text-gray-800 transition-all duration-300 ${
                filter === "all" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              View All
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("article")}
              className={`rounded-md px-4 py-2 text-gray-800 transition-all duration-300 ${
                filter === "article" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Articles
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("update")}
              className={`rounded-md px-4 py-2 text-gray-800 transition-all duration-300 ${
                filter === "update" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Updates
            </button>
          </li>
        </ul>
        <div className="-mx-4 flex flex-wrap">
          {loading ? (
            <div className="w-full py-10 text-center">
              <div className="loader"></div>{" "}
              {/* Replace with your loader animation */}
              <p>Loading...</p>
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <div key={index} className="mb-8 w-full px-4 md:w-1/2">
                <p className="mb-2 flex items-center gap-2 text-gray-500">
                  <span className="text-sm uppercase tracking-wider">
                    {post.date}
                  </span>
                  <span className="rounded-md bg-blue-200 px-2 py-1 text-xs uppercase tracking-wider text-primary">
                    {post.type}
                  </span>
                </p>
                <Link
                  className="mb-2 inline-block text-2xl font-bold leading-tight text-gray-800 hover:underline"
                  to={`/bulletin/` + post.id}
                >
                  {post.title}
                </Link>
                <p className="text-base font-medium text-gray-500 md:text-lg">
                  {post.description}
                </p>
                <Link
                  className="inline-flex items-center text-base font-semibold text-primary hover:text-gray-400 md:text-lg"
                  to={`/bulletin/` + post.id}
                ></Link>
              </div>
            ))
          )}
        </div>
        {filteredPosts.length > 6 && !loading && (
          <div className="flex flex-col items-center">
            <button
              onClick={loadMore}
              className="rounded-md border-2 border-primary bg-primary px-4 py-2 font-bold uppercase text-white hover:bg-white hover:text-primary"
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
