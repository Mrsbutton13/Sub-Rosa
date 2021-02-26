import React, {useContext, useEffect, useRef, useState} from 'react'
import ReactDom from 'react-dom'

const ModalContext = React.createContext()

export function ModalProvider({ children }) {
    const modalRef = useRef()
    const [value, setValue] = useState()
    useEffect(() => {
        setValue(modalRef.current)
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef}/>
        </>
    )
}

export function BlogModal({ onClose, children }) {
    const modalNode = useContext(ModalContext)
    if(!modalNode) return null

    return ReactDom.createPortal(
        <div id='blog-modal'>
            <div id='blog-modal-background' onClick={onClose}/>
            <div id='blog-modal-content'>
                {children}
            </div>
        </div>
    )
}