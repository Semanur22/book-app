import axios from "axios";
import { useParams ,useNavigate } from "react-router-dom";
import React, { useState } from "react";
export default function AddBlackList() {
    let navigate = useNavigate();
    const { borrowBookId }=useParams();

    const [blackList, setBlackList] = useState({
        borrowBookId: borrowBookId
   
      });
      const onSubmit = async (e) => {
    
        e.preventDefault();
        await axios.post("/api/blackLists", blackList);
        navigate("/api/black/added");
      };
      
  return (
    <div className="container" >
       <h2>Kişinin kara listeye alınmasını onaylıyor musunuz?</h2>
       <form onSubmit={(e) => onSubmit(e)}>
        <button className="btn btn-outline-primary">
            Onayla
        </button>
        </form>
        <><>
    <h2></h2>
      <button className="btn btn-outline-primary"  onClick={() => navigate(-1)}>İptal</button>
    </></>
    </div>
  )
}
