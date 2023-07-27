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



  return (
    <div className="main_div1">
      <div className="main_div2">
        <div>
          <Expense_form xyz={onGet} />
        </div>
        <div>
          <div>
            <select
              onInput={(e) => {
                // alert(e.target.value);
                const filter_data=user.filter((data)=>{
                    if(e.target.value=="All"){
                        return true;
                    }
                   const year=new Date(data.date).getFullYear()
                   console.log(year);
                   return year==e.target.value
                })
                setData_render(filter_data)
                // console.log(filter_data,"filter_data")

              }}
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

          {data_render.map((x, index) => {
            return (
              <Expense_main
                key={index}
                title={x.title + index}
                amount={x.amount}
                date={x.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
