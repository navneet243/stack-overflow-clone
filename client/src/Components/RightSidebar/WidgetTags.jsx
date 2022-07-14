import React from 'react'
import './RightSidebar.css'

const widgetTags = () => {

  const tags = [ 'c' ,'cpp' ,'express' ,'firebase' ,'html' ,'css' ,'nodejs' ,'reactjs' ,'javascript', 'mongodb']
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
          {
            tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))
          }
        </div>
    </div>
  )
}

export default widgetTags