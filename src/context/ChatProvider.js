import React, { createContext, useEffect, useState } from 'react'
import { provider, db, auth } from '../firebase'


export const chatContext = createContext()

const ChatProvider = (props) => {
    const dataUsuario = {
        uid: null,
        estado: null,
        email: null
    }

    const [usuario, setUsuario] = useState(dataUsuario)
    const [mensajes, setMensajes] = useState([])

    useEffect(() => {
        detectarUsuario()
    }, [])

    const signIn = async () => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log('error', error)
        }
    }

    const cerrarSesion = async () => {
        try {
            await auth.signOut()
        } catch (error) {
            console.log('error', error)
        }
    }

    const detectarUsuario = async () => {
        try {
            await auth.onAuthStateChanged((user) => {
                if (user) {
                    setUsuario({
                        uid: user.uid,
                        estado: true,
                        email: user.email
                    })
                    cargarMensajes()
                } else {
                    setUsuario({ ...dataUsuario, estado: false })
                }
            })
        } catch (error) {
            console.log('error', error)
        }

    }

    const cargarMensajes = async () => {
        try {
            await db.collection('chat').orderBy('fecha').onSnapshot(query => {
                const arrayMensajes = query.docs.map(item => item.data())
                setMensajes(arrayMensajes)
            })
        } catch (error) {

        }
    }

    const agregarMensaje = async (uidCht, textoInput) => {
        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                uid: uidCht
            })
        } catch (error) {
            console.log('error', error)
        }
    }


    return (
        <chatContext.Provider value={{
            usuario, signIn, cerrarSesion, mensajes, agregarMensaje
        }}
        >
            {props.children}
        </chatContext.Provider>
    )
}

export default ChatProvider
