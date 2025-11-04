import React from 'react'

const ProfileCard = ({ name = "User name", email, image = "https://placehold.co/600x400/EEE/31343C", age }) => {
  return (
    <div>
      <img src={image} alt="" width={200} style={{ border: "1px solid" }} />
      <p>Name: {name}</p>
      <p>email: {email} </p>
      <p>age: {age}</p>
    </div>
  )
}

export default ProfileCard