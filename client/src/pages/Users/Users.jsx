import React from 'react'
import { useLocation } from 'react-router-dom'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import UserList from './UserList'
import './Users.css'

const Users = () => {
  const location = useLocation()
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <h1 className='users-h1'>Users</h1>
        {
            location.pathname === '/Users' ? 
            <UserList /> :
            <></>
        }
       </div>
    </div>
  )
}

export default Users