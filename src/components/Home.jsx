import React from 'react'
import { Outlet } from 'react-router'
import Nav from './nav'

const Home = () => {
  return (
    <div>
        <Nav />
        <Outlet />
    </div>
  )
}

export default Home;
