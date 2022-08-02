import React from 'react'
import chrome from '../my-images/logo-chrome.svg'
import firefox from '../my-images/logo-firefox.svg'
import opera from '../my-images/logo-opera.svg'
import dottedline from '../my-images/bg-dots.svg'

const Fourthsegment = () => {
  return (
    <div className='container accordion'>
        <div className='justify-content-center text-center'>
            <h1>Download The Extension</h1>
            <p>We have got more browsers in the pipeline.Please do let us know if you have got a favourite you'd like us to priotize.</p>
        </div>
        <div className='row justify-content-center p-5 m-auto text-center'>
            <div className='browserbox col-sm-3 p-5 m-3 mt-1'>
                <img src={chrome} alt='chrome'/>
                <h3>Add to chrome</h3>
                <p>Minimum version</p>
                <img src={dottedline} alt='dotted lines ' className='dot'/>
                <button className='btn btn-primary browserboxbutton'>Add & Install Extension</button>
            </div>
            <div className='browserbox col-sm-3 p-5 m-3 mt-4'>
                <img src={firefox} alt='chrome'/>
                <h3>Add to firefox</h3>
                <p>Minimum version</p>
                <img src={dottedline} alt='dotted lines' className='dot'/>
                <button className='btn btn-primary browserboxbutton'>Add & Install Extension</button>
            </div>
            <div className='browserbox col-sm-3 p-5 m-3 mt-5'>
                <img src={opera} alt='chrome'/>
                <h3>Add to opera</h3>
                <p>Minimum version</p>
                <img src={dottedline} alt='dotted lines' className='dot'/>
                <button className='btn btn-primary browserboxbutton'>Add & Install Extension</button>
            </div>

        </div>
    

    </div>
  )
}

export default Fourthsegment