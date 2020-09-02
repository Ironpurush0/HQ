import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useStateValue} from './context/StateProvider'

function ProtectedRoute({component: Component, ...rest}) {
    const [{user}] = useStateValue()
    return (
        <Route 
        {...rest}
        render={props => {
            if(!user) {
                return <Redirect to={{
                    pathname: '/',
                    state: {
                        from: props.location
                    }
                }} />
            } else {
                return <Component {...props} />
            }
        }} />        
    )
}

export default ProtectedRoute
