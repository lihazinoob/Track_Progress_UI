import React from 'react'
import { useUserInfoContext } from '../context/user_info_context'
import { Navigate, Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  const {token} = useUserInfoContext();
  if(!token)
  {
    return <Navigate to={"/landing"}/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
