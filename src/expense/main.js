import React,{useState} from 'react'
import "./main.css"
function Expense(props) {
const [title,setTitle]=useState(props.title)
 const amount=props.amount;
// const title="hgh"
 const eventHandler=()=>{
    // alert("hi")
    setTitle("deleted itemx")
}
  return (
    <div className='div1'>
<div className='sub_div1'>{title}</div>
<div className='sub_div2'>{amount}</div>
<button onClick={eventHandler}>delete</button>

    </div>
  )
}

export default Expense