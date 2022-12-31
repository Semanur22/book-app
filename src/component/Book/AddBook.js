import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  let navigate = useNavigate();

  const [book, setBook] = useState({
    bookName: "",
  });

  const { bookName } = book;

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/books", book);
    navigate("/api/books/added");
  };

  return (
    <><>
      <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Geri</button>
    </>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
            <h2 className="text-center m-4">Kitap Ekle</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">

                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Kitap Adı"
                  name="bookName"
                  value={bookName}
                  maxLength={24}
                  required
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Kitap Ekle
              </button>

            </form>
          </div>
        </div>
      </div></>
  );
}