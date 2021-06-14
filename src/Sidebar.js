import React from 'react'
import './sidebar.css'
import {Avatar} from '@material-ui/core'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="siderbar_top">
                <img src="https://images.unsplash.com/photo-1623425654244-a91e8f48bd63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="abs" />
                <Avatar className="sidebar_avatar"/>
                <h2>Mrutunjay</h2>
                <h4>M@111.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed</p>
                    <p className="sidebar_statnumber">2540 </p>
                </div>
                <div className="sidebar_stat">
                     <p>view on Post</p>
                    <p className="sidebar_statnumber">100 </p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}
