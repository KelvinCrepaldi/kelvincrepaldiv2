import { IProject } from "@/interfaces/project.interface";
import Link from "next/link";
import Image from "next/image";
export default function CardProject({ project, portfolio = false }: any) {
  const { title, demo_url, description, img_print, repo_url, techs }: IProject =
    project;
  return (
    <div
      className=" w-full relative p-4 border rounded-xl border-zinc-700 flex flex-col 
       justify-between after:w-px after:h-full after:absolute after:left-0 after:-bottom-full 
       hover:after:bottom-0  after:opacity-0 hover:after:opacity-100 after:transition-all 
       after:bg-gradient-to-b from-transparent from-10% via-green-400 via-50% to-transparent to-90% overflow-hidden"
    >
      <div>
        {portfolio === true && img_print ? (
          <Image
            src={img_print}
            alt="project print"
            width={400}
            height={400}
            style={{
              objectFit: "cover",
              maxHeight: "200px",
            }}
            className="m-auto rounded-lg shadow shadow-black mb-3"
          />
        ) : null}
        <div className="flex justify-between mb-3">
          <h1>{title}</h1>
        </div>

        <p className="leading-5">{description}</p>
        <div className="flex flex-wrap leading-4 text-sm">
          {techs.map((tech, index) => (
            <span
              key={index}
              className={`${
                index % 2 === 0 ? "text-green-500" : "text-green-300"
              } m-0.5`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 space-x-4">
        <Link
          className="bg-zinc-800 hover:bg-zinc-700 py-1 px-3 rounded-lg"
          href={repo_url}
          target="_blank"
        >
          Repositório
        </Link>
        <Link
          className="bg-zinc-800 hover:bg-zinc-700 py-1 px-3 rounded-lg"
          href={demo_url}
          target="_blank"
        >
          Demo
        </Link>
      </div>
    </div>
  );
}
