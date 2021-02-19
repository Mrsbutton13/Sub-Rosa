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
            <ProfileButton user={sessionUser} />
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
        <ul>
            <li>
                <NavLink style={{marginRight:10}} exact to='/'>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    )
}

export default Navigation