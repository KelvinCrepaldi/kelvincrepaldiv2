import Link from "next/link";
export default function SectionHome({ title, link }: any) {
  <section>
    <h2>{title}</h2>
    <Link href={`${title}`}>Ver completo</Link>
  </section>;
}
