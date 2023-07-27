import React,{useState} from 'react'
import "./main.css"
function Expense(props) {
const [title,setTitle]=useState(props.title)
// console.log(props)
 const amount=props.amount;
 const date=props.date
// const title="hgh"

const date_extract=(date)=>{
  const date_obj=new Date(date);
  const date_object={};
  date_object.day=date_obj.getDate();
  date_object.month=date_obj.toLocaleString('default', { month: 'short' });
  date_object.year=date_obj.getFullYear()
  // console.log(date_object)
  return date_object;
}
const date_in_part=date_extract(date)
// console.log(date_in_part)

 const eventHandler=()=>{
    // alert("hi")
    setTitle("deleted")
    console.log(props)
}
// f2f98f299c343b12b4f1777f2e0b289182fe7b3e
// f2f98f299c343b12b4f1777f2e0b289182fe7b3e
  return (
    <div className='div1'>
<div className='sub_div3'>

<div>{date_in_part.day}</div>

<div>
<div>{date_in_part.month}</div>
<div>{date_in_part.year}</div>
</div>


</div>
<div className='sub_div1'>{title}</div>
<div className='sub_div2'>{amount}</div>
<button onClick={eventHandler}>delete</button>

    </div>
  )
}

export default Expense