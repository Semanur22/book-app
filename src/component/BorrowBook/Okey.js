import React from 'react'
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from 'semantic-ui-react';
export default function Okey() {
    let navigate = useNavigate();
  return (
    <div><button  onClick={() => navigate(`/`)}>
            Okey
        </button></div>
  )
}
