import React from "react";
import Review from "../Class/Review";

const Bio = (props) => {
  return (
    <div className="wrap">
      <p>
        <h2>{props.nama}</h2>
      </p>
      <p>
        <table>
          <tr>
            <td>NIK</td>
            <td>:</td>
            <td>{props.nik}</td>
          </tr>
          <tr>
            <td>Tanggal Lahir</td>
            <td>:</td>
            <td>{props.tanggal}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>{props.alamat}</td>
          </tr>
          <tr>
            <td>Divisi</td>
            <td>:</td>
            <td>{props.divisi}</td>
          </tr>
          <tr>
            <td>Jabatan</td>
            <td>:</td>
            <td>{props.jabatan}</td>
          </tr>
          <tr>
            <Review like="0" dislike="0" />
          </tr>
        </table>
      </p>
    </div>
  );
};

export default Bio;
