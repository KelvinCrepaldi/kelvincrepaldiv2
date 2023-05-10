import { IProject } from "@/interfaces/project.interface";
import Link from "next/link";
import Image from "next/image";
export default function CardProject({ project, portfolio = false }: any) {
  const { title, demo_url, description, img_print, repo_url, techs }: IProject =
    project;
  return (
    <div className=" w-full p-4 border rounded-xl border-zinc-700 flex flex-col justify-between ">
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
            className="m-auto rounded-lg"
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
        >
          Repositório
        </Link>
        <Link
          className="bg-zinc-800 hover:bg-zinc-700 py-1 px-3 rounded-lg"
          href={demo_url}
        >
          Demo
        </Link>
      </div>
    </div>
  );
}
