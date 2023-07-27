
import { useState } from "react";
import Expense_main from "./Expense_item";
import Expense_form from "./new_expense/expense_form"
// import Display from "./display/main"
function App() {
    const data=[
        {title:"title",amount:400,date:"2023-07-18"},
        {title:"title",amount:500,date:"2023-07-18"},
        ]
const [user,setUser]=useState(data)
 



const onGet=(e)=>{
    // console.log(alert(e.title));
    // data.push({title:e.title,amount:e.amount})
    // console.log(data)
    // setUser_data( {title:e.title,amount:e.amount} )
    setUser((pre_data)=>{
        // data.push({title:e.title,amount:e.amount})
        // console.log(pre_data,"pre data")
return  [...pre_data,{title:e.title,amount:e.amount,date:e.date}]

    // {title:e.title,amount:e.amount},
    // {title:"title",amount:789},
    
    })
}

  return <div className="main_div1">
<div className="main_div2">
  {/* <Expense_form onSubmit={onGet} /> */}
  <Expense_form xyz={onGet}  />

{/* <Expense_main title="milk" amount="654">adcda</Expense_main>
<Expense_main title="sdfcscsd" amount="354"/>
<Expense_main title="sdvds" amount="654"/>
<Expense_main title="dscvsd" amount="750"/> */}



{user.map((x,index)=>{
   return <Expense_main
    key={index}
    title={x.title+index}
    amount={x.amount}
    date={x.date}
     />

})}
</div>


  </div>
 
}

export default App;
