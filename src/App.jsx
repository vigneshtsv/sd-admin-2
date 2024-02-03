import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Class from './components/Class'
import Querry from './Querry'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddUser from "./components/AddUser"
import EditUser from './components/EditUser'
import UserContextComponent from './utils/UserContextComponent'
import DashboardContextComponent from './utils/DashboardContextComponent'
import UseRef from './components/Hooks/UseRef'
import UseReducer from './components/Hooks/UseReducer'

function App() {

  return <div id="wrapper">
    
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={
        <UserContextComponent>
        <DashboardContextComponent>
          <Dashboard/>
        </DashboardContextComponent>
        </UserContextComponent>}/>
        <Route path='/add-user' element={<AddUser />}/>
        <Route path='/edit-user/:id' element={<EditUser />}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/querry' element={<Querry/>}/>
        <Route path='/useref' element={<UseRef/>}/>
        <Route path='/usereducer' element={<UseReducer/>}/>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App