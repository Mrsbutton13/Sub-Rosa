import React from 'react'
import { useSelector } from "react-redux"
import { NavLink, Redirect } from "react-router-dom"
import LoginFormModal from "../LoginFormModal"
import SignupFormModal from "../SignupFromModal"
import './SplashLanding.css'
import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn} from 'react-scroll-motion'
import WhatIsSubRosa from './WhatIsSubRosa'


function SplashPage({isLoaded} ) {
    const sessionUser = useSelector(state => state.session.user)
    const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn())
    const FadeUp = batch(Fade(), Move(), Sticky())

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
          <ScrollContainer>
            <ScrollPage page={0}>
              <Animator animation={FadeUp}>
              <div className='splash-container'>
                <div className='splash-div1'>
                  <h1 className='Sub-Rosa'>Sub-Rosa</h1>
                  <section className='splash-section'>
                    <div className='note'>
                      Read other's experiences, look at things, talk about experiences.
                      Enter the realm of the supernatural. 
                    </div>
                    <div className='splash-sub-div'>
                      <div className='createA'>{isLoaded && createA}</div>
                      <div className='login'>{isLoaded && login}</div>
                    </div>
                  </section>
                </div>
              </div>
              </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
              <Animator animation={ZoomInScrollOut}>
                <WhatIsSubRosa/>
              </Animator>
            </ScrollPage>
              <div className='splash-div3'>
              </div>
              <div className='splash-div4'>
              </div>
          </ScrollContainer>
        </>
    )
}

export default SplashPage