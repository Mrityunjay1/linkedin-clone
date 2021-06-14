import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import  './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header() {
    return (
        <div className="header">

            <div className="header_left">
                <img src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1623672038~hmac=46723bf29d75030c1d176d7f38ce1d22" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
                </div>
            
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Message" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png" title="Me" />
                
            </div>
        </div>
    );
}
