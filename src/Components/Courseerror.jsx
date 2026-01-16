import React from 'react'
import { useParams } from 'react-router-dom';


export default function Courseerror() {
     let param = useParams();
      console.log(param);
  return (
    <div>Courseerror</div>
  )
}
