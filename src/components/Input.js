import React, {useState, useContext} from 'react'
import './Input.css'
import {Input, Button} from '@material-ui/core'
import db from '../Fire'
import {timestamp} from '../Fire'
import {useStateValue} from '../context/StateProvider'
import { AuthContext } from '../context/AuthContext'

function InputField({channelId}) {
    const [text, setText] = useState("")
    const {currentUser} = useContext(AuthContext)

    const sendText = async (e) => {
        e.preventDefault()

        if(channelId){
            await db.collection('rooms').doc(channelId).collection('messages').add({
                user: currentUser.displayName,
                message: text, 
                timestamp: timestamp,
                userImage: currentUser.photoURL
            })
        }
        setText("")
    }
    return (
        <div className="input__container">
            <Input 
                        className="outlined__basic" 
                        fullWidth={true} 
                        placeholder="Message..." 
                        variant="outlined"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <Button 
                    variant="outlined" 
                    color="primary" 
                    className="button"
                    onClick={sendText}>Send</Button>
        </div>
    )
}

export default InputField
