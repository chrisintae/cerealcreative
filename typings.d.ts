type Base = {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
}

interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    subtitle: string;
    description: string;
    publishedAt: Date;
    updatedAt: Date;
    id: string;
    type: string;
}

interface Author extends Base {
    bio: Block[];
    name: string;
    image: Image;
    slug: Slug;
}

interface Image {
    _type: 'image';
    asset: Reference;
    alt: string;
}

interface Reference {
    _ref: string;
    _type: 'reference';
}

interface Slug {
    _type: 'slug';
    current: string;
}

interface Block {
    _key: string;
    _type: 'block';
    children: Span[];
    markDefs: MarkDef[];
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: 'image';
    asset: Reference;
    alt: string;
}

interface Title {
    _type: 'title';
    current: string;
}

interface Subtitle {
    _type: 'subtitle';
    current: string;
}

interface SiteConfig extends Base {
    title: string;
    siteUrl: string;
    description: string;
    keywords: string;
    author: string;
    siteLogo: Image;
    siteFavicon: Image;
}

interface Product extends Base {
    image: Image[];
    slug: Slug;
    name: string;
    subtitle: string;
    details: string;
    publishedAt: Date;
    updatedAt: Date;
    id: string;
    type: string;
    price: number;
}