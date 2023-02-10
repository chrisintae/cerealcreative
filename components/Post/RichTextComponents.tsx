import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@lib/utils";
import { ValueError } from "sanity";

// serializers for React Portable Text [https://www.sanity.io/docs/portable-text-to-react]
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative mx-auto">
          <Image className="" src={urlFor(value).url()} alt="image" fill />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="list-disc sm:text-xl">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="list-decimal sm:text-xl">{children}</ol>;
    },
    checkmarks: ({ children }: any) => (
      <ol className="sm:text-xl">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-6">{children}</li>,
    number: ({ children }: any) => <li className="mb-6">{children}</li>,
    checkmarks: ({ children }: any) => <li className="mb-6">✅ {children}</li>,
  },
  block: {
    h1: ({ children, node }: any) => (
      <h1 className="text-2xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children, node }: any) => (
      <h1 className="text-2xl font-bold mb-4">{children}</h1>
    ),
    h3: ({ children, node }: any) => (
      <h1 className="text-2xl font-bold mb-4">{children}</h1>
    ),
    h4: ({ children, node }: any) => (
      <h1 className="text-base font-bold mb-4">{children}</h1>
    ),
    blockquote: ({ children, node }: any) => (
      <blockquote className="font-cursive text-xl mb-4">{children}</blockquote>
    ),
    normal: ({ children, node }: any) => (
      <p className="sm:text-xl  font-light my-4">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <em className="font-semibold">{children}</em>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link className="text-blue-500" href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
};
