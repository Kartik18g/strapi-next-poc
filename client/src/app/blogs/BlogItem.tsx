import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  draft: string;
  imageUrl: string;
};

export default function BlogItem({
  id,
  title,
  description,
  draft,
  imageUrl,
}: Props) {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer">
        <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
}
