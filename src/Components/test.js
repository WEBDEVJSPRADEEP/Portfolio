import { useState } from "react"

function Test(){
    const [state,setState] = useState('')
    const [con,setCon] = useState(false)
    const [newData,setNewData] = useState([])
    const [loader,setLoader] = useState(true)
    const [position,setPosition] = useState({
        x: '0',
        y:'0'
    })
    const handleKey =(e)=>{
        setState(e.target.value)
    }
    const keyPress =(e)=>{
        let key = e.key
        if(key === 'Delete'){
            setState('')
        }
        if(key === 'Enter'){
            setNewData([...newData, state])
            setState('')
        }

    }
    const context =(e)=>{
        e.preventDefault()
        setPosition({
            x:e.clientX,
            y:e.clientY
        })
        setCon(true)
    }
    return(
        <div style={{padding:'50px',width:'100%',height:'100vh'}} onContextMenu={context} onClick={()=> setCon(false)}>
            {con === true ? <p style={{position:'absolute',left:position.x, top:position.y,border:'2px solid black',borderRadius:'100px'}}>Context menu</p> : null}
            <input type="text" onChange={handleKey} onKeyUp={keyPress} value={state}/>
            {loader === true ? <h2>Loading</h2> : <>
            {newData.length === 0 ? <h1>NO data yet</h1> : <ul>{newData.map((item,index)=>{
                return(
                    <li>{item}</li>
                )
            })}</ul>}
            </>
            }
        </div>
    )
}

export default Test
