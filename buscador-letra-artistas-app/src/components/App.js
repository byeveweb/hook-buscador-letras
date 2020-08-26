import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Formulario from './buscador/Formulario'
import Letra from './buscador/Letra'
import Artista from './buscador/Artista'
import './App.css';

function App() {

  //pasar los parametros del form
  const [buscarLetra, guardarBuscarLetra] = useState({})

  //State para la letra
  const [letra, guardarLetra] = useState('')

  //State para el artista
  const [artista, guardarArtista] = useState('')

  //Actualizando la carga
  useEffect(() => {

    //Evitamos que el objeto llegue vacio
    if (Object.keys(buscarLetra).length === 0) return

    //consultamos las APIS
    const consultarApis = async () => {
      const { artista, cancion } = buscarLetra
      const url_letra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url_artista = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, artistaInfo] = await Promise.all(
        [axios.get(url_letra), axios.get(url_artista)]
      )
      // const resultado = await axios(url_letra)
      // guardarLetra(resultado.data.lyrics)
      guardarLetra(letra.data.lyrics)
      guardarArtista(artistaInfo.data.artists[0])
    }



    consultarApis()

  }, [buscarLetra])




  return (
    <>
      <Formulario
        guardarBuscarLetra={guardarBuscarLetra} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artista
              artista={artista} />
          </div>
          <div className="col-md-6">
            <Letra
              letra={letra}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
