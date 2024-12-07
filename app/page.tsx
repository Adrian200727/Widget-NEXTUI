import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Selamat Datang&nbsp;</span>
        <br />
        <span className={title()}>Di Kelas Fase F</span>
        <br />
        <span className={title({ color: "violet" })}>PPLG&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}>
          Angkatan ke-26 || 2024
        </div>
      </div>
    </section>
  );
}
