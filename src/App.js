import AddTodo from './components/Todos/AddTodo';
import TodoContainer from './components/Todos/TodoContainer';
import TodoFilter from './components/Todos/TodoFilter';
import TodoHeader from './components/Todos/TodoHeader';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {name:"Complete online JavaScript course", status:"completed", id:"1"},
    {name:"Jog around the park 3x", status:"active", id:"2"},
    {name:"10 minutes meditation", status:"active", id:"3"},
    {name:"Read for 1 hour", status:"active", id:"4"},
    {name:"Pick up grocercies", status:"active", id:"5"},
    {name:"Complete Todo App on Frontend Mentor", status:"active", id:"6"}
  ]);

  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filtered,setFiltered] = useState(false);
  const [active, setActive] = useState("all");

  const addTodo = (e) =>{
    let todo = {
      name: e.target.value,status:"active",id:""+ Math.floor(Math.random() * 100)
    }

    setTodos([...todos,todo])
  
  }
  

  const deleteTodo = (id) =>{
    let newTodos = todos.filter(todo => todo.id !== id);
    filtered ? setFilteredTodos(newTodos):setTodos(newTodos);
  }

  const deleteCompleted = () => {
    let newTodos = todos.filter(todo => todo.status !== "completed");
    filtered ? setFilteredTodos(newTodos):setTodos(newTodos);
    
  }

  const markCompleted = (id) => {
    
    let newTodos = todos.map(todo => {
        if(todo.id === id){
          todo.status = "completed";
        }
        return todo;
      });
      
      filtered ? setFilteredTodos(newTodos):setTodos(newTodos);
  }

  const filterTodo = (status) => {
      let newTodos;

      if(status !== "all"){
        newTodos = todos.filter(todo => todo.status === status);
        status === "active" ? setActive("active"): setActive("completed");
        
      }else{
        newTodos = todos;
        setActive("all");
      }
      
     
      
      setFilteredTodos(newTodos);
      setFiltered(true)
  }


  return (
    <div className="container">
      <TodoHeader/>
      <AddTodo addTodo={addTodo}/>
      <TodoContainer todos={filtered ? filteredTodos: todos} deleteTodo = {deleteTodo} deleteCompleted= {deleteCompleted} markCompleted = {markCompleted}/>
      <TodoFilter filterTodo={filterTodo} active={active}/>

      <p className='last'>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
