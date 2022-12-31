
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function SurveyForm() {
  let navigate = useNavigate();


  const [survey, setSurvey] = useState('');

  const handleChange = (event) => {
    setSurvey(event.target.value);
  };

  const whichOne = async (e) => {


    if (document.getElementById('scientificBooks').checked) {

      await axios.post("/api/survey/scientificBook", survey);
      navigate("/api/survey/compile");

    } else if (document.getElementById('textBooks').checked) {
      await axios.post("/api/survey/textBook", survey);
      navigate("/api/survey/compile");
    }
    else if (document.getElementById('readingBook').checked) {
      await axios.post("/api/survey/readingBook", survey);
      navigate("/api/survey/compile");
    }
    else if (document.getElementById('encyclopedias').checked) {
      await axios.post("/api/survey/encyclopedia", survey);
      navigate("/api/survey/compile");
    }
  }

  return (
    <><>
      <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Geri</button>
    </>
      <div className="container">
        <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
        <h2 className="text-center m-4">Anket</h2>
        <br></br>
        <h4 className="text-center m-4">Kütüphanemizde daha çok hangi türden kitapları ödünç alıyorsunuz?</h4>
        <br></br>
        <input type="radio" name="bookType" id="scientificBooks" value={4} checked={survey === '4'} onChange={handleChange} /> Bilimsel Kitaplar
        <br></br>
        <br></br>
        <input type="radio" name="bookType" id="textBooks" value={1} checked={survey === '1'} onChange={handleChange}/> Ders Kitapları
        <br></br>
        <br></br>
        <input type="radio" name="bookType" id="readingBook" value={2} checked={survey === '2'} onChange={handleChange} /> Okuma Kitapları
        <br></br>
        <br></br>
        <input type="radio"  name="bookType" id="encyclopedias" value={3} checked={survey === '3'} onChange={handleChange} />Ansiklopediler

        <br></br>
        <br></br>
    
        <div>
          <button className="btn btn-outline-primary" onClick={(e) => whichOne(e)}>Gönder</button>
        </div>

      
      </div></>
  )
}
