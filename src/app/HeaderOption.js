import React from 'react'
import './HeaderOption.css';
import {Avatar} from "@material-ui/core";

export default function HeaderOption({Icon,title,avatar}) {
    return (
        <div className="header-option">
            {Icon && <Icon className="headerOption_icon" />}
            {avatar &&
             <Avatar className="headerOption_icon" src={avatar} />}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}
