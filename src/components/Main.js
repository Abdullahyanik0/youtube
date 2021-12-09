import React from 'react'
import Mainmenu from './Mainmenu'
import { getInvoices } from '../data'

let videos = getInvoices();

const Main = () => {
    return (
        <>
            <Mainmenu />
            <div className="card-container">
                {videos.map(video => (
                        <div className="card">
                            <div className="video-image"><img src={video.image} /></div>
                            <div className="video-user-image"><img src={video.image} /></div>
                            <div className="video-info">
                                <div className="video-title">{video.title}</div>
                                <div className="video-user">{video.user}</div>
                                <div className="video-views">{video.views}</div>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}

export default Main
