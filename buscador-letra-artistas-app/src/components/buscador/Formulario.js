import React, { useState } from 'react';
import Error from './../error/Error'

const Formulario = ({ guardarBuscarLetra }) => {

    //Define State Form and Error
    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const [error, showError] = useState(false)

    //extrare datos
    const { artista, cancion } = busqueda

    //Recoger los dataos
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }


    //Leyendo y enviando los datos
    const buscarInfo = e => {
        e.preventDefault()

        if (artista.trim() === '' || cancion.trim() === '') {
            showError(true)
            return
        }

        showError(false)

        guardarBuscarLetra(busqueda)
    }

    return (

        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">

                    <form
                        onSubmit={buscarInfo}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}

                                        />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;