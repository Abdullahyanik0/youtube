import React from 'react'
import Sidebarmenu from './Sidebarmenu'
import Sidebarsubscribe from './Sidebarsubscribe'
import Sidebaruser from './Sidebaruser'
import Sidebarpremium from './Sidebarpremium'
import Footer from "../Footer"

const Sidebar = () => {
    return (
        <div className="sidebar-menu-container">
            <Sidebarmenu/>
            <Sidebaruser/>
            <Sidebarsubscribe/>
            <Sidebarpremium/>
            <Footer/>
        </div>
    )
}

export default Sidebar
