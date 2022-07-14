import AddTodo from './components/Todos/AddTodo';
import TodoContainer from './components/Todos/TodoContainer';
import TodoFilter from './components/Todos/TodoFilter';
import TodoHeader from './components/Todos/TodoHeader';
import { useEffect, useState } from 'react'; 

function App() {

  const [todos, setTodos] = useState([
    {
      name:"Complete online JavaScript course",
      isDone:true,
      id:1
    },
    {
      name:"Jog around the park 3x",
      isDone:false,
      id:2
    },
    {
      name:"10 minutes meditation",
      isDone:false,
      id:3
    },
    {
      name:"Read for 1 hour",
      isDone:false,
      id:4
    },
    {
      name:"Pick up grocercies",
      isDone:false,
      id:5
    },
    {
      name:"Complete Todo App on Frontend Mentor",
      isDone:false,
      id:6
    }
  ]);


  const [filter, setFilter] = useState("all");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(()=>{
    isDarkTheme ? document.body.style.background = "url('/src/assets/images/bg-mobile-light.jpg') #fff;" : document.body.style.background = "";

  },[isDarkTheme])


 

  const addTodo = (todo) =>{

    setTodos([...todos,todo])
  
  }
  

  const deleteTodo = (id) =>{
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  const deleteCompleted = () => {
    setTodos([...todos].filter(todo => todo.isDone !== true));
    
  }

  const markCompleted = (id) => {
    
    let newTodos = todos.map(todo => {
        if(todo.id === id){
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      
      setTodos(newTodos);
  }

  const filterTodo = () =>{

    if(filter === "all"){
      return todos;
    }else if(filter === "active"){
      
      return todos.filter(todo => todo.isDone === false);

    }else{
      return todos.filter(todo => todo.isDone === true);
    }

  }
  




  return (
      <div className="container ">
        <TodoHeader isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}/>
        <AddTodo addTodo={addTodo}/>
        <TodoContainer todos={ todos } deleteTodo = { deleteTodo } deleteCompleted= { deleteCompleted }  markCompleted = { markCompleted } filterTodo={filterTodo} />
        <TodoFilter setFilter = {setFilter}  filter = {filter}/>

        <p className='last'>Drag and drop to reorder list</p>
      </div>
    

  );
}

export default App;
