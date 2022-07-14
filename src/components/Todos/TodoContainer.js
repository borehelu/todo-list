import check from '../../assets/images/icon-check.svg';
import cross from '../../assets/images/icon-cross.svg';

const TodoContainer = ({ todos, deleteTodo, deleteCompleted, markCompleted, filterTodo}) => {

    return ( 
    <div className="todos">
       {
        filterTodo().map(todo => {
          
          if(todo.isDone === true){
            return(
              <div className="todo completed" key={todo.id}>
                <div className="check" onClick={e => markCompleted(todo.id)}>
                  <img src={check} alt="check" />
                </div>
                  <p>{todo.name}</p>
                  <button onClick={e=>deleteTodo(todo.id)}>
                    <img src={cross} alt="cross" />
                  </button>
              </div>
            )
          }else{
            return(
              <div className="todo " key={todo.id}>
                  <div className="circle" onClick={e => markCompleted(todo.id)}>
                  </div>
                    <p>{todo.name}</p>
                    <button onClick={e=>deleteTodo(todo.id)}>
                      <img src={cross} alt="cross" />
                    </button>
                </div>
              
            )
          }
        
        })
       }
     
   
        <div className="todo-summary">
          <p>{todos.length} items left</p>
          <button onClick={deleteCompleted}>Clear Completed</button>
        </div>
      </div>
     );
}
 
export default TodoContainer;