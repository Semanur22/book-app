import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ChooseBook from '../Book/ChooseBook';
import { Button } from 'semantic-ui-react'

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
  const onSubmit = async (e, id) => {
    e.preventDefault();
    //await axios.post("/api/persons", person);
    console.log(id);
    navigate("/api/books/choose", id);
  };

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
        <h2 className="text-center m-4">Kayıtlı Kişiler</h2>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>

                <th scope="col">Ad Soyad</th>
                <th scope="col">TC Kimlik No</th>
                <th scope="col">Tel NO</th>
                <th scope="col">Kitap Seç</th>
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
                         
                          if( borrowBook.personId == person.id ){
                            person.a=1;
                             
                          }
                         
                        })()}
                    

                    </>
                  ))}
                    {(() => {
                  if(person.a==1){  //personun normalde a diye bi degeri yok??
                    return <button class="ui disabled button" disabled="" tabindex="-1">Kitap Seçili</button>; 
                  }
                  else{
                    return <Link to={{ pathname: '/api/books/choose/' + person.id }}>Kitap Seç</Link> ;
                  }
                   })()} 


                </tr>
              ))}
          
            </tbody>
          </table>
        </div>
      </div></>
  );
}