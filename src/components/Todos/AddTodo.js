const  AddTodo= ({ addTodo }) => {
    return ( 
        <div className="form-control">
            <div className="circle"></div>
            <input type="text" placeholder="Create a new todo.." onChange={addTodo } />
        </div>
     );
}
 
export default AddTodo ;