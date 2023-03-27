import React from 'react'
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";

const Collapse = ({children, coll}) => {
  return (
    <>
    <Collapsible trigger={[coll, <BsChevronDown /> ]}>
<ul style={{padding:"0"}}>
{children}  
</ul>
    </Collapsible>
    
    </>
  )
}

export default Collapse