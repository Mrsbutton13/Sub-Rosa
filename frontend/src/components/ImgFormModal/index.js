import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import ImagePostForm from '../ImgPostForm'
import '../Dashboard/Dashboard.css'

function ImageFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
          <button className='image' onClick={() => setShowModal(true)}>
            <i class="fas fa-images"></i>
          </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImagePostForm />
                </Modal>
            )}
        </>
    )
}

export default ImageFormModal