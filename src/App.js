import logo from './logo.svg';
import './App.css';
import react, { useState, useRef } from 'react';
import Formlist from './component/formlist';
import Showlist from './component/showlist';
function App() {
  const [toDoList, setToDoList] = useState([
    {name: "Do Codegym Homework",status:true},
  ])
  const [doDoneList, setdoDoneList] =useState([{}]) 
  const [onOff, setOnOff] = useState("on");
  function submitList(form){
    const toDoListNew = [...toDoList];
    toDoListNew.unshift(form);
    setToDoList(toDoListNew);
  }
  function doneList(item){
    const toDoListNew = [...toDoList];
    const index = toDoListNew.findIndex(item1=>item1.name===item.name);
    toDoListNew[index] = {...item,status:(item.status?false:true)};
    setToDoList(toDoListNew);
  }

  function hideDoneList(){
    const toDoneListNew = [...toDoList];
    setdoDoneList(toDoneListNew.filter(item=>item.status==false));
    (onOff == "on")?setOnOff("off"):setOnOff("on")
  }

  return (
    <div style={{width:500,margin:"auto",padding:10}}>
      <Formlist addList={submitList} hideDoneList={hideDoneList}/>
      {(onOff=="on")?(<Showlist toDoList={toDoList} doneList={doneList}/>):( <Showlist toDoList={doDoneList} doneList={doneList}/>)}
    </div>
  );
}

export default App;
