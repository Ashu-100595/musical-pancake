import React from 'react'; 
import axios from "axios" ; 
import classes  from "./default.module.css"
class LeftSide1 extends React.Component {

 

render(){

return(
  
               <div className= {classes.playerWrapper}>
                <iframe className ={classes.videoplayer} src={`https://player.vimeo.com/video/190062231`}  frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" __idm_id__="514841601"></iframe>
                <div>
                <div className={classes.videoactions}>
                <p><span className={classes.viewscount}>22.5k</span> views</p>
                 <div className={classes.parent}>
                <i class="far fa-heart" aria-hidden="true"></i>
                <i class="far fa-comment-alt" aria-hidden="true"></i>
                <i class="far fa-bookmark" aria-hidden="true"></i>
                </div>
                </div>
                <h3 className={classes.videotitle}>Croissants | Flour and Stone</h3>
                <p className={classes.videodescription}>There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.</p>
                </div>
                </div> 
            )
        


 





}
 }

 

export default LeftSide1 ;  