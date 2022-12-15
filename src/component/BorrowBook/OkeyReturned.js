import React from 'react'
import { useNavigate } from "react-router-dom";

export default function OkeyReturned() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="text-center m-4">Kitap Ödünç Verme Sistemi</h1>
      <div className="container">
      <h3 className="text-center m-4">Kitap teslim edildi.</h3>
      <h3 className="text-center m-4">Ana menüye dönmek için tıklayınız.</h3>
      <button type="submit"  className="btn btn-outline-primary"  onClick={() => navigate(`/`)}>Ana Menü</button>
      </div>
    </div>
    
  )
}
