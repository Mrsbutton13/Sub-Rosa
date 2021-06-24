import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import TextPostForm from '../TextPostForm'
import '../Dashboard/Dashboard.css'

function TextFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='text' onClick={() => setShowModal(true)}>
            <i class="fas fa-font"></i>
          </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TextPostForm />
                </Modal>
            )}
        </>
    )
}

export default TextFormModal