import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import VideoPostForm from '../VideoPostForm'
import '../Dashboard/Dashboard.css'

function VideoPostFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
          <button className='video' onClick={() => setShowModal(true)}>
            <i class="fas fa-video"></i>
          </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <VideoPostForm />
                </Modal>
            )}
        </>
    )
}

export default VideoPostFormModal