
import Card from "./ui/card"
import Expense_main from "./expense/main";
import Expense_form from "./expense/new_expense/expense_form"
// import Display from "./display/main"
import "./App.css"
function App() {
  const onGet=(e)=>{
console.log(e,"parent to child")
  }

  return <div className="main_div1">
<div className="main_div2">
  <Expense_form onSubmit={onGet} />
<Expense_main title="milk" amount="654">adcda</Expense_main>
<Expense_main title="sdfcscsd" amount="354"/>
<Expense_main title="sdvds" amount="654"/>
<Expense_main title="dscvsd" amount="750"/>

</div>


  </div>
 
}

export default App;
