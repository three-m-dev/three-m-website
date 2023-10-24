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
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto mb-8 md:mb-8 text-center">
          <span className="inline-block py-1 px-2 mb-4 text-sm leading-5 tracking-wider text-primary bg-blue-200 uppercase rounded-md shadow-sm">
            News & Insights
          </span>
          <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-gray-800 font-bold tracking-tighter">
            The Latest Developments from Three M
          </h3>
          <p className="mb-10 text-lg md:text-xl text-gray-500 font-medium">
            Stay ahead of the curve. Explore our latest projects, innovations,
            and milestones, all in one place.
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 mb-8 text-center text-sm items-center justify-center">
          <li>
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-gray-800 transition-all duration-300 ${
                filter === "all" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              View All
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("article")}
              className={`px-4 py-2 rounded-md text-gray-800 transition-all duration-300 ${
                filter === "article" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Articles
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("update")}
              className={`px-4 py-2 rounded-md text-gray-800 transition-all duration-300 ${
                filter === "update" ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Updates
            </button>
          </li>
        </ul>
        <div className="flex flex-wrap -mx-4">
          {loading ? (
            <div className="w-full text-center py-10">
              <div className="loader"></div>{" "}
              {/* Replace with your loader animation */}
              <p>Loading...</p>
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                <p className="mb-2 text-gray-500 flex gap-2 items-center">
                  <span className="uppercase tracking-wider text-sm">
                    {post.date}
                  </span>
                  <span className="bg-blue-200 text-primary py-1 px-2 text-xs uppercase tracking-wider rounded-md">
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
            ))
          )}
        </div>
        {filteredPosts.length > 6 && !loading && (
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
