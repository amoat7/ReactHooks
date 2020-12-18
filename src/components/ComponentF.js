import React from 'react'
import {userContext, ChannelContext} from '../App'

function ComponentF() {
    return (
        <div>
        <userContext.Consumer>
        
        {
            user=>{
                return <div>User context value {user}</div>
            }
        }
        </userContext.Consumer>
            
        </div>
    )
}

export default ComponentF
