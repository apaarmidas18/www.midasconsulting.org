import Link from 'next/link'
import React from 'react'

const Infocard = ({cardimage, cardalt, cardlink, cardname  }) => {
  return (
    <>
    <div class="card infocard">
  <img src={cardimage} alt={cardalt} />
  <div class="container infocard-container">
  <Link className="cardlink" href={cardlink}>{cardname}</Link>
  </div>
</div>
    
    
    </>
  )
}

export default Infocard