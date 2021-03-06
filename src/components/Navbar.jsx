import React, { useContext } from 'react'
import { chatContext } from '../context/ChatProvider'

const Navbar = () => {
    const { usuario, signIn, cerrarSesion } = useContext(chatContext)
    return (
        <nav className='navbar navbar-dark bg-dark sticky-top'>
            <span className='navbar-brand ms-3'>
                chat
            </span>
            <div>
                {
                    !usuario.estado ?
                        <button onClick={() => signIn()} className='btn btn-outline-success me-2'>Acceder</button>
                        :
                        <button onClick={() => cerrarSesion()} className='btn btn-outline-danger me-2'>Cerrar Sesion</button>
                }
            </div>
        </nav>
    )
}

export default Navbar
