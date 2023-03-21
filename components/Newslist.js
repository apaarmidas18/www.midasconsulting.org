import React from 'react'

const Newslist = ({news, date}) => {
  return (
    <>
    <div className='news-live'>
<h4>{news}</h4>
<span>{date}</span>
    </div>
    </>
  )
}

export default Newslist