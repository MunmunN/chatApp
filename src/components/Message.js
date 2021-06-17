import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message=({message:{text,user},name})=>{
    var isSentByCurrentUser=false;

    const lowercaseName=name.trim().toLowerCase();

    if(user==lowercaseName){
        isSentByCurrentUser=true;
    }

    //write html
    return(
        isSentByCurrentUser
        //if sent by same user, execute the following
        ?(
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{lowercaseName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>

                </div>


            </div>
        )
        //if sent by other user, execute the following
        :(

            <div className="messageContainer justifyStart">
                
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>

                </div>
                <p className="sentText pl-10">{user}</p>


            </div>
        )

    );
}

export default Message;