import React from "react";
import "../Wrap.css";
import Bio from "./Bio";

const Home = () => {
  return (
    <div>
      <Bio
        nama="Elma Dyanatasha"
        nik="349274859385772"
        tanggal="3 Mei 2001"
        alamat="Jl. Korpri"
        divisi="Design"
        jabatan="Manager"
      />
      <Bio
        nama="Robi Setiawan"
        nik="349274858395801"
        tanggal="8 Agustus 2001"
        alamat="Jl. Jatimulyo"
        divisi="Design"
        jabatan="Karyawan"
      />
      <Bio
        nama="Akbar Maulana"
        nik="34927483794829"
        tanggal="25 Oktober 2001"
        alamat="Jl. Belwis"
        divisi="Produksi"
        jabatan="Officer"
      />
      <Bio
        nama="Salsabilla"
        nik="349274827490025"
        tanggal="8 April 2000"
        alamat="Jl. Way Halim"
        divisi="Marketing"
        jabatan="Manager"
      />
    </div>
  );
};

export default Home;
