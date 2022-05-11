import React from 'react'
import image from './arrowhouse.png'

const ArrowHouse = ({...props}) => {
  return (
    <div {...props}>
        <img 
        width='100%'        
        src={image} 
        alt='ArrowHouse Image'
        />
    </div>
  )
}

export default ArrowHouse