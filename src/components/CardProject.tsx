import { IProject } from "@/interfaces/project.interface";
import Link from "next/link";
import Image from "next/image";
export default function CardProject({ project, portfolio = false }: any) {
  const { title, demo_url, description, img_print, repo_url, techs }: IProject =
    project;
  return (
    <div className=" w-full p-4 border rounded-xl border-stone-700 flex flex-col justify-between ">
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
          <span>11/11/11</span>
        </div>
        <p>{description}</p>
        <span className="text-green-400">next.js</span>
      </div>
      <div className="mt-4">
        <Link href={repo_url}>Repositório</Link>
        <Link href={demo_url}>Demo</Link>
      </div>
    </div>
  );
}
