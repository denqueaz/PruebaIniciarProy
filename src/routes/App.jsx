import React from 'react'
import { Routes } from 'react-router-dom'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import RecoveryPassword from '../containers/RecoveryPassword'
import '../styles/global.css'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Layout>
        
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/recovery-password" element={ <RecoveryPassword /> } />  
        <Route element={ <NotFound /> } />
      </Layout>
    </Routes>
    </BrowserRouter>
  )
}

export default App