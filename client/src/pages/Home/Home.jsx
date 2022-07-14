import React from 'react'
import '../../App.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../Components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Home