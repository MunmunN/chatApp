import React, {Component} from 'react';
//querystring will help us getting parameters from URL
import queryString from 'query-string';
//make connection to the server as client
import io from 'socket.io-client';

//code for importing Chat.css
import './Chat.css';
//code for importing InfoBar.js
import InfoBar from './InfoBar';
//code for importing Messages.js
import Messages from './Messages';

var socket;


class Chat extends Component{
    constructor(props){
        super(props);
        this.state={
            message:'',
            messages:[]
        }
    }
    componentDidMount(){
        //making connection with server index.js
        socket=io('https://reactchatapplicationmunmun.herokuapp.com/');
        //extracting name and room from URL
        const {name,room}=(queryString.parse(this.props.location.search));
        //broadcasting join message with name and room
        socket.emit('join',{name,room},()=>{

        });
        //listener for admin generated msg
        socket.on('message',message=>
        this.setMsgs(message)//call setMsgs function
        
        )

    }

    //function for adding new msg to messages array

    setMsgs=(m)=>{
        this.setState({messages:[...this.state.messages,m]})
        console.log(this.state.messages);

    }

    //function for changing message
    setMessage=(m)=>{
        this.setState({message:m});
    }

    //function for setting message empty
    setMessageEmpty=()=>{
        this.setState({message:''});
    }

    //Broadcasting user generated messages
    sendMessage=(event)=>{
        event.preventDefault();//to stop refreshing page on keypress
        if(this.state.message){
            socket.emit('sendMessage',this.state.message,this.setMessageEmpty);
        }
    }
    render(){
        
        
        //console.log(socket);//connect to server
        //socket.emit();//sending or broadcasting a message to theserver
        //
        //Getting room and name from the URL
        const {name,room}=(queryString.parse(this.props.location.search));
        return(
            <div className="outerContainer">
                <div className="container">
                    <InfoBar room={room}/>
                    <Messages messages={this.state.messages} name={name}>

                    </Messages>




                    <form className="form">
                        <input className="input"
                        type="text"
                        placeholder="Type a message.."
                        value={this.state.message}
                        onChange={(event)=>this.setMessage(event.target.value)}
                        onKeyPress={event=>event.key==='Enter'?this.sendMessage(event):null}>
                        </input>
                        <button className="sendButton" onClick={event=>this.sendMessage(event)}>
                            Send

                        </button>
                    </form>




                    

                </div>

            </div>
            
        );
    }
}

export default Chat;
