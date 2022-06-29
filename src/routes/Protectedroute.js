import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import useAuth from '../hooks/useAuth'


export default function Protectedroute() {
  const auth=useAuth();

  return auth  ? <Outlet />:<Navigate to ="login" />
}





