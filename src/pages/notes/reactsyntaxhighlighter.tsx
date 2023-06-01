import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  coldarkCold,
  okaidia,
  a11yDark,
  cb,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ReactSyntaxHighlighter() {
  const code = `
    function helloWorld() {
        console.log("Hello, World!");
    }`;

  const code2 = `
    import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

    // em Next trocar o caminho do estilo /esm por /cjs, se não, vai ocorrer um bug
    import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
                                            
    
    function MyComponent() {
      const code = \`function helloWorld() {
        console.log("Hello, World!");
      }\`;
    
      return (
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {code}
        </SyntaxHighlighter>
      );
    }
    
    export default MyComponent;
    `;
  return (
    <>
      <div className="flex justify-start ">
        <Link className="p-2 bg-zinc-600 my-4" href="/notes">
          Voltar
        </Link>
      </div>
      <div className="space-y-3">
        <h1 className="text-green-400">
          Estilizando código com React Syntax Highlighter
        </h1>
        <p>
          React Syntax Highlighter é uma biblioteca popular que exibe códigos de
          programação colorido e formatado nas páginas, com realce de sintaxe.
        </p>
        <p>
          {" "}
          Você pode conferir a documentação completa{" "}
          <Link
            href={
              "https://github.com/react-syntax-highlighter/react-syntax-highlighter"
            }
            className="text-blue-500"
            target="_blank"
          >
            aqui.
          </Link>
        </p>
        <h2 className="text-green-400">Exemplo:</h2>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {code}
        </SyntaxHighlighter>
        <p>Instale a biblioteca react-syntax-highlighter</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`
    npm install react-syntax-highlighter
    yarn add react-syntax-highlighter
        `}
        </SyntaxHighlighter>
        <p>Importe os componentes e o estilo desejado</p>
        <p>
          Depois passe o código dentro do componente e defina a linguagem
          desejada
        </p>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {code2}
        </SyntaxHighlighter>
        <p>
          Lembrando que para tratar caracteres especiais dentro dos blocos de
          texto é necessário inserir um {`"`}
          {"\\"}
          {`"`} antes do caractere
        </p>

        <h2 className="text-green-400">Styles</h2>
        <p>
          Existem dois caminhos para escolher estilos, sendo eles
          react-syntax-highlighter/dist/cjs/styles/hljs para HLJS e
          react-syntax-highlighter/dist/cjs/styles/prism para PRISM
        </p>
        <h2 className="text-green-400">Exemplos de styles:</h2>
        <p>{`import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";`}</p>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {code}
        </SyntaxHighlighter>
        <p>{`import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";`}</p>
        <SyntaxHighlighter language="javascript" style={coldarkCold}>
          {code}
        </SyntaxHighlighter>
        <p>{`import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";`}</p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {code}
        </SyntaxHighlighter>
        <p>{`import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";`}</p>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {code}
        </SyntaxHighlighter>
        <p>{`import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";`}</p>
        <SyntaxHighlighter language="javascript" style={cb}>
          {code}
        </SyntaxHighlighter>
        <h2 className="text-green-400">Prop showLineNumbers </h2>
        <p>mostra os numeros das linhas próximo ao código.</p>

        <p>{` Exemplo: <SyntaxHighlighter language="javascript" style={cb} showLineNumbers> {code} </SyntaxHighlighter>`}</p>
        <SyntaxHighlighter language="javascript" style={cb} showLineNumbers>
          {code}
        </SyntaxHighlighter>
        <h2 className="text-red-400">Possivel erro:</h2>
        <p>
          Em NextJS pode occorrer um erro de importação de estilo em
          {`"`}react-syntax-highlighter/dist/esm/styles/prism{`"`}, uma possivel
          solução é trocar o modulo esm para cjs ficando : {`"`}
          react-syntax-highlighter/dist/cjs/styles/prism{`"`}
        </p>
        <SyntaxHighlighter language="javascript" style={cb} showLineNumbers>
          {`
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  coldarkCold,
  okaidia,
  a11yDark,
  cb,
} from "react-syntax-highlighter/dist/cjs/styles/prism";`}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
