"use client";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const members = [
  { role: "Ketua Kelas", name: "AHMAD DHANI", image: "/foto/ketua.jpg" },
  { role: "Ketua Kelas", name: "RIFALDI ARDIANSYAH", image: "/foto/wakil.jpg" },
  { role: "Sekretaris 1", name: "RAISYAH", image: "/foto/sekr1.jpg" },
  { role: "Sekretaris 2", name: "DIVA FEBY", image: "/foto/sekr2.jpg" },
  { role: "Bendahara 1", name: "PIPIT WULANDARI", image: "/foto/benda1.jpg" },
  { role: "Bendahara 2", name: "M FABIYAN P", image: "/foto/benda2.jpg" },
  { role: "Keamanan 1", name: "ADRIAN ADIPUTRA", image: "/foto/keamanan1.jpg" },
  { role: "Keamanan 2", name: "JUAN FARREL", image: "/foto/keamanan2.jpg" },
  { role: "Dokumentasi 1", name: "SAMI ATARI Z", image: "/foto/doku1.jpg" },
  {
    role: "Dokumentasi 2",
    name: "A.I WAYAN TEGAR F",
    image: "/foto/doku2.jpg",
  },
  { role: "Kebersihan 1", name: "DWI WAHYU", image: "/foto/kebersihan1.jpg" },
  {
    role: "Kebersihan 2",
    name: "AISYAH KURNIATI",
    image: "/foto/kebersihan2.jpg",
  },
];

export default function App() {
  return (
    <div className="p-4">
      <div className="mb-8 flex justify-center">
        <Card className="py-4" style={{ maxWidth: "400px" }}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Wali Kelas</p>
            <small className="text-default-500">11 PPLG</small>
            <h4 className="font-bold text-large">SAEFUDIN FAJRI</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Wali Kelas"
              className="object-cover rounded-xl"
              src="/foto/wali.jpg"
              width={270}
            />
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {members.map((member, index) => (
          <Card key={index} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{member.role}</p>
              <small className="text-default-500">11 PPLG</small>
              <h4 className="font-bold text-large">{member.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={member.role}
                className="object-cover rounded-xl"
                src={member.image}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
