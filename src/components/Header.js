import React from 'react'
import logo from "../images/logo.png"
import userimage from "../images/user.jpg"

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="header-logo">
                    <i class="fas fa-bars icon"></i>
                    <a href=""><img src={logo} className="logo"/></a>
                </div>
                <div className="header-search">
                    <input  type="search" placeholder="Ara"></input>
                    <i class="fas fa-search icon"></i>
                    <i class="fas fa-microphone icon"></i>
                </div>
                <div className="header-user">
                <i class="fas fa-camera icon padding"></i>
                <i class="fas fa-th icon padding"></i>
                <i class="far fa-bell icon padding"></i>
                <img className="user-image icon" src={userimage} />
                </div>

            </div>
        </div>
    )
}

export default Header
