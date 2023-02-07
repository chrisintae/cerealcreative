import "@app/globals.css";
import { Header } from "@comps/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="bg-zinc-100">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
