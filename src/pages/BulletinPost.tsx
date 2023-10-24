import { useParams } from "react-router-dom";
import { BulletinContent, Footer, Navbar } from "../components";
import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  description: string;
  content: string;
  type: string;
};

const BulletinPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch("../data/posts.json")
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find((p: Post) => p.id === postId);
        if (foundPost) {
          setPost(foundPost);
        }
      });
  }, [postId]);

  if (!post) {
    return <div>No post found...</div>;
  }

  return (
    <>
      <Navbar />
      <BulletinContent
        title={post.title}
        author={post.author}
        date={post.date}
        imageUrl={post.imageUrl}
        content={post.content}
        type={post.type}
      />
      <Footer />
    </>
  );
};

export default BulletinPost;
