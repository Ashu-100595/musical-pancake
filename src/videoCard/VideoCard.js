import React from 'react';
import { Link } from 'react-router-dom';

import classes from './VideoCard.module.css';


const VideoCard = (props) => {
    
const scroll =()=>{
    window.scrollTo({
     top : 0 ,  behavior: 'smooth' 
    })
}

    return( 
        <div className= {classes.VideoCard} onClick ={scroll} style = {props.current ? {border: "4px solid #FAD744"} : null } >
        <Link className={classes.linking} to= {`/video/watch/${props.id}`}>
            <img className={classes.Thumbnail} src={props.thumbnail} alt="Video Thumbnail" />
            <h3 className={classes.Title}>{props.title}</h3>    
        </Link>
        </div>
    );
}

export default VideoCard;