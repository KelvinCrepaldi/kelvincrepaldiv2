import Link from "next/link";
import CardProject from "@/components/CardProject";
import { projectsData } from "@/data/projects";
import { useState } from "react";
export default function Home() {
  const [filter, setFilter] = useState("front");
  const frontFilter = projectsData.filter(
    (project) => project.type === "front"
  );
  const backFilter = projectsData.filter((project) => project.type === "back");

  const handleSelectFilter = (selected: string) => {
    setFilter(selected);
  };
  return (
    <main className="">
      <section>
        <ul className="flex space-x-2 mb-1">
          <li
            className="ml-2 cursor-pointer bg-zinc-800 px-3 py-1 rounded-xl hover:bg-zinc-700"
            onClick={() => handleSelectFilter("front")}
          >
            Front-end
          </li>
          <li
            className="ml-2 cursor-pointer bg-zinc-800 px-3 py-1 rounded-xl hover:bg-zinc-700"
            onClick={() => handleSelectFilter("back")}
          >
            Back-end
          </li>
        </ul>
        <div className="flex flex-wrap">
          {filter === "front"
            ? frontFilter.map((project, index) => (
                <div className="flex w-full md:w-1/3 py-1 px-0.5" key={index}>
                  <CardProject project={project} portfolio={true} />
                </div>
              ))
            : null}
          {filter === "back"
            ? backFilter.map((project, index) => (
                <div className="flex w-full md:w-1/3 py-1 px-0.5" key={index}>
                  <CardProject project={project} portfolio={true} />
                </div>
              ))
            : null}
        </div>
      </section>
    </main>
  );
}
