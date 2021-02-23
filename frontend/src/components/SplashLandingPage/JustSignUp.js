import React from 'react'
import { useSelector } from "react-redux"
import { NavLink, Redirect } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFromModal"
import './SplashLanding.css'

function JustSignUp () {
    const login2 = <LoginFormModal />
    const createA2 = <SignupFormModal />

  return (
      <>
        <div className='splash-div4'>
          <h1 className='Sub-Rosa2'>Sub-Rosa</h1>
          <section className='splash-section2'>
            <div className='note2'>
              What are you waiting for? You are not alone. Join, and start blogging. We believe you! 
            </div>
            <div className='splash-sub-div2'>
              <div className='createA2'>{createA2}</div>
              <div className='login2'>{login2}</div>
            </div>
          </section>
        </div>  
      </>
  )
}

export default JustSignUp