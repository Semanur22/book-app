import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AiFillCheckSquare } from 'react-icons/ai';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Button } from 'semantic-ui-react'

export default function BorrowBooks() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [borrowBooks, setBorrowBooks] = useState([]);
  useEffect(() => {
    loadBorrowBooks();
  }, []);

  const loadBorrowBooks = async () => {
    const result = await axios.get("/api/borrowBooks");
    setBorrowBooks(result.data);
  };

  const [blackLists, setBlackLists] = useState([]);
  useEffect(() => {
    loadBlacks();
  }, []);

  const loadBlacks = async () => {
    const result = await axios.get("/api/blackLists");
    setBlackLists(result.data);
  };

 

  return (
    <><>
      <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Geri</button>
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
                <th scope="col">Teslim Edildi Mi?</th>
              </tr>
            </thead>
            <tbody>
              {borrowBooks.map((borrowBook, index) => (

                <tr>

                  <td>{borrowBook.personName}</td>
                  <td>{borrowBook.personTc}</td>
                  <td>{borrowBook.bookName}</td>


                  {blackLists.map((blackList, index) => (
                    <>


                      {(() => {

                        if (borrowBook.id == blackList.borrowBookId) {
                          borrowBook.a = 1;

                        }

                      })()}

                    </>
                  ))}

                  <td>
                    {(() => {
                      if (borrowBook.a == 1) {  //personun normalde a diye bi degeri yok??
                        return <button  class="ui disabled button" disabled="" tabindex="-1">Kara Kistede</button>;

                      }

                      else {

                        return <form>
                          <button class="ui positive button" onClick={() => navigate(`/api/black/delete/${borrowBook.id}`)}>
                            <AiFillCheckSquare />
                          </button>

                          <button class="ui negative button" onClick={() => navigate(`/api/black/${borrowBook.id}`)}>
                            <CancelPresentationIcon />
                          </button></form>
                      }

                    })()}
                  </td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></>
  );
}
