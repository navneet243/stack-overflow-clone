import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import Avatar from '../../Components/Avatar/Avatar'
import cake from '../../utils/cake.svg'
import pen from '../../utils/pen.svg'
import './UserProfile.css'

const UserProfile = () => {

  const {id} = useParams()
  const users = useSelector((state) => (state.userReducer))
  const currentUser = useSelector((state) => (state.currentUserReducer)) 
  const currentProfile = users.filter((user) => user._id === id)[0]
  //console.log(currentUser?.result?._id);

  const [Switch ,setSwitch] = useState(false)

  return (
    <div className='home-container-1'>
       <LeftSidebar/>
       <div className="home-container-2">
        <section>
            <div className="user-details-container">
                <div className="user-details">
                    <Avatar backgroundColor='purple' color='white' fontSize='50px' px='35px' py='25px' >
                        {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="user-name">
                        <h2>{currentProfile?.name}</h2>
                        <p> <img src={cake} alt="cake" width={15}/> Member for {moment(currentProfile?.joinedOn).fromNow()}</p>
                    </div>
                </div>
                {
                    currentUser?.result._id === id && (
                        <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                            <img src={pen} alt="pen" width={12}  style={{paddingRight: '5px'}}/> Edit Profile
                        </button>
                    )
                }
            </div>
            <>
                {
                    Switch 
                    ? <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/> 
                    : <ProfileBio currentProfile={currentProfile}/>
                }
            </>
        </section>
       </div>
    </div>
  )
}

export default UserProfile