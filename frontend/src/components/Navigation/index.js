import React from 'react'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from './ProfileButton'
import LoginFormModal from '../LoginFormModal'
import SignupFromModal from '../SignupFromModal'
import './Navigation.css'

function Navigation ({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user)
    
    let sessionLinks
    
    if(sessionUser) {
        sessionLinks = (
            <>  
                <button className='home'>
                    <NavLink className='home' to='/dashboard'>Home</NavLink>
                </button>
                <ProfileButton user={sessionUser} />
            </>
        )
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFromModal />
            </>
        )
    }

    return (
        <div className='nav'>
            <div className='sessionLinks'>
                {isLoaded && sessionLinks}
            </div>
        </div>
    )
}

export default Navigation