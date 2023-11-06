import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

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
        let filteredData = data;

        if (filter !== "all") {
          filteredData = filteredData.filter(
            (post) => post.type.toLowerCase() === filter,
          );
        }

        setTimeout(() => {
          setFilteredPosts(filteredData);
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error fetching the careers:", error);
        setLoading(false);
      });
  }, [filter]);

  const renderPosts = () => {
    if (loading) {
      return <Loading />;
    } else if (!loading && filteredPosts.length === 0) {
      return <div className="w-full">No posts found</div>;
    } else if (!loading && filteredPosts.length > 0) {
      return (
        <div className="flex flex-wrap">
          {filteredPosts.map((post, index) => (
            <div key={index} className="mb-8 w-full px-4 sm:mb-0 md:w-1/2">
              <p className="mb-2 flex items-center gap-2 text-gray-500">
                <span className="text-sm uppercase tracking-wider">
                  {post.date}
                </span>
                <span className="bg-blue-200 px-2 py-1 text-xs uppercase tracking-wider text-primary">
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
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="min-h-[65vh] bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto mb-8 text-center md:mb-8 md:max-w-5xl">
          <span className="mb-4 inline-block rounded bg-blue-200 px-2 py-1 text-sm uppercase leading-5 tracking-wider text-primary">
            News & Insights
          </span>
          <h1 className="mb-4 font-bebas text-3xl font-bold leading-tight tracking-wider text-gray-800 md:text-5xl">
            Latest News
          </h1>
          <p className="mb-10 text-lg font-medium text-gray-500 md:text-xl">
            Stay ahead of the curve. Explore our latest projects, innovations,
            and milestones, all in one place.
          </p>
        </div>

        <ul className="mb-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm">
          <li>
            <button
              onClick={() => setFilter("all")}
              className={`rounded px-4 py-2 text-gray-800 transition-all duration-300 ${
                filter === "all" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              View All
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("article")}
              className={`rounded px-4 py-2 text-gray-800 transition-all duration-300 ${
                filter === "article" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Articles
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("update")}
              className={`rounded px-4 py-2 text-gray-800 transition-all duration-300 ${
                filter === "update" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Updates
            </button>
          </li>
        </ul>
        <div>{renderPosts()}</div>
      </div>
    </section>
  );
};

export default BulletinList;
