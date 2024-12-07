import { Image } from "@nextui-org/image";

export default function App() {
  return (
    <div className="">
      <article className="group">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-lg font-medium">Profil Fase F PPLG</h3>
          </a>

          <p className="mt-2 text-sm/relaxed text-gray-500">
            Kelas Fase F dalam program keahlian PPLG (Pengembangan Perangkat
            Lunak dan Gim) adalah bagian lanjutan dari kurikulum SMK yang
            berfokus pada pengembangan keterampilan dalam teknologi perangkat
            lunak. Di fase ini, peserta didik yang telah menguasai dasar-dasar
            pemrograman, database, dan pemodelan aplikasi akan diarahkan untuk
            lebih berorientasi pada proyek nyata dan implementasi. Tujuan
            pembelajaran mencakup kemampuan mengembangkan aplikasi berbasis
            desktop, web, dan mobile, memahami arsitektur perangkat lunak yang
            baik, serta mengimplementasikan teknologi modern seperti API,
            framework, atau platform berbasis cloud. Selain itu, siswa juga
            dilatih untuk meningkatkan kemampuan analisis, problem-solving, dan
            kolaborasi tim, sehingga siap menghadapi tantangan industri
            perangkat lunak yang dinamis.
          </p>
        </div>
      </article>
    </div>
  );
}
