import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as sessionActions from '../../store/session'
import '../Navigation/Navigation.css'


function ProfileButton({ user }) {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const history = useHistory()

    const openMenu = () => {
        if(showMenu) return
        setShowMenu(true)
    }

    useEffect(() => {
        if(!showMenu) return

        const closeMenu = () => {
            setShowMenu(false)
        }

        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    const logout = (e) => {
        e.preventDefault()
        history.push('/')
        dispatch(sessionActions.logout())
      
    }

    return (
        <>
        <button className='user-icon' onClick={openMenu}>
            <i className='fas fa-user-circle' />
        </button>
        {showMenu && (
            <div className='profile-postion'>
            <div className='profile-dropdown'>
                <div className='profile-user-div'>
                    <div className='profile-user'>  {user.username}</div>
                </div>
                <div className='profile-user-div'>
                    <div className='profile-user'>  {user.email}</div>
                </div>
                    <button className='logout' onClick={logout}>Log Out</button>
            </div>
            </div>
        )}
        </>
    )
}

export default ProfileButton