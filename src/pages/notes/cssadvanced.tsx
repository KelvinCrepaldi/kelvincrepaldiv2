import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function TypescriptExpress() {
  const scrollbarText = `
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  `;

  const fontsizeText = `
  @media(max-width: 1080px){
    html{ 
        font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{ 
        font-size: 87.5%;
    }
  }
  `;

  const code = `
  body{
    width: 100vw;
  }
  `;

  const codeIntl = `
  function formatNumber(number: number) {
    return Intl.NumberFormat("en", {
      notation: "compact",
      minimumFractionDigits: 0,
    }).format(number);
  }

  formatNumber(10000); //10k
  formatNumber(1000000); //1M
  `;

  return (
    <div className=" leading-5 ">
      <div className="flex justify-start ">
        <Link className="p-2 bg-zinc-600 my-4" href="/notes">
          Voltar
        </Link>
      </div>
      <div className="pl-2 m-5 space-y-3">
        <h1 className="text-green-500">API Intl do javascript</h1>
        <p>Não é css mas quebra um galho! 🤔</p>
        <p>
          É possivel formatar numeros para mostrar a quantidade de forma
          resumida, assim como é feito em redes sociais.{" "}
        </p>
        <SyntaxHighlighter style={dracula} language="css">
          {codeIntl}
        </SyntaxHighlighter>
      </div>
      <div className="pl-2 m-5 space-y-3">
        <h1 className="text-green-500">text-overflow: ellipsis</h1>
        <p>
          Adiciona (...) na frente do texto se o tamanho do texto passar do
          tamanho máximo do elemento pai.
        </p>
      </div>
      <div className="pl-2 m-5 space-y-3">
        <h1 className="text-green-500">overflow</h1>
        <p>
          Propriedade que especifica o comportamento de elementos que saem do
          tamanho máximo do elemento pai.
        </p>
        <ul>
          <li>visible - Default</li>
          <li>hidden - Esconde os elementos</li>
          <li>
            scroll - Cria uma {`"`}janela{`"`} com scroll x e y
          </li>
          <li>
            auto - Igual o scroll mas cria apenas as barras caso necessário
          </li>
        </ul>
        <p>
          Normalmente eu uso para fazer algum efeito bonitinho com css ou criar
          alguma lista com espaço limitado, como por exemplo um modal de um
          produto que abre no meio da tela ou uma lista de produtos adicionados
          no carrinho.
        </p>
      </div>
      <div className="pl-2 m-5 space-y-3">
        <h1 className="text-green-500">Tamanho de fonte</h1>
        <p>
          Caso você decida mudar o tamanho da fonte de acordo com o tamanho da
          tela, use esse método:
        </p>
        <SyntaxHighlighter style={dracula} language="css">
          {fontsizeText}
        </SyntaxHighlighter>
        <p>
          Sempre use {`"`}rem{`"`} para definir tamanho de fontes, e assim o
          tamanho vai se ajustar de forma automática de acordo com o font-size
          do html.
        </p>
      </div>

      <div className="pl-2 m-5 space-y-3">
        <h1 className="text-green-500">Estilização de scrollBar</h1>
        <p>Código css para estilizar as barras de rolagem: </p>
        <SyntaxHighlighter style={dracula} language="css">
          {scrollbarText}
        </SyntaxHighlighter>
      </div>
      <div className="pl-2 m-5 space-y-3">
        <h1 className="text-green-500">
          O problema em usar as unidades viewport
        </h1>
        <p>
          Algumas vezes eu fiz algum tipo de texto que recebia vw como tamanho
          para que a fonte se ajustasse de uma forma magica, e mais tarde dava
          de cara com problemas de zoom e tamanhos de telas diferentes.O
          problema é que se a tela for muito pequena, o texto fica muito
          pequeno, e se for muito grande a fonte fica gigante de uma maneira
          desconfortável e algumas vezes até quebrando o layout.
        </p>
        <p>
          Usar vw como tamanho em elementos, textos e imagens diminuir e ao
          aumentar o zoom da tela, o tamanho ajusta de acordo com o vw, isso faz
          quebrar o zoom e simplesmente não funciona.
        </p>

        <p>
          Algumas vezes eu cometi outro erro ao criar algum layout, usar 100vw
          faz com que a página receba um pedacinho a mais na lateral direita
          fazendo com que a barra de rolagem horizontal apareça e cortando um
          pedacinho da tela. Algo parecido com isso:
        </p>
        <SyntaxHighlighter style={dracula} language="css">
          {code}
        </SyntaxHighlighter>
        <div className="w-60 h-20  bg-slate-800 overflow-auto">
          <div className="w-64 h-5 "></div>
        </div>
        <p>
          Isso acontece porque os navegadores não reconhecem o tamanho das
          barras de rolagem como parte do vw, então o tamanho das barras não são
          subtraídas do width, e isso é como deveria ser.
        </p>
        <p>
          A solução para isso é simplesmente não usar o vw100, os tamanhos do
          body e html já pegam o espaço completo, então ao criar algum elemento
          com o width total apenas use width 100%.
        </p>
        <p>A partir disso eu procuro evitar sempre usar o vw.</p>
      </div>
    </div>
  );
}
