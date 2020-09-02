import React from 'react'
import './AuthContainer.css'
import {Button} from '@material-ui/core'
import {auth, provider} from '../Fire'
import {actionTypes} from '../context/Reducer'
import {useStateValue} from '../context/StateProvider'
import {useHistory} from 'react-router-dom'

function AuthContainer(props) {
    const [state, dispatch] = useStateValue()
    const history = useHistory()

    const googleSignIn = async () => {
        try {
            const res = await auth.signInWithPopup(provider)
            console.log(res)
            await dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
            history.push('/rooms/:id')
        } catch (error) {
            alert(error.message)
            console.log(error.message)
        }
    }

    return (
        <div className="container">
            <h1 style={{fontSize: 60, fontweight: 'bold'}}>HQ</h1>
            <Button variant="contained" onClick={googleSignIn} style={{backgroundColor: '#6ED42A', borderRadius: 15, color: 'white'}} >
          Sign in
        </Button>
        </div>
    )
}

export default AuthContainer
