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
        <ul className="flex space-x-2 justify-end">
          <li
            className="ml-2 cursor-pointer"
            onClick={() => handleSelectFilter("front")}
          >
            Front-end
          </li>
          <li
            className="ml-2 cursor-pointer"
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
