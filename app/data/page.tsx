"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { title } from "@/components/primitives"; // Sesuaikan dengan jalur komponen yang ada

export default function BlogPage() {
  const [siswa, setSiswa] = useState<any[]>([]);
  const [nama, setNama] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [hobi, setHobi] = useState<string[]>([]);
  const [editing, setEditing] = useState<number | null>(null);

  // Fetch siswa
  useEffect(() => {
    axios
      .get("http://localhost:5000/siswa")
      .then((response) => setSiswa(response.data.siswa))
      .catch((error) => console.error("Error fetching siswa:", error));
  }, []);

  // Handle checkbox changes for hobi
  const handleHobiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobi([...hobi, value]);
    } else {
      setHobi(hobi.filter((h) => h !== value));
    }
  };

  // Handle form submit (add or update siswa)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editing) {
      // Update siswa
      axios
        .put(`http://localhost:5000/siswa/${editing}`, { nama, gender, hobi })
        .then(() => {
          setSiswa(
            siswa.map((s) =>
              s.id === editing ? { ...s, nama, gender, hobi } : s
            )
          );
          setEditing(null);
        })
        .catch((error) => console.error("Error updating siswa:", error));
    } else {
      // Add new siswa
      axios
        .post("http://localhost:5000/siswa", { nama, gender, hobi })
        .then((response) => {
          setSiswa([...siswa, { id: response.data.id, nama, gender, hobi }]);
        })
        .catch((error) => console.error("Error adding siswa:", error));
    }

    setNama("");
    setGender("");
    setHobi([]);
  };

  // Handle edit button click
  const handleEdit = (s: any) => {
    setEditing(s.id);
    setNama(s.nama);
    setGender(s.gender);
    setHobi(JSON.parse(s.hobi)); // Mengembalikan hobi dari format JSON
  };

  // Handle delete button click
  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:5000/siswa/${id}`)
      .then(() => {
        setSiswa(siswa.filter((s) => s.id !== id));
      })
      .catch((error) => console.error("Error deleting siswa:", error));
  };

  return (
    <div>
      <h1 className={title()}>Blog</h1>

      {/* Form Input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <div>
          <label>
            Laki-laki
            <input
              type="radio"
              name="gender"
              value="Laki-laki"
              checked={gender === "Laki-laki"}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label>
            Perempuan
            <input
              type="radio"
              name="gender"
              value="Perempuan"
              checked={gender === "Perempuan"}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Hobi:
            <label>
              <input
                type="checkbox"
                value="Bermain Sepak Bola"
                checked={hobi.includes("Bermain Sepak Bola")}
                onChange={handleHobiChange}
              />
              Bermain Sepak Bola
            </label>
            <label>
              <input
                type="checkbox"
                value="Membaca Buku"
                checked={hobi.includes("Membaca Buku")}
                onChange={handleHobiChange}
              />
              Membaca Buku
            </label>
            <label>
              <input
                type="checkbox"
                value="Menonton Film"
                checked={hobi.includes("Menonton Film")}
                onChange={handleHobiChange}
              />
              Menonton Film
            </label>
          </label>
        </div>
        <button type="submit">{editing ? "Update" : "Tambah"} Siswa</button>
      </form>

      {/* List Siswa */}
      <ul>
        {siswa.map((s) => (
          <li key={s.id}>
            {s.nama} - {s.gender} - Hobi: {JSON.parse(s.hobi).join(", ")}
            <button onClick={() => handleEdit(s)}>Edit</button>
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
