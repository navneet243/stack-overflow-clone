import React from 'react'
import './RightSidebar.css'
import msg from '../../utils/msg.svg'
import pen from '../../utils/pen.svg'
import blacklogo from '../../utils/blacklogo.png'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='12' />
                <p>How Stack Overflow is leveling up its unit testing game</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='12' />
                <p>Developers vs the difficulty bomb (Ep. 459)</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={msg} alt="msg" width='12' />
                <p>How Stack Overflow is leveling up its unit testing game</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={msg} alt="msg" width='12'/>
                <p>Trending: A new answer sorting option for the problem</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="blacklogo" width='12'/>
                <p>Developers vs the difficulty bomb (Ep. 459)</p>
            </div>
        </div>
    </div>
  )
}

export default Widget