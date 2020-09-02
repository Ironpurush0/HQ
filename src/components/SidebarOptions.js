import React from "react";
import "./SidebarOptions.css";
import { useHistory } from "react-router-dom";
import db from '../Fire';
import {Avatar} from '@material-ui/core'


function SidebarOptions({ title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/rooms/${id}`);
    } else {
      history.push("title");
    }
  };

  const addChannel = () => {
    const channelName = prompt("Add a channel");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">
              {!addChannelOption && (
                  <Avatar alt="#" src="#" />
              ) } 
            </span>
          {title}
        </h3>
    </div>
  );
}

export default SidebarOptions;