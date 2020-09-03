import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from './context/AuthContext'

function ProtectedRoute({component: Component, ...rest}) {
    const {currentUser} = useContext(AuthContext)

    return (
        <Route 
        {...rest}
        render={props => {
            if(currentUser){
                return <Route {...props} />
            } else {
                return <Redirect to={{
                    pathname: '/',
                    state: {
                        from: props.location
                    }
                }} />
            }
                
        }} />        
    )
}

export default ProtectedRoute
