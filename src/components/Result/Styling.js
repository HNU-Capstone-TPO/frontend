import { useState } from "react";
import {GiBilledCap, GiArmoredPants, GiConverseShoe } from 'react-icons/gi';
import {FaTshirt} from 'react-icons/fa'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import ManIcon from '@mui/icons-material/Man';
import './Styling.css'
const Styling = () => {

    return(
        <div className="styling-container">
            <div className="styling-avatar-container">
                <Avatar>
                    <GiBilledCap />
                </Avatar>
                <Avatar>
                    <FaTshirt />
                </Avatar>
            </div>
            <ManIcon className="man-icon" sx={{ fontSize: "200px" }}/>
            <div className="styling-avatar-container">
                <Avatar>
                    <GiArmoredPants />
                </Avatar>
                <Avatar>
                    <GiConverseShoe />
                </Avatar>
            </div>
        </div>
    );
};

export default Styling;