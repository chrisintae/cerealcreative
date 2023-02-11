import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { client } from "@lib/sanity.client";
import { RichTextComponents } from "@comps/Post";
import { DateCard } from "@comps/Post";

type Props = {
  params: {
    slug: string;
  };
};

// keyword: revalidate [https://beta.nextjs.org/docs/data-fetching/revalidating]
export const revalidate = 60;

// keyword: generateStaticParams => replaced ISR [https://beta.nextjs.org/docs/api-reference/generate-static-params]
export async function generateStaticParams() {
  const query = groq`*[_type == "post"] {
        slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->,
    }
    `;

  const post: Post = await client.fetch(query, { slug });
  const postDate = new Date(post._createdAt);

  return (
    <div className="w-4/5 flex gap-16 sm:pt-96">
      <div className="flex flex-col items-start pb-16 px-4 bg-white text-zinc-800">
        <div className="w-full max-w-prose flex flex-col justify-end py-6">
          <span className="mb-2">
            {postDate.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <h1 className="font-cursive text-4xl">{post.title}</h1>
          {post.subtitle && <h3 className="text-2xl mt-4">{post.subtitle}</h3>}
        </div>

        <div className="w-full max-w-prose text-zinc-800">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
}
