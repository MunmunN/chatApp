import React from 'react';
import './Messages.css';
//React container that will auto scroll to bottom or top 
//if new content is added and viewport is at the bottom
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages=({messages,name})=>(
    <ScrollToBottom className="messages">
        {messages.map((m,i)=><div key={i}><Message message={m} name={name}></Message></div>)}


    </ScrollToBottom>
);
export default Messages;
