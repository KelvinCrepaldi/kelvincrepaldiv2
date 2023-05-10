import Link from "next/link";
export default function Typeorm() {
  const anotação = `TypeORM + Express + PostgreSQL (basico)
  Como o passo a passo é muito longo esse arquivo é apenas um apoio para iniciar projetos com typeORM.
  Não é um "tutorial/aula" então é necessario o conhecimento do assunto para entender melhor, e tenha em mente que as informações podem estar ultrapassadas com o tempo o que pode ocasionar alguns bugs.
  Então caso ocorra algum bug, entenda que pode ser esse o motivo e será necessario uma pesquisa aprofundada sobre o problema.
  Tudo aqui está sendo adicionado em um projeto exemplo basico já criado em typescript. > inserir link para levar ao apoio de ts
  
  O uso é em cima do typescript, e algumas configurações são necessarias no arquivo tsconfig.json 
  
      "outDir": "./dist"  < especifica diretorio no qual a compilação do ts sera criada, convertendo para js, não é do typeorm mas eu decidi apontar novamente essa importancia.
  
      "experimentalDecorators": true /* Enable experimental support for TC39 stage 2 draft decorators. */,
          "emitDecoratorMetadata": true /* Emit design-type metadata for decorated declarations in source files. */,
      "strictPropertyInitialization": false /* Check for class properties that are declared but not set in the constructor. */,
  
  Inicio, adicionar bibliotecas necessarias do TypeORM no seu projeto.
  
      yarn add typeorm pg reflect-metadata 
      yarn add dotenv bcryptjs
  
  Criar um script no package.json para iniciar comandos do typeORM.
  
      "scripts":{
          "typeorm": "typeorm-ts-node-commonjs"
      }
  
  Criar o arquivo .env / .env.example para adicionar dados sensiveis(typeorm vai usar esses dados para conectar ao db)
  (não esquecer de preencher as informações, pois obviamente o projeto não vai funcionar sem...)
  
      DB_HOST=
      DB_PASSWORD=
      DB_USER=
      DB=
  
  criar o arquivo data-source.ts (o nome pode mudar em cada projeto) que sera usado pelo typeORM para conectar ao banco de dados.
  Nesse caso você deve entrar na documentação oficial do typeORM e ver como é feito esse arquivo, a forma que ele é escrito e usado pode mudar:
  
      https://typeorm.io/#:~:text=%23%20Creating%20a%20new%20DataSource
      https://typeorm.io
  
  Um aviso muito importante nesse arquivo é que a configurações de entities pode mudar, em windows eu tive que importar cada entidade e inserir numa lista, por exemplo:
      import { Photo } from "./entity/Photo"
  
      const AppDataSource = new DataSource({
              type: "postgres",
              host: "localhost",
              port: 5432,
              username: "root",
              password: "admin",
              database: "test",
             entities: [Photo],
          migrations: ["src/migrations/*.ts"]
          synchronize: false, // pode ser true, depende do que você quer
      })
  
  Em Linux funciona inserindo o local do diretorio em que ficam as entities:
          entities: "/src/entities",
  
  Repito que essas coisas podem mudar e não funcionar, então preste muita atenção ao subir projetos em sites de deploy,
  pois escrever projetos em windows e subir em deploys com linux podem quebrar o app, eu tive alguns problemas com isso
  e foi super dificil encontrar respostas.
  
  importe o dotenv dentro do arquivo de DataSource para adicionar as informações de conexão do banco, usando o process.env para adicionar as informações:
      import "dotenv/config"
  
      const AppDataSource = new DataSource({
              type: "postgres",
              host: process.env.DB_HOST,
              port: 5432,
              username: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
              database: process.env.DB,
          synchronize: false,]
             entities: [Photo],
          migrations: ["src/migrations/*.ts"]
          synchronize: false, // pode ser true, depende do que você quer
      })
  
  Exporte o AppDataSource do data-source.ts pois será usado em outros arquivos.
  
  Criar as pastas entities e migrations dentro do src.
  A estrutura do projeto deve ser algo parecido com isso:
  
  /projectdir
      /src
          /controllers
          /database
          /entities
          /interfaces
          /migrations
          /routes
          /services
          app.ts	
          data-source.ts
      -.env
      -.env.example
      -.gitignore
      -package.json
      -tsconfig.json
  
  É necessario importar o reflect-metadata dentro do arquivo global "src/app.ts" (observe a estrutura de exemplo acima)
      
  
  Depois disso as configurações estão prontas, é só programar as entities e realizar as operações de migrations.
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
