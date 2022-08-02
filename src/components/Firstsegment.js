import React from 'react'
import tabimg from '../my-images/illustration-features-tab-1.svg'

const Firstsegment = () => {
  return (
    <div className='seg1 container-fluid p-5'>
        <div className='row'>
            <div className='col-sm-12 col-lg-6 tabdiv text p-1 text-center'>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite website.</p>
                <p>Open a new browser and see your site load instantly.</p>
                <p>Try it for free!</p>
                <button className='segment1btn btn btn-primary m-2 ' >Get it on Chrome</button>
                <button className=' segment1btn btn btn-secondary m-2 p2'>Get it on firefox</button>
                
            </div>
                
            <div className='col-sm-12 col-lg-6  tabdiv'>
                <img className='tab1' src={tabimg} alt=''/>
                <div className='sphere'></div>
            </div>
        </div>    
    </div>
  )
}

export default Firstsegment