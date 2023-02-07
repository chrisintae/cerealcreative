import Link from "next/link";
import { Footer, Header, Wrapper } from "@comps/Layout";
import { DynamicCol, FixedCol } from "@/components/Layout/Layouts";

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="relative flex">
          <FixedCol>
            <div className="max-w-384 text-right">
              <h1 className="font-cursive text-2xl">
                a cereal _creative joint.
              </h1>
              <ul className="flex flex-col gap-2 text-xs mt-4">
                <li>
                  <Link href="/blog">blog: what, why, how + oh f*ck</Link>
                </li>
                {/* <li><Link href='/_dream-on-research-and-development'>&#123;loud _dreamers&#125; r+d department</Link></li> */}
                {/* <li><Link href='/__space__'>_creative space</Link></li> */}
                {/* <li><Link href='/__space__'>cereal shop</Link></li> */}
              </ul>
            </div>
            <Footer />
          </FixedCol>

          <DynamicCol></DynamicCol>
        </div>
      </Wrapper>
    </>
  );
}
