
import Card from "./ui/card"
import Expense from "./expense/Expense"

// import Display from "./display/main"
import "./App.css"
function App() {
  const onGet=(e)=>{
console.log(alert(e.title))
  }

  return <div className="main_div1">

  {/* <Expense_form onSubmit={onGet} />
  <Expense_form xyz={onGet}  />

<Expense_main title="milk" amount="654">adcda</Expense_main>
<Expense_main title="sdfcscsd" amount="354"/>
<Expense_main title="sdvds" amount="654"/>
<Expense_main title="dscvsd" amount="750"/> */}
<Expense/>



  </div>
 
}

export default App;
