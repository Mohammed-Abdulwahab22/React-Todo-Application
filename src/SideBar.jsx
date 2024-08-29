import React, { useContext } from 'react'
import './index.css'
import MyContext from './MyContext'

export default function SideBar() {
 const {showContentView, showSettingsView} = useContext(MyContext)

  return (
    <div className="sidebar">
       <button className="sidebar-button"onClick={showContentView}>DashBoard</button>
       <button className="sidebar-button" onClick={showSettingsView}>About</button>
  </div>
  )
}
