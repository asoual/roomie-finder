import React from 'react'
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
    return (
        <div className ="swipeButtons">
            <IconButton className="replay_button">
                <ReplayIcon fontSize = "large"/>
            </IconButton>
            <IconButton className="close_button">
                <CloseIcon fontSize = "large"/>
            </IconButton>
            <IconButton className ="star_button">
                <StarIcon fontSize = "large"/>
            </IconButton>
            <IconButton className ="favorite_button">
                <FavoriteIcon fontSize = "large"/>
            </IconButton>
            <IconButton className ="flash_button">
                <FlashOnIcon fontSize = "large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
