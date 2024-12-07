"use client";

import { useState, useEffect, ChangeEvent } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  RadioGroup,
  Radio,
  cn,
} from "@nextui-org/react";

import { db } from "../../components/lib/firebase/init";
import { CustomRadio } from "../../components/CustomRadio";

// Definisi tipe data siswa
interface Student {
  id: string;
  name: string;
  gender: string;
  hobbies: string;
}



export default function BlogPage() {
  const [students, setStudents] = useState<Student[]>([]); // State untuk daftar siswa
  const [form, setForm] = useState({
    name: "",
    gender: "",
    hobby: "",
  });

  const genderOptions = ["Laki-laki", "Perempuan"];
  const hobbyOptions = ["Membaca", "Bermain Bola", "Menggambar", "Olahraga"];

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));
      const data: Student[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Student, "id">),
      }));

      setStudents(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, gender: e.target.value });
  };

  const handleHobbyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, hobby: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const newStudent: Omit<Student, "id"> = {
        name: form.name,
        gender: form.gender,
        hobbies: form.hobby,
      };

      await addDoc(collection(db, "students"), newStudent);

      alert("Siswa berhasil ditambahkan!");
      fetchData();
      setForm({ name: "", gender: "", hobby: "" });
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "students", id));
      alert("Data siswa berhasil dihapus!");
      fetchData();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <div className="text-start text-sm text-white mb-2">
          Silakan masukkan nama Anda
        </div>
        <Input
          label="Nama"
          placeholder="Masukkan nama lengkap Anda"
          type="text"
          value={form.name}
          onChange={handleNameChange}
        />

        <div className="my-5">
          <div className="text-start text-sm text-white mb-2">
            Silakan pilih gender Anda
          </div>
          <RadioGroup value={form.gender} onChange={handleGenderChange}>
            {genderOptions.map((genderOption) => (
              <CustomRadio key={genderOption} value={genderOption}>
                {genderOption}
              </CustomRadio>
            ))}
          </RadioGroup>
        </div>

        <div className="my-5">
          <div className="text-start text-sm text-white mb-2">
            Silakan pilih hobi Anda
          </div>
          <RadioGroup value={form.hobby} onChange={handleHobbyChange}>
            {hobbyOptions.map((hobbyOption) => (
              <CustomRadio key={hobbyOption} value={hobbyOption}>
                {hobbyOption}
              </CustomRadio>
            ))}
          </RadioGroup>
        </div>

        <button
          className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 flex justify-start"
          onClick={handleSubmit}
        >
          Tambah Siswa
        </button>
      </div>

      <div className="mt-24">
        <h2 className="text-lg font-semibold mb-4 border">Daftar Siswa</h2>
        {students.length > 0 ? (
          <Table isStriped aria-label="Daftar Siswa">
            <TableHeader>
              <TableColumn>Nama</TableColumn>
              <TableColumn>Gender</TableColumn>
              <TableColumn>Hobi</TableColumn>
              <TableColumn>Aksi</TableColumn>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.hobbies}</TableCell>
                  <TableCell>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleDelete(student.id)}
                    >
                      Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p>Tidak ada data siswa yang tersimpan.</p>
        )}
      </div>
    </div>
  );
}
