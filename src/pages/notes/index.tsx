import Image from "next/image";
import Link from "next/link";
import { notesPaths } from "@/data/notes";

export default function Notes() {
  return (
    <main className=" text-center m-auto space-y-6">
      <p className="text-left w-xl">
        Aqui estão algumas anotações que eu fiz e quero armazenar de uma maneira
        fácil que eu possa encontrar, são apenas “notas” sobre meus estudos, não
        tem objetivo de ensinar, mas você pode dar uma olhada se quiser. 😉
      </p>
      <ul className="space-y-1 ">
        {notesPaths.map((note, index) => (
          <li key={index}>
            <Link
              className={`px-1 ${
                index % 2 === 0 ? "text-blue-500" : "text-blue-300"
              } text-left border-b border-zinc-700 flex justify-between`}
              href={note.href_link}
            >
              <strong>{note.title}</strong> <span>{note.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
