import Link from 'next/link'
import React from 'react'

const Smallsquare = (props) => {
  return (
    <>

    <div className="col-md-6 smallsquare" style={{backgroundColor: props.color}}>
    <Link href={props.href}>{props.title} ›</Link>
    </div>
    </>
  )
}

export default Smallsquare