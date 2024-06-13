import "./Main.css"


import React from 'react'

export const Main = () => {
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }
  return (
   <div className="main-container">
    <nav className="navbar">
        <h1>Pdf Viewer</h1>
        <button onClick={handleLogout} className="main-container-button"></button>
    </nav>
   </div>
  )
}
