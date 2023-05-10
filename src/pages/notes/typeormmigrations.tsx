import Link from "next/link";
export default function Typeormmigrations() {
  const anotação = `  
  
  necessario criar script typeorm, passando o local do data-source para rodar com mais facilidade:
    "dev": "ts-node-dev --ignore-watch node_modules src/app.ts",
    "build": "tsc",
    "typeorm": "typeorm-ts-node-commonjs -d src/data-source.ts"

  comandos:
    npm run typeorm migrate:run
    npm run typeorm migrate:generate src/migrations/migrationName

  `;
  return (
    <pre className=" leading-5">
      <div className="flex justify-end ">
        <Link className="p-2 bg-zinc-600" href="/notes">
          Voltar
        </Link>
      </div>

      {anotação}
    </pre>
  );
}
