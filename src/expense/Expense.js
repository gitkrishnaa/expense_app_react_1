import { useState } from "react";
import Expense_main from "./Expense_item";
import Expense_form from "./new_expense/expense_form";
import "./Expense.css";
const data = [
    { title: "title", amount: 400, date: "2023-07-18" },
    { title: "title", amount: 500, date: "2023-07-18" },
  ];
function App() {

  const [user, setUser] = useState(data);
  const [data_render, setData_render] = useState(user);
  
  const onGet = (e) => {
    
    setUser((pre_data) => {
      // console.log(pre_data,"pre data")
      setData_render([...pre_data, { title: e.title, amount: e.amount, date: e.date }])
      return [...pre_data, { title: e.title, amount: e.amount, date: e.date }];
    });
    
    // console.log(data_render,"data_render")
    // console.log(x,user,"setUser")

  };

  //filter data 
const filter_function=(e) => {
    // alert(e.target.value);
    const filter_data=user.filter((data)=>{
        if(e.target.value=="All"){    //it is check to return all data of array when user want all
            return true;  
        }
       const year=new Date(data.date).getFullYear()
       console.log(year);
       return year==e.target.value     //compare the year with filter value and list of year present in array
    })
    setData_render(filter_data)
    // console.log(filter_data,"filter_data")

  }
//it check if data is empty then message that no data aviliable else render the data
const is_data_list_empty_or_not=()=>{
    if(data_render.length==0){
        return <h1>no expense data</h1>
    }
    else if(data_render.length==1){
       return  data_render.map((x, index) => {
            return (
               <div>
              <Expense_main
                key={index}
                title={x.title + index}
                amount={x.amount}
                date={x.date}
              />
              <h1>please  add more data</h1>
              </div>
            );
          })
    }
    return data_render.map((x, index) => {
        return (
          <Expense_main
            key={index}
            title={x.title + index}
            amount={x.amount}
            date={x.date}
          />
        );
      })
}
  return (
    <div className="main_div1">
      <div className="main_div2">
        <div>
          <Expense_form xyz={onGet} />
        </div>
        <div>
          <div>
            <select
              onInput={filter_function}
            >
              {/* <select onChange={(e)=>{alert(e.target.value)}}> */}
              <option value="All" key="All">
                All data
              </option>
              <option value="2020" key="2020">
                2020
              </option>
              <option value="2021" key="2021">
                2021
              </option>
              <option value="2022" key="2022">
                2022
              </option>
              <option value="2023" key="2023">
                2023
              </option>
              {/* <option value="2023" key=""></option> */}
            </select>
          </div>
{/* it is chaeck that if data arry list is empty then print "no data aviliable" */}
          {is_data_list_empty_or_not()}
        </div>
      </div>
    </div>
  );
}

export default App;
