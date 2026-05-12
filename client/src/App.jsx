import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './Context/AuthContext'
import Landing from './Pages/Landing';
import Dashboard from './Pages/User/Dashboard';
import Nav from './Components/Nav';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const {user} = useAuth();
  return (
    <div>
      {<Toaster/>}
      {
        user == null && <Nav/>  
      }
      <Routes>
        <Route path='/' element={user != null ? <Dashboard/> : <Landing/> }>
        </Route>
      </Routes>

    </div>
  )
}


export default App