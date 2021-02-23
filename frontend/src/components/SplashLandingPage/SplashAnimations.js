import React from 'react'
import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn} from 'react-scroll-motion'
import SplashPage from '.'
import JustSignUp from './JustSignUp'
import SubRosaIs from './SubRosaIs'
import WhatIsSubRosa from './WhatIsSubRosa'

function SplashAnimations() {
  const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Move(), Sticky())

    return (
        <>
        <ScrollContainer>
           <ScrollPage page={0}>
             <Animator animation={ZoomInScrollOut}>
               <WhatIsSubRosa/>
             </Animator>
           </ScrollPage>
           <ScrollPage page={1}>
             <Animator animation={FadeIn()}>
               <SubRosaIs/>
             </Animator>
           </ScrollPage>
           <ScrollPage page={2}>
              <Animator animation={ZoomInScrollOut} >
                <JustSignUp />
              </Animator>
            </ScrollPage>
        </ScrollContainer>
        </>
    )
}

export default SplashAnimations
