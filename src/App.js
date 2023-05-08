
import './App.css'
import {useState} from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'




function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Plan your day..... 🌝  </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((task)=>{
          return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodos(toDos.filter(obj=>{
                if(obj.id===task.id){
                  obj.status=e.target.checked
                }

                return obj
              }))
            }} value={task.status} type="checkbox" name="" id="" />
            <p>{task.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>{
              setTodos(toDos.filter(obj2=>{
                if(obj2.id !== task.id){
                  console.log(obj2);
                  return obj2
                }
                return null
              }))
            }} className="fas fa-times"></i>
          </div>
        </div>)
        })}
        <div style={{marginTop:20}}>
        <h2>completed tasks</h2>
        
        {
          toDos.map((task)=>{
            if(task.status){
              return(<div className="todoC">
              <div className="left ">
                <p style={{marginLeft:10}}>{task.text}</p>
              </div>
            </div>)
            }
            return null
          })
        }
        <h1>gasduysag</h1>
        <Router>
          <Routes>
          <Route path='/test' />
          </Routes>
        </Router>
        
        </div>
      </div>
    </div>
  );
}

export default App;
