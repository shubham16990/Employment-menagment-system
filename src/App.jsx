import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email,password) => {
if(email === "admin@gmail.com" && password === '123'){
  setUser('admin')
  console.log("Admin")
} else if(email === "employee@gmail.com" && password === '123'){
  setUser("Employee")
  console.log(user)
} else {
alert("Fill your Credientials properly")
}
  }




  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ""}
    {user == 'admin' ? <AdminDashboard/> :  <EmployDashboard />}
    
    </>
  )

}

export default App