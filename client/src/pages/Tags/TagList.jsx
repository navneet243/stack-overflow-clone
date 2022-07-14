import React from 'react'
import './Tags.css'

const TagList = ({tag}) => {
  return (
    <div className='tag'>
        <h5>{tag.Name}</h5>
        <p>{tag.Desc}</p>
    </div>
  )
}

export default TagList