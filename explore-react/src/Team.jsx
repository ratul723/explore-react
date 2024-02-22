import { useState } from "react"

export default function Team(){

    const[count, setCount] = useState(11);

    const handleAdd = () =>{
        const newTeam = count + 1;
        setCount(newTeam)
    }
    const handleRemove =()=>{
        setCount(count-1)
    }
    const teamStyle = {
        border: '2px solid purple' ,
        margin: '15px',
        padding: '15px',
        borderRadius: '5px'
    }
    return(
        <div style={teamStyle}>
            <h2>Players : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
        
    )
}