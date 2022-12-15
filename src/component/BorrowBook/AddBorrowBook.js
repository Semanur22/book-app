import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
export default function Onay() {
  let navigate = useNavigate();
  const { personId, bookId } = useParams();



  const [borrowBook, setBorrowBook] = useState({
    personId: personId,
    bookId: bookId,
    day: "",
    black: 0,
  });



  const onInputChange = (e) => {
    setBorrowBook({ ...borrowBook, [e.target.name]: e.target.value });
  };

  const onNumberInputChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setBorrowBook({ ...borrowBook, [e.target.name]: e.target.value });
    }
  };  //tc ve telNo sadece rakam icermeli


  const onSubmit = async (e) => {
    
    e.preventDefault();
    await axios.post("/api/borrowBooks", borrowBook);
    navigate("/api/borrowBooks/added");
  };

  const { day } = borrowBook;


  return (
    <><>
    <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Geri</button>
  </>
    <div className="container">
      <div className="container"></div>
      <div className="py-4">
        <h2 className="text-center m-4">Gün Sayısı</h2>
        <form onSubmit={(e) => onSubmit(e)}>

          <div className="mb-3">

  
            <input
              type={"text"}
              className="form-control"
              placeholder="Gün Sayısı"
              name="day"
              value={day}
              min={1}
              max={14}


              required
              onChange={(e) => onNumberInputChange(e)} />
          </div>
          <button className="btn btn-outline-primary" >
            Onayla
          </button>
        </form>
      </div>
    </div></>


  )
}
