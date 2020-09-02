import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import db from '../Fire'
import Icon from '@material-ui/core/Icon'

function Sidebar() {
    const [channels, setChannel] = useState([])

    useEffect(() => {
        db.collection('rooms').onSnapshot(snap => {
            setChannel(
                snap.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        })
    }, [])

    return (
        <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          {/* <p>Splash Team</p> */}
          <SidebarOptions addChannelOption title="Add channel" />
        </div>
      </div>
      {channels.map(channel => (
          <SidebarOptions title={channel.name} key={channel.id} id={channel.id} />
      ))}
      </div>
    )
}

export default Sidebar
