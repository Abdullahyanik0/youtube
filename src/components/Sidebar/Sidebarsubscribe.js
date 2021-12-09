import React from 'react'
import sidebarimage from "./user.jpg"
import sidebarimage2 from "./user-2.jpg"

const Sidebarsubscribe = () => {
    return (
        <div>
            <div className="sidebar-menu margin margin-2">
            <h2 className="subscribe">ABONELİKLER</h2>
                <div className="sidebar-menu-item">
                    <img className="sidebar-image" src={sidebarimage} />
                    <p className="sidebar-image-item">Arin Yazılım</p>
                </div>
                <div className="sidebar-menu-item">
                    <img className="sidebar-image" src={sidebarimage2} />
                    <p className="sidebar-image-item">Yazılım Bilimi</p>
                </div>
                <div className="sidebar-menu-item">
                    <img className="sidebar-image" src={sidebarimage} />
                    <p className="sidebar-image-item">Yakın Kampüs</p>
                </div>
                <div className="sidebar-menu-item">
                    <img className="sidebar-image" src={sidebarimage2} />
                    <p className="sidebar-image-item">PROTOTURK</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebarsubscribe
