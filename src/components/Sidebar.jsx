import React from 'react'
import { 
    FaTh,
    FaThList,
    FaRegChartBar, 
    FaUsers,
    FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function Sidebar({children}) {

  const menuItems = [
    {
      path: "/", 
      name: "Dashboard", 
      icon: <FaTh />
    },
    {
      path: "/user", 
      name: "User", 
      icon: <FaUsers />
    },
    {
      path: "/analytics", 
      name: "Analytic", 
      icon: <FaRegChartBar  />
    },
    {
      path: "/productList", 
      name: "Manage Product", 
      icon: <FaThList />
    }
  ]

  return (
    <div className='container'>
        <div className="sidebar">
            <div className='top-section'>
                <h1 className='logo'>Logo</h1>
                <div  className="bars">
                  <FaBars />
                </div>
                {
                  menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                      <div className="icon">{item.icon}</div>
                      <div className="linkText">{item.name}</div>
                    </NavLink>   
                  ))
                }
            </div>
        </div>
        <main>{children}</main>
    </div>
  )
}

export {Sidebar}