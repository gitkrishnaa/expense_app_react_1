import React from 'react'
import "./main.css"

function Expense_form() {

const submit=(e)=>{
   e.preventDefault();
//    alert("h")
console.log(e.target.value,"form")
}



  return (
    <div className='expense_form'>
<form  onSubmit={submit}>
    
<div className='expense_form_sub_div1'>
    <input type="text" placeholder='Title' />
    <input type="number" placeholder='Amount' />

</div>

<div className='expense_form_sub_div2 expense_form_sub_div1' ><input type="date" placeholder='Date'  />
<button type='submit' className='expense_form_btn1'>Submit</button>
</div>


</form>
</div>
  )
}

export default Expense_form