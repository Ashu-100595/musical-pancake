import React from 'react';
import Videocard from "./videoCard/VideoCard"
import axios from "axios" ; 
import classes from "./App.module.css" 
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import LeftComponent from  "./leftcomponent/leftcomponent" 
import RightComponent from "./rightsideComponent/rightSide" 
import Default from "./defaultComponent/default"
class App extends React.Component {


state = {
  defaultborder : true
}

render(){
 return ( 
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}> 
    <h1 className={classes.MainHeading}>The Video Player</h1> 
    <Switch>
    <Route exact path ="/" render={(props)=>{return(
           <div className={classes.MainParent}> 
           <div className={classes.MainWrapper}> 
           <Default/> 
           <RightComponent props ={props} default =  {this.state.defaultborder}/>
           </div>
           </div>
    )}}/>
   
     <Route exact path="/video/watch/:videoId" render={(props)=>{
             return ( 
              <div className={classes.MainParent}>  
              <div className={classes.MainWrapper}> 
              <LeftComponent props={props}/>
              <RightComponent props ={props}/> 
              </div> 
              </div> 
            )
     }
}/> 
    
    </Switch>   
    </BrowserRouter>
  )
}   
}
export default App;
