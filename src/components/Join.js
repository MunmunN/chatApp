import React, {Component} from 'react';
//import link for connecting the button to chat component
import {Link} from 'react-router-dom';
import chatImage from './chatImage.png';
//import stylesheet
import './Join.css';

class Join extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            room:''
        }
    }
    //function to store name as state variable
    assignName=event=>{
        this.setState({name:event.target.value});
    }
    //function to store room as state variable
    assignRoom=event=>{
        this.setState({room:event.target.value});
    }

    render(){
        return(
            <div className="joinOuterContainer">
                <div className="innerOuterContainer">
                    <img src={chatImage} width="100px" height="100px"></img>

                    <h1 className="heading">Chat Application using React and NodeJS</h1>
                    <h1 className="heading">Join</h1>
                    <div><input placeholder="Enter your name" className="JoinInput" onChange={this.assignName}></input></div>
                    <div><input placeholder="Enter your room" className="JoinInput" onChange={this.assignRoom}></input></div>
                    {/* create a link to chat page. if any input box value is missing diable the link */}
                    <Link to={`/chat?name=${this.state.name}&room=${this.state.room}`} 
                    onClick={event=>(!this.state.name || !this.state.room)?event.preventDefault():null}> 
                        <button className="button" type="submit">Sign in</button>
                    </Link>

                </div>


            </div>
        );
    }
}

export default Join;

