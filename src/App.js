
import ExpenseItem from "./components/ExpenseItem"

function App() {

let data=[]
for (let index = 0; index < 10; index++) {
  data[index]={
  title:`product${index} expense`,
  amount:Math.floor(Math.random()*10)*10,
  }
  
}
console.log(data,"7")
  return <div>

  <div>this is krishna</div>
  {/* <ExpenseItem /> */}
 {
  data.map(()=>{
    <ExpenseItem></ExpenseItem>
  })
 }
  </div>
 
}

export default App;
