import React from 'react'

const SmallSphere = ({design1,design2}) => {
  return (
    <div  className={` ${design1} absolute  bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom`}>
   
    <div className={` ${design2} `}>
        
    </div>
    </div>
  )
}

export default SmallSphere
