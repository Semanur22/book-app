import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function ChooseBook(state) {

  let navigate = useNavigate();

  const { personId } = useParams();


  // const [person, setPerson] = useState({});
  // useEffect(() => {
  //   loadPerson();
  // }, []);

  // const loadPerson = async () => {
  //   const result = await axios.get(`/api/persons/${personId}`);
  //   setPerson(result.data);
  // }; 
  //servis kullanmadan kisi id si ile tum bilgileri cagirma

  const [books, setBooks] = useState([]);
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("/api/books/choose");
    setBooks(result.data);
  };


  return (
    <><>
      <button onClick={() => navigate(-1)}>Geri</button>
    </>



      {/* {person.nameSurname} */}
      <div className="container">
        <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
        <h2 className="text-center m-4">Kitap Seç</h2>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Kitap Adı</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr>
                  <td>{book.bookName}</td>
                  <td>

                    <Link to={{ pathname: '/api/books/onay/' + personId + '/book/' + book.id }}>Kitap Seç</Link>

                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></>
  );
}