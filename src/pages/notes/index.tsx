import Image from "next/image";
import Link from "next/link";
export default function Notes() {
  return (
    <main className="text-center m-auto space-y-6">
      <p className="text-left w-xl">
        Aqui estão algumas anotações que eu fiz e quero armazenar de uma maneira
        fácil que eu possa encontrar, são apenas “notas” sobre meus estudos, não
        tem objetivo de ensinar, mas você pode dar uma olhada se quiser. 😉
      </p>
      <ul className="space-y-1">
        <li>
          <Link
            className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
            href="/notes/postgresql"
          >
            <strong>Postgresql</strong> <span>08/05/2023</span>
          </Link>
        </li>
        <li>
          <Link
            className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
            href="/notes/postgresql"
          >
            <strong>Postgresql</strong> <span>08/05/2023</span>
          </Link>
        </li>
        <li>
          <Link
            className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
            href="/notes/postgresql"
          >
            <strong>Postgresql</strong> <span>08/05/2023</span>
          </Link>
        </li>
        <li>
          <Link
            className="px-1 text-green-400 text-left border-b border-zinc-700 flex justify-between"
            href="/notes/postgresql"
          >
            <strong>Postgresql</strong> <span>08/05/2023</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
