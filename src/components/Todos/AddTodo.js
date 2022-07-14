import { useState } from "react";

const  AddTodo= ({ addTodo }) => {

    const [todoInput,setTodoInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if(todoInput.trim().length !== 0){
            let todo = { name: todoInput,status:"active",id:""+ Math.floor(Math.random() * 100) };
            addTodo(todo);
            setTodoInput("");

        }
        
       
    }
    

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="circle"></div>
            <input 
              type="text" 
              placeholder="Create a new todo.."
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              />
        </div>
        </form>
       
     );
}
 
export default AddTodo ;