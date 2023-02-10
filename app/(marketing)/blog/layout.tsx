import "@app/globals.css";
import { Header, FixedCol, DynamicCol, Wrapper } from "@comps/Layout";

export default function BlogLayout({
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
        <div>
          <Header />
          <Wrapper>
            <div className="relative flex">
              <FixedCol>
                <div className="max-w-384 text-right pb-8">
                  <h1 className="font-display font-bold italic text-4xl uppercase">
                    highly
                    <br />
                    _conceptual
                  </h1>
                  <h3 className="text-lg">
                    Collections of what, why, how, & oh f*ck
                  </h3>
                </div>
              </FixedCol>
              <DynamicCol>{children}</DynamicCol>
            </div>
          </Wrapper>
        </div>
      </body>
    </html>
  );
}
