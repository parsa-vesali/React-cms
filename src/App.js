import React from 'react'
import routes from './routes'
import './App.css'
import { useRoutes } from "react-router-dom";
import TopBar from './Components/topbar/TopBar';
import SideBar from './Components/sidebar/SideBar';
export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      <TopBar />
      <div className='container'>
        <SideBar />
        {router}
      </div>
    </>
  )
}
