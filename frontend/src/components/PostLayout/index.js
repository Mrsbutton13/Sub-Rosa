import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import PostForm from './PostForm'


function PostFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='text' onClick={() => setShowModal(true)}>
            <i class="fas fa-font"></i>
          </button>
          <button className='image' onClick={() => setShowModal(true)}>
            <i class="fas fa-images"></i>
          </button>
          <button className='video' onClick={() => setShowModal(true)}>
            <i class="fas fa-video"></i>
          </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostForm />
                </Modal>
            )}
        </>
    )
}

export default PostFormModal