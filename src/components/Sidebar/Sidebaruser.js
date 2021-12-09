import React from 'react'

const Sidebaruser = () => {
    return (
        <div>
            <div className="sidebar-menu margin-2 ">
                <div className="sidebar-menu-item">
                    <i class="fab fa-youtube"></i>
                    <p>Kitaplık</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-history"></i>
                    <p>Geçmiş</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fab fa-youtube"></i>
                    <p>Videolarınız</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-hourglass-end"></i>
                    <p>Daha sonra izle</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-thumbs-up"></i>
                    <p>Beğendiğim videolar</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-chevron-down"></i>
                    <p>Daha fazla göster</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebaruser
