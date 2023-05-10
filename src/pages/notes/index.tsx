import Image from "next/image";
import Link from "next/link";
import { notesPaths } from "@/data/notes";
import NotesContainer from "@/components/NotesContainer";

export default function Notes() {
  return (
    <main className=" text-center m-auto space-y-6">
      <p className="text-left w-xl text-yellow-400 max-w-6xl">
        Algumas anotações que eu fiz durante meus estudos, apenas para ajudar a
        me lembrar de certas coisas. 📝
      </p>
      <NotesContainer home={false} />
    </main>
  );
}
