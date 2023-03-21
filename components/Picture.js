import React from 'react'

const Picture = ({image, alt}) => {
  return (
    <>
        <img style={{width:"100%"}}src={image} alt={alt}/>

    
    
    </>
  )
}

export default Picture