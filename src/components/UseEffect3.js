import React, {useState, useEffect} from 'react'
import UseEffect2 from './UseEffect2'

function UseEffect3() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toogle dispaly</button>
            {display && <UseEffect2></UseEffect2>}
        </div>
    )
}

export default UseEffect3
