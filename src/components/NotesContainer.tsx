import { notesPaths } from "@/data/notes";
import Link from "next/link";

export default function NotesContainer({ home = false }) {
  const notesHome = notesPaths.slice(0, 5);
  return (
    <ul className="space-y-1 ">
      {home === false
        ? notesPaths.map((note, index) => (
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
          ))
        : notesHome.map((note, index) => (
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
      {}
    </ul>
  );
}
