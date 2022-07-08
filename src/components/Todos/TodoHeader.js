import sun from '../../assets/images/icon-sun.svg';

const TodoHeader = () => {
    return ( 
        <div className="todo-heading">
            <h1>TODO</h1>
            <button>
            <img src={sun}/>
            </button>
        </div>
     );
}
 
export default TodoHeader;