import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate,Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ChooseBook(state) {

let navigate = useNavigate();

  const {personId}=useParams();
  const [books, setBooks]=useState([]);
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("/api/books/choose");
    setBooks(result.data);
  };
  /*
  const [borrowBook, setBorrowBook] = useState({
    day: "",
    personId1:personId,
    bookId:"",
  });

  const { day,bookId} = borrowBook;
*/
/*

  const onInputChange = (e) => {
    setBorrowBook({ ...borrowBook, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/borrowBooks", borrowBook);
    navigate("/");
  };
  
**/


  return (
    <><>
          <button onClick={() => navigate(-1)}>Geri</button> 
      </>
    

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
                  
                         
                     
                          <Link to={{pathname : '/api/books/onay/' +personId+ '/book/'+book.id}}>Kitap Seç</Link>
                         
                         
                
 
                </td>
               
                
                
        
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
}