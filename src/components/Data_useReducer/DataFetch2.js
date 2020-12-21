import React, {useReducer, useEffect} from 'react'
import axios from 'axios'


const initialState ={
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action)=>{

    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return{
                loading: false,
                post: {},
                error: 'SOMETHING WENT WRONG'
            }
        default:
            return state
    }

}


function DataFetch2() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(resp=>{
            dispatch({type:'FETCH_SUCCESS', payload:resp.data})
        })
        .catch(err=>{
            dispatch({type: 'FETCH_ERROR'})
        })
       
    }, [])

    return (
        <div>
            {state.loading? 'Loading': state.post.title}
            {state.error? state.error: null}
        </div>
    )
}

export default DataFetch2
