import React from "react";
import "./feed.css"

class Feed extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title : this.props.feed.title,
            text : this.props.feed.text,
            src: this.props.feed.img
        }
    }

    render(){
        return(
            <div className="feed">
                <h2>{this.state.title}</h2>
                <img src={this.state.src}/>
                <p>{this.state.text}</p>
                
            </div>
        )
    }
}

export default Feed;