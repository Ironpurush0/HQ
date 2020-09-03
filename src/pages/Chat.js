import React, {useState, useEffect, useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import './Chat.css'
import Header from '../components/Header'
import InputField from '../components/Input'
import Sidebar from '../components/Sidebar'
import {Avatar, Button} from '@material-ui/core'

import Message from '../components/Message'

import db, {auth} from '../Fire'
import { AuthContext } from '../context/AuthContext'

function Chat() {
    const history = useHistory()
    const {currentUser} = useContext(AuthContext)
    const {id} = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
   

    useEffect(() => {
        if(id){
            db.collection('rooms')
            .doc(id)
            .onSnapshot(snap => setRoomDetails(snap.data()))
        }

        db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snap => setRoomMessages(snap.docs.map(doc => doc.data())))
    }, [id])

    const logout = async () => {
       const res = await auth.signOut()
        console.log(res)
        history.push('/')
    }


    console.log(roomDetails)
    console.log("MESSAGES>>", roomMessages)

    return (
        <div className="chat__container">
            <Header />
            <div className="parts__container">
                <div className="rooms__container">
                    <Sidebar />
                </div>
                <div className="messages__container">
                    <div className="chat__header">
                        <p className="header__text">
                            <Avatar alt="#" src="#" />
                            <span className="roomDetails">{roomDetails?.name.toUpperCase()}</span>
                        </p>
                    </div>
                    <div className="messages__area">
                        {roomMessages.map(text => (
                            <Message key={text.message} message={text.message} user={text.user} userImage={text.userImage} timestamp={text.timestamp} />
                        ))}
                    </div>
                    <div className="input__field">
                    <InputField channelId={id} />
                    </div>
                </div>
                <div className="profile__container">
                    <div className="profile__header">
                        <Avatar alt="#" src={currentUser?.photoURL} style={{width: 100, height: 100, marginLeft: 25}} />
                        <h1>{currentUser?.displayName}</h1>
                        <p>{currentUser?.email}</p>
                    </div>
                    <Button onClick={logout} style={{marginBottom: 20, backgroundColor: '#6AD427', borderRadius: 20, padding: 10, color: 'white'}}>Logout</Button>           
                </div>
            </div>
        </div>
    )
}

export default Chat
