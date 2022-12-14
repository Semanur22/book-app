import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddBook from "../Book/AddBook";
import AddPerson from "../Person/AddPerson";
import BorrowBooks from "./ReturnBook";
export default function BlackList(props) {
  let navigate = useNavigate();

  const [borrowBooks, setBorrowBooks] = useState([]);
  useEffect(() => {
    
    loadBorrowBooks();
    
  }, []);
  
  const loadBorrowBooks = async () => {
   
    const result = await axios.get("/api/borrowBooks");
    setBorrowBooks(result.data);
  };
  return (
    <><>
    <button onClick={() => navigate(-1)}>Geri</button>
  </>
    <div className="container">
      <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
      <h2 className="text-center m-4">Kara Liste</h2>
      {
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Ad Soyad</th>
              <th scope="col">TC Kimlik No</th>
              <th scope="col">Kitap Adı</th>
              <th scope="col">Teslim Edildi Mi?</th>
            </tr>
          </thead>
          <tbody>
            {borrowBooks.map((borrowBook, index) => (

              borrowBook.black === 1 ? <tr>

                <td>{borrowBook.personName}</td>
                <td>{borrowBook.personTc}</td>
                <td>{borrowBook.bookName}</td>
                <td>{borrowBook.black}</td>




              </tr> : <p></p>

            ))}
          </tbody>
        </table>
      }
    </div></>
  )

}