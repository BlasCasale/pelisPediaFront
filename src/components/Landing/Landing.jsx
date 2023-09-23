import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {

  return (
    <section className='landing' >

      <h2 className='landingWelcome'>Bienvenido a PelisPedia</h2>

      <div className='landingBox'>
        <h3 className='landingTitle'>Ya sos usario?</h3>
        <Link className="link" to={"/login"}>Iniciar sesión</Link>
      </div>

      <div className='landingBox'>
        <h3 className='landingTitle'>Todavía no te registraste?</h3>
        <Link className="link" to={"/register"}>Registrarse</Link>
      </div>

    </section >
  )
}

export default Landing