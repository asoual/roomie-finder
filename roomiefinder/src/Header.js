import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import logo from './Logo.jpg';
import IconButton from '@mui/material/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header( {backButton}) {
    const history =useHistory();
    return (
        <div className ="header">
            {backButton ? (
                <IconButton onClick ={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize ="large" className="header__icon" />
                </IconButton>
            ) : (
                <Link to="/profile">
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" /> 
                </IconButton>   
            </Link>
            )
        }
            <Link to="/">
                <img
                    className="header__logo" 
                    src={logo} 
                    alt="roomie finder" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}
export default Header;