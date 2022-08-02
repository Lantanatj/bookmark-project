import React from 'react'
import tab2img from '../my-images/illustration-hero (1).svg'

const Thirdsegment = () => {
  return (
    <div>
      <div className='seg3 container-fluid p-5'>
        <div className='row'>

          <div className='col-sm-12 col-lg-6 tabdiv2 pl-2'>
            <div className='sphere2'></div>
            <img className='tab2' src={tab2img} alt='' />
            
          </div>

          <div className='col-sm-12 col-lg-6 tabdiv2text p-3 text-center move-down'>
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite website.</p>
            <p>Open a new browser and see your site load instantly.</p>
            <p>Try it for free!</p>
            <button className='segment3btn btn btn-primary m-2 ' >Get it on Chrome</button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Thirdsegment