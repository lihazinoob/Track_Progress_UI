import React from 'react'
import { useUserInfoContext } from '../context/user_info_context'
import { Outlet } from 'react-router-dom';
const GuestLayout = () => {
  const {token} = useUserInfoContext();
  if(token)
  {
    
  }
  

  return (
    <div>
      This is Guest Layout
      <Outlet/>
    </div>
  )
}

export default GuestLayout
