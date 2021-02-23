import React from 'react'
import './SplashLanding.css'

function WhatIsSubRosa () {
    return (
        <>
          <div className='splash-div2'>
            <h1 className='what-is'>What is Sub-Rosa?</h1>
            <div className='symbols'>
              <span className='book'>
                <i id='book-dead' className="fas fa-book-dead"></i>
              </span>
              <span className='crossbones'>
                <i id='crossbones' className="fas fa-skull-crossbones"></i>
              </span>
              <span className='moon'>
                <i id='moon' className="fas fa-cloud-moon"></i>
              </span>
            </div>
            <div className='symbols2'>
              <span className='crow'>
                <i id='crow' className="fas fa-crow"></i>
              </span>
              <span className='ghost'>
                <i id='ghost' className="fas fa-ghost"></i>
              </span>   
            </div> 
            <div className='description-div'>
            <h2 className='wanting-more' >Sub-Rosa will leave you wanting more.</h2>
            <span className='description'>
              Who doesn't love a scary, creepy story? Some might think they are true some might not.
              Here you can write you're story, like many others who believe in the supernatural. Read, write, view photos, or videos 
              of the supernatural. 
            </span>        
            </div>
          </div> 
        </>
    )
}

export default WhatIsSubRosa