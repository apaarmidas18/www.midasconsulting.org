import Link from 'next/link'
import React from 'react'

const Navlink = ({move, linktitle}) => {
  return (
    <>
    <Link className="navlink" href={move}>{linktitle} ›</Link>
    
    </>
  )
}

export default Navlink