import React, { useState } from 'react'
import "./main.css"

function Expense_form(props) {
const [title,setTitle]=useState("")
const [amount,setAmount]=useState("")
const [date,setDate]=useState("")
const final_data={
    title,amount,
    date
}


const title_handler=(e)=>{setTitle(e.target.value)}
const amount_handler=(e)=>{ setAmount(e.target.value)}
const date_handler=(e)=>{setDate(e.target.value)}
const submit=(e)=>{
    //avoid reload on submit button click
   e.preventDefault();

//sending date from form_child to parent expense
 props.xyz(final_data);


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