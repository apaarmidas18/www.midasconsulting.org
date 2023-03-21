import React from 'react'
import Collapsible from 'react-collapsible';

const Collapse = ({children, coll}) => {
  return (
    <>
    <Collapsible trigger={coll}>
<ul style={{padding:"0"}}>
{children}  
</ul>
    </Collapsible>
    
    </>
  )
}

export default Collapse