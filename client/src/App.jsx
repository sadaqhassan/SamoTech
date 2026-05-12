import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './Context/AuthContext'
import Dashboard from './Pages/User/Dashboard';
import Nav from './Components/Nav';
import { Toaster } from 'react-hot-toast';
import Princing from './Pages/FinanceBackage/Pricing';

export const App = () => {
  const {user} = useAuth();
  return (
    <div>
      <Princing/>
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