import React, { useContext, useState } from 'react'
import { chatContext } from '../context/ChatProvider'

const Agregar = () => {

    const [mensajeInput, setMensajeInput] = useState('')

    const { agregarMensaje, usuario } = useContext(chatContext)

    const enviar = (e) => {
        e.preventDefault()
        if (!mensajeInput.trim()) {
            return
        }
        agregarMensaje(usuario.uid, mensajeInput)
        setMensajeInput('')
    }


    return (
        <form
            className='fixed-bottom input-group p-3 bg-dark'
            onSubmit={(e) => enviar(e)}
        >
            <input
                value={mensajeInput}
                type='text'
                className='form-control'
                placeholder='escribe un mensaje'
                onChange={(e) => setMensajeInput(e.target.value)}
            />
            <div className='input-group-append'>
                <button className='btn btn-primary' type='submit'>
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Agregar
