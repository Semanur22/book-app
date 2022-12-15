import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




export default function AddPerson() {
  let navigate = useNavigate();

  const [person, setPerson] = useState({
    nameSurname: "",
    email: "",
    tc: "",
    phoneNumber: "",
  });

  const { nameSurname, email, tc, phoneNumber } = person;

  const onInputChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onNumberInputChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setPerson({ ...person, [e.target.name]: e.target.value });
    }
  };  //tc ve telNo sadece rakam icermeli


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/persons", person);
    navigate("/api/persons/registered");
  };




  return (
    <div className="container">
      <><>
      <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>Geri</button>
    </>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
            <h2 className="text-center m-4">Kişi Kayıt</h2>

            <form onSubmit={(e) => onSubmit(e)}>

              <div className="mb-3">

                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Ad Soyad"
                  name="nameSurname"
                  value={nameSurname}
                  maxLength={24}
                  pattern="[a-zA-Z ]*"
                  required
                  onChange={(e) => onInputChange(e)} />
              </div>
              <div className="mb-3">

                <input
                  type={"text"}
                  className="form-control"
                  placeholder="TC Kimlik Numarası"
                  name="tc"
                  value={tc}
                  maxLength={11}
                  minLength={11}
                  required
                  onChange={(e) => onNumberInputChange(e)} />
              </div>
              <div className="mb-3">

                <input
                  type={"tel"}
                  className="form-control"
                  placeholder="Telefon Numarası"
                  name="phoneNumber"
                  maxLength={10}
                  minLength={10}
                  value={phoneNumber}
                  required
                  onChange={(e) => onNumberInputChange(e)} />



              </div>
              <div className="mb-3">

                <input
                  type={"email"}
                  className="form-control"
                  placeholder="E-posta"
                  name="email"
                  value={email}
                  maxLength={36}
                  required
                  onChange={(e) => onInputChange(e)} />
              </div>
              <button type="submit"  className="btn btn-outline-primary">
                Devam Et
              </button>

            </form>
          </div>
        </div></>
      </div>
  );
}