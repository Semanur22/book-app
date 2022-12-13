import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate ,useParams } from "react-router-dom";
import {AiFillCheckSquare} from 'react-icons/ai';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function BorrowBooks() {
  let navigate = useNavigate();

  const { id }=useParams();

  const [borrowBooks, setBorrowBooks]=useState([]);
  useEffect(() => {
    loadBorrowBooks();
  }, []);

  // function handleReturn(params) {
  //   borrowBooks.
    
  // }

  const loadBorrowBooks = async () => {
    const result = await axios.get("/api/borrowBooks");
    setBorrowBooks(result.data);
  };

  const returnBook = async (id) => {
    await axios.delete(`/api/borrowBooks/${id}`);
    loadBorrowBooks();
  };

  function handleBlack(params) {
    setBorrowBooks.black(1);
    
  }

  const addBlackList= async (id) => {

    await axios.put(`/api/borrowBooks/blackList/${id}`, borrowBooks)
        .then(response => this.setState({ updatedAt: response.data.updatedAt }));
    navigate("/api/borrowBooks/blackList");
    loadBorrowBooks();    
  };

  const onSubmit = async (id) => {
    
    console.log(borrowBooks.id)
    await axios.put(`/api/borrowBooks/blackList/${id}`, borrowBooks);
    navigate("/");
  
  }
  return (
    <><>
            <button onClick={() => navigate(-1)}>Geri</button>
        </>
    
    <div className="container">
      <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
      <h2 className="text-center m-4">Kitap Teslim</h2>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Ad Soyad</th>
              <th scope="col">TC Kimlik No</th>
              <th scope="col">Kitap Adı</th>
              <th></th>
              <th scope="col">Teslim Edildi Mi?</th>
            </tr>
          </thead>
          <tbody>
            {borrowBooks.map((borrowBook, index) => (
               borrowBook.black===0 ? 
              <tr>
                
                <td>{borrowBook.personName}</td>
                <td>{borrowBook.personTc}</td>
                <td>{borrowBook.bookName}</td>

                <td>{borrowBook.black}</td>
            
                <td>
                <button
                    className="btn btn-check mx-2"
                    onClick={() => returnBook(borrowBook.id)}
                  >
                    <AiFillCheckSquare/>
                </button>
                
                <button
                    className="btn btn-check mx-2"
                    onClick={() => onSubmit(borrowBook.id)}
              
                  >
                    <CancelPresentationIcon/>
                 </button>
                </td>
                <td>
                  
                
                  
                </td>
                </tr> :<p></p>
                
                
        
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
}
