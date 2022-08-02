import React,{useState} from 'react'


const ShowMore= () => {
    const[state, setState] = useState(false)
    return (
       <div className='container-fluid w-25'>
           
           {state &&<MoreDetails />}
           <button className='btn btn-primary' onClick={()=>{setState(!state)}}>More</button>
       </div>
     )
    }

    let MoreDetails =()=>{
        return (
            <div>
             <p className=' justify-content-center'>
            hese classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default variables.
             </p>
             </div>
        )
    } 
    export default ShowMore