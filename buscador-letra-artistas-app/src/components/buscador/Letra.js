import React from 'react';


const Letra = ({ letra }) => {

    if (letra.length === 0) return null

    return (
        <>
            <h2>Letra Canción</h2>
            {letra}
        </>
    );
}

export default Letra;