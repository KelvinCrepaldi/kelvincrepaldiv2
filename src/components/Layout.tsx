import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
        <title>Kelvin Crepaldi</title>
      </Head>
      <div className="bg-backgroundcolor">
        <Navbar />
        <main className="max-w-5xl p-4 m-auto md:px-10 ">{children}</main>
        <Footer />
      </div>
    </>
  );
}
