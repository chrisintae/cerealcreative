import Image from "next/image";
import Link from "next/link";
import ClientForm from "@comps/LoginForm";
import { Footer, Header } from "@comps/Layouts";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center" style={styles.main}>
        <div><h1 className='font-display text-xl'>a cereal creative joint</h1></div>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    height: "calc(100vh - 68px)",
    minHeight: "37.5rem",
  },
}