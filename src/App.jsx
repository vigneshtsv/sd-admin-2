import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Class from './components/Class'
import Querry from './Querry'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddUser from "./components/AddUser"
import EditUser from './components/EditUser'
function App() {
let [user,setUser] = useState([
  {
    id:1,
    name:"Vignesh",
    email:"vignesh@gmail.com",
    mobile:"9830284872",
    batch:"B53"
  },
  {
    id:2,
    name:"Hari",
    email:"hari@gmail.com",
    mobile:"9838564792",
    batch:"B53"
  },
  {
    id:3,
    name:"Sabari",
    email:"sabari@gmail.com",
    mobile:"9858528472",
    batch:"B53"
  },
  {
    id:4,
    name:"naganathan",
    email:"naga@gmail.com",
    mobile:"985648472",
    batch:"B53"
  }
])
  return <div id="wrapper">
    
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
        <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}/>
        <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/querry' element={<Querry/>}/>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App