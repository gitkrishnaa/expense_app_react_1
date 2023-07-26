import React, { useState } from 'react'
import "./main.css"

function Expense_form(props) {
const [title,setTitle]=useState("")
const [amount,setAmount]=useState("")
const [date,setDate]=useState("")
const final_data={
    title,amount,date
}


const title_handler=(e)=>{
// alert(e.target.value)
setTitle(e.target.value)
// setTitle((x)=>{
// console.log("setTitle(e)=e-",x)
// return {...final_data,title:e.target.value,}
// })

}
const amount_handler=(e)=>{
    // alert(e.target.value)
    setAmount(e.target.value)
}
const date_handler=(e)=>{
    // alert(e.target.value)
    setDate(e.target.value)
}
const submit=(e)=>{
   e.preventDefault();

   props.onSubmit(final_data)
//    alert("h")
// console.log(e.target.value,"form")
console.log("form data")

console.log(final_data)
setTitle("")
setAmount("")
setDate("")
}



  return (
    <div className='expense_form'>
<form  onSubmit={submit}>
    
<div className='expense_form_sub_div1'>
    <input type="text" placeholder='Title' onChange={title_handler}  value={title} />
    <input type="number" onChange={amount_handler} placeholder='Amount'  value={amount}   />

</div>

<div className='expense_form_sub_div2 expense_form_sub_div1' >
    <input type="date" onChange={date_handler} placeholder='Date' value={date}   />
<button type='submit' className='expense_form_btn1'>Submit</button>
</div>


</form>
</div>
  )
}

export default Expense_form