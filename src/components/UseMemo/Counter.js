import React, {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne +1)
    }

    const incrementTwo =() =>{
        setCounterTwo(counterTwo + 1 )
    }
    const isEven1 = ()=>{
        let i =0
        while(i<2000000000){
            i++
        }
        return counterOne % 2 === 0 
    }
    const isEven = useMemo(isEven1, [counterOne])
    
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven? ' Even': ' Odd'}</span>
            </div>

            <div>
                <button onClick={incrementTwo}>Count Two- {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
