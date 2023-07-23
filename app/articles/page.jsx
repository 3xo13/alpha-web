import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Articles = () => {
  return (
    <div key={uuidv4()}>Articles</div>
  )
}

export default Articles
