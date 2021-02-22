import React from 'react'
import { useSelector } from "react-redux"
import { NavLink, Redirect } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFromModal"
import './SplashLanding.css'


function SplashPage({isLoaded} ) {
    const sessionUser = useSelector(state => state.session.user)

    let login 
    let createA
    if(sessionUser) {
        return <Redirect to='/Dashboard'/>
    } else {
        login = <LoginFormModal />
        createA = <SignupFormModal />
    }
    
    return (
        <>
            <div className='splash-container'>
                <div className='splash-div1'>
                    <h1 className='Sub-Rosa'>Sub-Rosa</h1>
                    <section className='splash-section'>
                        <div className='note'>
                            Read other's experiences, look at things, talk about experiences.
                            Enter the realm of the supernatural. 
                        </div>
                        <div className='splash-sub-div'>
                        <div className='createA'>
                            {isLoaded && createA}
                        </div>
                        <div className='login'>
                            {isLoaded && login}
                        </div>
                        </div>
                    </section>
                </div>
            </div>
    
        </>
    )
}

export default SplashPage