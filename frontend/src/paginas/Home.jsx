import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'; 
const Home = () => {
    const [datos, setDatos] = useState([]);
    let traeDatos=async()=>
        {
            await axios.get('https://jsonplaceholder.typicode.com/posts' )
            .then(response=>{
                setDatos(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        };
        useEffect(() => {
          traeDatos();
      }, [ ]) 
  return (
    <>
    <h1>Ejemplo React con Nestjs desde orquestación con Docker</h1>
    <ul>
    {datos.map((dato)=>
    (
        <Fragment key={dato.id}>
        <li>{dato.title}</li>
        </Fragment>
    ))}
    </ul>
    </>
  )
}

export default Home