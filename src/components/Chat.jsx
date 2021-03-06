import React, { useContext, useEffect, useRef } from 'react'
import { chatContext } from '../context/ChatProvider'
import Agregar from './Agregar'

const Chat = () => {

    const { mensajes, usuario } = useContext(chatContext)

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [mensajes])  

    return (
        <div
            className='mt-3 px-2 mb-2'
            style={{ overflowY: 'scroll', height: '75vh' }}
            ref={ref}
        >
            {
                mensajes.map((item, index) => (
                    item.uid === usuario.uid ? (
                        <div key={index} className='d-flex justify-content-end mb-2'>
                            <span className='badge rounded-pill bg-primary'>
                                {item.texto}
                            </span>
                        </div>
                    ) : (
                        <div key={index} className='d-flex justify-content-start mb-2'>
                            <span className='badge rounded-pill bg-secondary'>
                                {item.texto}
                            </span>
                        </div>
                    )
                ))
            }
            <Agregar />
        </div>
    )
}

export default Chat
