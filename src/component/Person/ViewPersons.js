import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Home() {
  let navigate = useNavigate();
  
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    loadPersons();
  }, []);

  const loadPersons = async () => {
    const result = await axios.get("/api/persons");
    setPersons(result.data);
  };
 

  const [borrowBooks, setBorrowBooks] = useState([]);
  useEffect(() => {
    loadBorrowBooks();
  }, []);

  const loadBorrowBooks = async () => {
    const result = await axios.get("/api/borrowBooks");
    setBorrowBooks(result.data);
  };

  const fonk= () => {
    axios.post('/api/persons/2/1', {
      variableId: 1,


    })
      .then(response => {
        console.log(response.data);
      });
      navigate("/")

  }
  



  return (
    <><>
      <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Geri</button>
    </>
      <div className="container">
        <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
        <h2 className="text-center m-4">Kayıtlı Kişiler</h2>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>

                <th scope="col">Ad Soyad</th>
                <th scope="col">TC Kimlik No</th>
                <th scope="col">Tel NO</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>

            
              {persons.map((person, index) => (

                <tr>
                  <td>{person.nameSurname}</td>
                  <td>{person.tc}</td>
                  <td>{person.phoneNumber}</td>
                  {borrowBooks.map((borrowBook, index) => (
                    <>
                  

                      {(() => {

                        if (borrowBook.personId == person.id) {
                          person.a = 1;

                        }

                      })()}


                    </>
                  ))}
                  <td>
                    {(() => {
                      if (person.a == 1) {  //personun normalde a diye bi degeri yok??
                        return <button  class="ui disabled button" disabled="" tabindex="-1">Kitap Seçili</button>;
                      }
                      else {
                        return <Link  className="btn btn-outline-primary" to={{ pathname: '/api/books/choose/' + person.id }}>Kitap Seç</Link>;
                      }

                    })()}
                  </td>


                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div></>
  );
}