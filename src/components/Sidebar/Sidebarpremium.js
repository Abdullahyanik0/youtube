import React from 'react'

const Sidebarpremium = () => {
    return (
        <div>
            <div className="sidebar-menu margin margin-2">
                <div className="sidebar-menu-item">
                    <i class="fas fa-home"></i>
                    <p>Youtube premium</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-cog"></i>
                    <p>Ayarlar</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-flag"></i>
                    <p>İçerik bildirme geçmişi</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-question-circle"></i>
                    <p>Yardım</p>
                </div>
                <div className="sidebar-menu-item">
                    <i class="fas fa-exclamation"></i>
                    <p>Geri bildirim gönder</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebarpremium
