// import { useState } from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

type ContentSection = {
  type: "heading" | "subheading" | "paragraph" | "quote" | "image" | "list";
  content: string | string[];
  imageUrl?: string;
  imageAlt?: string;
};

type Post = {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  content: ContentSection[];
  type: string;
};

const BulletinContent = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("../data/posts.json");
      const data = await response.json();
      const foundPost = data.find((p: Post) => p.id === postId);
      setTimeout(() => {
        if (foundPost) {
          setPost(foundPost);
        }
      }, 500);
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return (
      <div className="flex min-h-[90vh] justify-center">
        <Loading />
      </div>
    );
  }

  const renderContentSection = (section: ContentSection, index: number) => {
    switch (section.type) {
      case "heading":
        return (
          <h2 key={index} className="text-2xl font-bold">
            {section.content}
          </h2>
        );
      case "subheading":
        return (
          <h3 key={index} className="text-xl font-semibold">
            {section.content}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-4 text-base text-gray-500 md:text-lg">
            {section.content}
          </p>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="quote border-l-4 border-neutral-500 bg-neutral-100 p-4 italic text-neutral-600"
          >
            <p className="mb-2">{section.content}</p>
          </blockquote>
        );
      case "image":
        return (
          <div key={index} className="my-4">
            <img
              src={section.imageUrl}
              alt={section.imageAlt}
              className="w-full"
            />
          </div>
        );
      case "list":
        return (
          <ul key={index} className="mb-4 ml-5 list-disc">
            {(section.content as string[]).map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="-mx-4 mb-12 flex flex-wrap lg:items-center">
          <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2 2xl:w-5/12">
            <div className="mx-auto max-w-max overflow-hidden rounded-lg md:ml-0">
              <img src={post.imageUrl} alt={post.imageAlt} />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <p className="mb-2 flex items-center gap-2 text-gray-500">
              <span className="rounded-md bg-gray-200 px-2 py-1 text-xs uppercase tracking-wider text-gray-500">
                {post.type}
              </span>
              <span className="text-sm uppercase tracking-wider">
                {post.date}
              </span>
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-900 md:text-4xl">
              {post.title}
            </h2>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:flex-1">
            {post.content.map(renderContentSection)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletinContent;
