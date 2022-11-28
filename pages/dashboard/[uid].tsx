import React from 'react'
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { useAuth } from '../../context/AuthContext';


export default function UserDashboard() {
  const {user, logout} = useAuth()

  return (
    <>
        <Button variant="outlined" onClick={() => logout()} href='/auth/signin'>
            Logout
        </Button>
    </>
  )
}
