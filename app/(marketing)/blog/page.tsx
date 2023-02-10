import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@lib/sanity.client";
import { DateCard } from "@comps/Post";

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

export default async function BlogPage() {
  const postList: Post[] = await client.fetch(query);

  return (
    <div className="flex flex-col items-center sm:pl-16 sm:pt-96">
      {postList.length >= 1 ? (
        <ul className="flex flex-col gap-8">
          {postList.map((i, ind) => (
            <PostListItem
              id={i._id}
              ind={ind}
              title={i.title}
              slug={i.slug.current}
              createdAt={i._createdAt}
            />
          ))}
        </ul>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <p>damn, empty stash. check back soon friend.</p>
        </div>
      )}
    </div>
  );
}

type PostProps = {
  id: string;
  ind: number;
  title: string;
  slug: string;
  createdAt: Date;
};

const PostListItem = ({ id, title, slug, createdAt }: PostProps) => {
  const postDate = new Date(createdAt);
  return (
    <li
      key={id}
      className={`relative w-3/5 hover:bg-white hover:drop-shadow-lg `}
    >
      <Link href={`/blog/${slug}`}>
        <div className="h-full flex flex-col items-start justify-between p-4 sm:py-6 sm:px-6">
          <div className="flex gap-12">
            <DateCard postDate={postDate} />
            <div className="w-full">
              <h2 className="font-cursive font-light sm:text-xl md:text-3xl ">
                {title}
              </h2>
              <h4 className=" mt-4">
                [tldr] Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit.
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
