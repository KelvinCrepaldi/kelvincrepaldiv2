import Image from "next/image";
import kenzie from "/public/images/kenzie.jpg";

export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="mt-10 mb-5 ">Sobre mim...</h1>
      <p className="mb-5">
        Formado pela Kenzie Academy como Full Stack, aprendi principais
        tecnologias de Front End e Back End. Entre as linguagens e tecnologias
        aprendidas, estão HTML5, CSS3, JavaScript (ES6 +), React, Redux, Python
        (Django e Flask),Node.js, Express, e SQL. Além de soft skills
        disponíveis para o mercado de trabalho, Scrum, Kanban.
      </p>
      <Image
        src={kenzie}
        alt="certificado de conclusão de curso kenzie"
        width={400}
        className="rounded-lg mx-auto"
      ></Image>
      <p>
        A partir disso estou buscando aprender novas tecnologias que se destacam
        no mercado, como Vue3, Pinea, Next.js, AWS, Taiwinds, Web Components
        etc...
      </p>
      <p>Algumas habilidades e tecnologias que tenho trabalhado...</p>
      <ul>
        <li>HTML5</li>
        <li>HTML5</li>
        <li>HTML5</li>
        <li>HTML5</li>
        <li>HTML5</li>
        <li>HTML5</li>
        <li>HTML5</li>
      </ul>
      <p className="text-center">E a minha jornada continua . . .</p>

      <section>
        <h2>hardware...</h2>
        <ul>
          <li>Processador: I5-9400F</li>
          <li>memorias: 16gb(2x8) 2666mhz</li>
          <li>Vídeo: NVIDIA RTX 2060</li>
        </ul>
      </section>
      <section>
        <h2>Software...</h2>
        <ul>
          <li>VSCode</li>
          <li>Instant Eyedropper</li>
          <li>Discord</li>
          <li>Figma</li>
          <li>Slack</li>
        </ul>
      </section>
      <section>
        <h2>VSCode extensions</h2>
        <ul>
          <li>Auto Close Tag</li>
          <li>Auto Complete Tag</li>
          <li>Auto Rename Tag</li>
          <li>ESLint</li>
          <li>Docker</li>
          <li>HTML CSS Support</li>
          <li>Material Icon Theme</li>
          <li>Tailwind CSS IntelliSense</li>
          <li>Thunder Client</li>
          <li>vscode-styled-components</li>
          <li>Vue language Features(Volar)</li>
        </ul>
      </section>
    </section>
  );
}
