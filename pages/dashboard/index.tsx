import React, { useEffect, useState } from "react";
import PatientDashboard from "../../components/organisms/dashboardLayout/PatientDashboard";
import StaffDashboard from "../../components/organisms/dashboardLayout/StaffDashboard";
import { useAuth } from "../../context/AuthContext";


export default function Dashboard() {

  const { user } = useAuth()

  if((user !== undefined || user !== null) && user?.email === 'staff@rajahtupas.com'){
    return (
      <StaffDashboard />
    )
  }
  
  return (
    <PatientDashboard />
  )
  
}
