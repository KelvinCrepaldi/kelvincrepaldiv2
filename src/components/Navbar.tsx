import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex-col max-w-screen-lg m-auto sm:px-6 sticky top-0 sm:relative bg-background-gray-color">
      <h1 className="hidden sm:block mt-10 mx-3 text-xl font-bold">
        Kelvin Crepaldi
      </h1>
      <ul className="flex text-lg sm:mb-10">
        <li>
          <Link
            className="m-2 p-1 block border-b border-transparent hover:border-white transition"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="m-2 p-1 block border-b border-transparent hover:border-white transition"
            href="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="m-2 p-1 block border-b border-transparent hover:border-white transition"
            href="/posts"
          >
            Postagens
          </Link>
        </li>
      </ul>
    </nav>
  );
}
