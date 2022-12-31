import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function 
() 
{
    let navigate = useNavigate();
  
    const [count, setCount] = useState([]);
    useEffect(() => {
      loadCount();
    }, []);
  
    const loadCount = async () => {
      const result = await axios.get("/api/survey/counter");
      setCount(result.data);
    };

  return (
    <div>


{count.map((count, index) => (

<tr>
  <td>{count.nameSurname}</td>
  
</tr>
))}
    </div>
  )
}
