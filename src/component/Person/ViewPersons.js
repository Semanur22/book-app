import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useNavigate,useLocation} from "react-router-dom";
import ChooseBook from '../Book/ChooseBook';

export default function Home() {
  let navigate = useNavigate();
  const [persons, setPersons]=useState([]);
  useEffect(() => {
    loadPersons();
  }, []);

  const loadPersons = async () => {
    const result = await axios.get("/api/persons");
    setPersons(result.data);
  };
  const onSubmit = async (e,id) => {
    e.preventDefault();
    //await axios.post("/api/persons", person);
    console.log(id);
    navigate("/api/books/choose",id);
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
                <td>
                <Link to={{pathname : '/api/books/choose/' +person.id}}>Kitap Seç</Link>
                </td>
                {/* <td><Link className="btn btn-outline-primary" to="/api/books/choose">
                     Kitap Seç
                </Link></td> */}
                {/* <Button
  onClick={() => {
    navigate({ChooseBook})
  }}
>
  Click me
</Button> */}

                  

                
                
                {/* userlar person olacak
                
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
}