import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
        <div>
            {
                currentProfile?.tags.length !== 0  ? (
                    <>
                        <h4>Tags watched</h4>
                        {
                            currentProfile?.tags.map((tag) => (
                                <p style={{fontSize:'15px'}} key={tag}>{tag}</p>
                            ))
                        }
                    </>
                ) : (
                    <p>0 tags watched</p>
                )
            }
        </div>
        <div>
            {
                currentProfile?.about ? (
                    <>
                        <h4>About</h4>
                        <p style={{fontSize:'15px'}}>{currentProfile?.about}</p>
                    </>
                ) : (
                    <p>No bio found</p>
                )
            }
        </div>
    </div>
  )
}

export default ProfileBio