import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import SignupForm from './SignupForm'


function SignupFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='sub' onClick={() => setShowModal(true)}>Get Started</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}

export default SignupFormModal