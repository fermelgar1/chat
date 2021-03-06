import React, { useContext } from 'react'
import Chat from './components/Chat'
import Navbar from './components/Navbar'
import { chatContext } from './context/ChatProvider'

const App = () => {

    const { usuario } = useContext(chatContext)

    return usuario.estado !== null ? (
        <div>
            <Navbar />
            {
                usuario.estado &&
                <Chat />
            }
        </div>
    ) :
        (
            <div className='spinner-border text-success' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        )
}

export default App
