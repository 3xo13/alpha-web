import React from 'react'
import { v4 as uuidv4 } from 'uuid';

 const Contact = () => {
  return (
    <div key={uuidv4()}>Contact</div>
  )
}

export default Contact
