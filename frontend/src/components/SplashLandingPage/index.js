import React from 'react'
import { useSelector } from "react-redux"
import { NavLink, Redirect } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFromModal"
import './SplashLanding.css'
import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn} from 'react-scroll-motion'
import WhatIsSubRosa from './WhatIsSubRosa'
import SubRosaIs from './SubRosaIs'
import JustSignUp from './JustSignUp'
import Navigation from '../Navigation'


function SplashPage({isLoaded}) {
    const sessionUser = useSelector(state => state.session.user)

    let login 
    let createA
    if(sessionUser) {
        return <Redirect to='/dashboard'/>
    } else {
        login = <LoginFormModal />
        createA = <SignupFormModal />
    }
    
    return (
        <>
                <div className='splash-div1'>
                  <h1 className='Sub-Rosa'>Sub-Rosa</h1>
                  <section className='splash-section'>
                    <div className='note'>
                      Do you believe in ghost? Do you believe in aliens? 
                      Have you seen something unexplainable 
                      and never told anyone? Maybe you feel like 
                      no one will believe you. Well fear no more, 
                      here you can write about your experiences incognito.
                      Enter the realm of the supernatural. 
                    </div>
                    <div className='splash-sub-div'>
                      <div className='createA'>{isLoaded && createA}</div>
                      <div className='login'>{isLoaded && login}</div>
                    </div>
                  </section>
                </div>
          <ScrollContainer>
            <ScrollPage page={1}>
              <Animator animation={batch(ZoomIn(), FadeIn())}>
                <WhatIsSubRosa/>
              </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
              <Animator animation={FadeIn()} >
                <SubRosaIs />
              </Animator>
            </ScrollPage>
            {/* <ScrollPage page={3}>
              <Animator animation={batch(MoveIn())} > */}
                <JustSignUp />
              {/* </Animator>
            </ScrollPage> */}
          </ScrollContainer>
        </>
    )
}

export default SplashPage