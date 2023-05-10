import Link from "next/link";
export default function TypescriptExpress() {
  const anotação = `express + typescript

  iniciar um projeto express+typescript com o basico do basico:
    
  
    > npm init -y
    > npm install typescript @types/node -D
    > npm install express uuid
    > tsc --init
  
  
    Inicializador de typescript que substitui nodemon+sucrase:
    > npm install ts-node-dev -D
    (escrever um script de inicialização
      "scripts":{
        "dev": "ts-node-dev src/app.ts"
      }
    )
    > npm run dev
  
  
    tipagem de bibliotecas:
    > npm install -D @types/nomedabiblioteca
    exemplo:
    > npm install -D @types/express
  
  
  exemplo de estrutura:
    
    projeto/
    ├── node_modules/
    ├── src/
    │   ├── controllers/
    │   ├── database/
    │   ├── interfaces/
    │   ├── services/
    │   ├── app.ts
    │   └── routes.ts
    ├── tsconfig.json
    ├── package.json
    └── yarn.lock
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
