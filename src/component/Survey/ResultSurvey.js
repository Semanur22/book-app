import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function
  () {
  let navigate = useNavigate();

  const [count, setCount] = useState([]);
  useEffect(() => {
    loadCount();
  }, []);

  const loadCount = async () => {
    const result = await axios.get("/api/survey/counter");
    setCount(result.data);
  };


  return (
    <><>
      <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Geri</button>
    </>
      <div className="container">
      <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
        <h2 className="text-center m-4">Kayıtlı Kişiler</h2>
        <br></br>
        <h4 className="text-center m-4">Kütüphanemizde daha çok hangi türden kitapları ödünç alıyorsunuz?</h4>
        <div className="py-4" style={{ margin: 'auto', width: '50%' }}>
        <table className="text-center m-4">
          <tbody>
            <tr >
              <td>Bilimsel Kitaplar: {count[0]}</td>
            </tr>
            <tr>
              <td>Ders Kitapları: {count[1]}</td>
            </tr>
            <tr>
              <td>Okuma Kitapları: {count[2]}</td>
            </tr>
            <tr>
              <td>Ansiklopediler: {count[3]}</td>

            </tr>
          </tbody>
        </table>
        </div>






      </div></>
  )
}
