import React from "react"
import classes from "./rightSide.module.css" 
import VideoCard from "../videoCard/VideoCard" 
import axios from "axios" 



class rightSide extends React.Component {

    state = {
        videoList: [],
        toggleclass : true  
    }
    



    componentDidMount() {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
        .then(response => {
            this.setState({videoList: [...response.data]}); 
            console.log(response.data) ; 
        }) 
       
        .catch(err => {
            console.log('Call Failed!!');

        }); 
        
    window.scrollTo(0, 0) ;

    } 



render(){

return( 


    <div className = {classes.RightSideWrapper}> 

    

    {       this.state.videoList.map((item , pos) => { 
          if (pos==0 && this.props.default==true){
            return <VideoCard key={item.id} id={item.id} title={item.title} current ={this.state.toggleclass} thumbnail={item.thumbnail} />

          }

            else if (item.id == this.props.props.match.params.videoId) { 
            return <VideoCard key={item.id} id={item.id} title={item.title} current ={this.state.toggleclass} thumbnail={item.thumbnail} />
        }
            else {
            return <VideoCard key={item.id} id={item.id} title={item.title} current={!this.state.toggleclass} thumbnail={item.thumbnail} />
            } 
    })
    }
</div>
)

}


} 

export default rightSide ; 