import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
        <title>PokeNext</title>
      </Head>
      <div className="flex-col p-4 m-auto md:px-10 max-w-screen-lg">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
}
