import React, {useState} from 'react'
import './Input.css'
import {Input, Button} from '@material-ui/core'
import db from '../Fire'
import {timestamp} from '../Fire'
import {useStateValue} from '../context/StateProvider'

function InputField({channelId}) {
    const [text, setText] = useState("")
    const [{user}] = useStateValue()

    const sendText = async (e) => {
        e.preventDefault()

        if(channelId){
            await db.collection('rooms').doc(channelId).collection('messages').add({
                user: user.displayName,
                message: text, 
                timestamp: timestamp,
                userImage: user.photoURL
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
