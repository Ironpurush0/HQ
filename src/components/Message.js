import React from "react";
import "./Message.css";
import moment from 'moment'

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <div className="header__section">
        <img src={userImage} alt="user" className="user__image" />
      </div>
      <div className="message__info">
        <h4 className="message__user">{user}</h4>
        <p>{message}</p>
      </div>
  <p>{moment(timestamp).fromNow()}</p>
    </div>
  );
}

export default Message;