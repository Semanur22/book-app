import React from 'react'
import { useParams } from "react-router-dom";

export default function PersonRegistered() {
    const {personId}=useParams();
  return (
    <div>PersonRegistered

        {personId}
    </div>
  )
}
