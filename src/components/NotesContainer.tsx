import { notesPaths } from "@/data/notes";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

export default function NotesContainer({ home = false }) {
  const pinnedNotes = notesPaths.filter((note) => note.pinned === true);
  const notpinnedNotes = notesPaths.filter((note) => note.pinned === false);
  const notesHome = notesPaths.slice(0, 5);
  return (
    <ul className="space-y-3 ">
      {home === false ? (
        <>
          {pinnedNotes.map((note, index) => (
            <li key={index}>
              <Link
                className={`px-1 text-orange-500 text-left border-b border-zinc-700 flex justify-between hover:text-yellow-400`}
                href={note.href_link}
              >
                <strong className="flex">
                  <FontAwesomeIcon className="mr-3 w-3" icon={faThumbTack} />
                  {note.title}
                </strong>{" "}
                <span>{note.date}</span>
              </Link>
            </li>
          ))}
          {notpinnedNotes.map((note, index) => (
            <li key={index}>
              <Link
                className={`px-1 ${
                  index % 2 === 0 ? "text-blue-500" : "text-blue-400"
                } text-left border-b border-zinc-700 flex justify-between hover:text-white`}
                href={note.href_link}
              >
                <strong className="flex">
                  <FontAwesomeIcon
                    className="mr-3 opacity-10 w-3"
                    icon={faNoteSticky}
                  />
                  {note.title}
                </strong>{" "}
                <span>{note.date}</span>
              </Link>
            </li>
          ))}
        </>
      ) : (
        notesHome.map((note, index) => (
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
      )}
      {}
    </ul>
  );
}
