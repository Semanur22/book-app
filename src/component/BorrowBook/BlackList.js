import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ChooseBook from '../Book/ChooseBook';
import { Button } from 'semantic-ui-react'

export default function Home() {
  let navigate = useNavigate();

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
        <h2 className="text-center m-4">Kara Liste</h2>
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>

                <th scope="col">Ad Soyad</th>
                <th scope="col">TC Kimlik No</th>
                <th scope="col">Getirmediği Kitap</th>
             
              </tr>
            </thead>
            <tbody>


              {blackLists.map((blackList, index) => (

                <tr>
                
                  <td>{blackList.personName}</td>
                  <td>{blackList.personTc}</td>
                  <td>{blackList.bookName}</td>
                  
                  
              

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div></>
  );
}