import { useState } from "react";

function Formlist(props){
    const [form,setToDoList] = useState([{name:"",status:true}]);
    function handleChange(e){
        setToDoList({name:[e.target.value],status:true})
    }
    function submitList(e){
        e.preventDefault();
        props.addList(form)
    }
    function hideDoneList(e){
        e.preventDefault();
        props.hideDoneList();
    }
    return(
        <div style={{backgroundColor:"pink",padding:20}}>
            <h2 style={{textAlign:"center",color:"white",fontSize:18,margin:0}}>My To Do List</h2>
            <form onSubmit={submitList}>
                <input style={{width:350,height:20}} placeholder="Title..." value={form.name} onChange={handleChange} name="todolist"></input>
                <button style={{width:100,height:26,backgroundColor:"gray",border:"none"}} type="submit">Add</button><br></br>
            </form>
            <button style={{width:150,height:26,backgroundColor:"gray",border:"none",marginTop:20,marginLeft:175}} onClick={(e)=>hideDoneList(e)} >Show only Done List</button>
        </div>
    )
}
export default Formlist;