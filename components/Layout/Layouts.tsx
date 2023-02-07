import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  return <main className="mx-auto max-w-[1800px]">{children}</main>;
};

export const Center = ({ children }: Props) => {
  return (
    <main className="h-screen flex flex-col items-center justify-center md:pb-24">
      {children}
    </main>
  );
};

export const DynamicCol = ({ styles, children }: any) => {
  return (
    <div className={`relative w-full flex flex-col items-center px-4`}>
      {children}
    </div>
  );
};

export const FixedCol = ({ children }: Props) => {
  return (
    <div className="sticky top-0 w-1/2 min-w-600 h-screen flex flex-col items-end justify-center ml-6 mr-16 pb-24">
      {children}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="min-w-[240px] flex justify-end gap-6 mt-24 pt-4 border-t border-zinc-300">
      <small className="text-xs">
        <Link href="/contact" className="hover:underline">
          contact
        </Link>
      </small>
      {/* <small className='text-xs'><Link href='/legal/a11y' className='hover:underline'>accessibility</Link></small>
			<small className='text-xs'><Link href='/legal/terms' className='hover:underline'>terms</Link></small>
			<small className='text-xs'><Link href='/legal/privacy' className='hover:underline'>privacy</Link></small> */}
    </footer>
  );
};
