import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="p-3 m-auto w-full flex-col sticky top-0 sm:relative bg-eerie-black">
      <div className="max-w-5xl m-auto md:px-10">
        <h1 className="hidden sm:flex mt-10 mb-4 text-2xl font-bold">
          📃 Kelvin Crepaldi
        </h1>
        <ul className="flex text-lg sm:mb-3 space-x-4">
          <li
            className={
              router.pathname === "/"
                ? "border-b-2 border-green-500 pb-1"
                : "border-b-2 border-transparent pb-1 hover:border-green-500 transition"
            }
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={
              router.pathname === "/about"
                ? "border-b-2 border-blue-500 pb-1"
                : "border-b-2 border-transparent pb-1 hover:border-blue-500 transition"
            }
          >
            <Link href="/about">Sobre</Link>
          </li>

          <li
            className={
              router.pathname === "/portfolio"
                ? "border-b-2 border-red-500 pb-1"
                : "border-b-2 border-transparent pb-1 hover:border-red-500 transition"
            }
          >
            <Link href="/portfolio">Portfólio</Link>
          </li>
          <li
            className={
              router.pathname === "/notes"
                ? "border-b-2 border-gray-700 pb-1"
                : "border-b-2 border-transparent pb-1 hover:border-zinc-700 transition"
            }
          >
            <Link className="opacity-30" href="/notes">
              Anotações
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
