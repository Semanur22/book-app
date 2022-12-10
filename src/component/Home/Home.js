import React from "react";
import { Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
        <h2 className="text-center m-4">ANA MENÜ</h2>
        <Link className="btn btn-outline-primary" to="/api/persons/addPerson">
            Kişi Kayıt
        </Link>
        <br></br>
        <br></br>
        <Link className="btn btn-outline-primary" to="/api/persons">
            Kayıtlı Kişiler
        </Link>
        <br></br>
        <br></br>
        <Link className="btn btn-outline-primary" to="/api/borrowBooks">
            Kitap Teslim
        </Link>
        <br></br>
        <br></br>
        <Link className="btn btn-outline-primary" to="/api/books">
            Kitap Ekle
        </Link>
        <br></br>
        <br></br>
        <Link className="btn btn-outline-primary" to="/api/borrowBooks/blackList">
            Kara Liste
        </Link>
        </div>
        </div>
    </div>
    
    
    
  );
}