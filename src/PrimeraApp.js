import PropTypes from "prop-types"
import React from 'react'



const PrimeraApp = ({saludo, texto}) => {
    const personal = {
        nombre: "Jose",
        edad: 29
    }

    

    return (
        <><h1>{saludo}</h1>
            <p>Mi primera aplicacion de {personal.nombre}</p>
            <p>{texto}</p>
            
            </>


    );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    texto: 'Contenido'
}



export default PrimeraApp;