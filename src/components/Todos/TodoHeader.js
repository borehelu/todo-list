import sun from '../../assets/images/icon-sun.svg';
import moon from '../../assets/images/icon-moon.svg'

const TodoHeader = ({ isDarkTheme, setIsDarkTheme }) => {
    return ( 
        <div className="todo-heading">
            <h1>TODO</h1>
            <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
                <img src={isDarkTheme? sun: moon}/>
            </button>
        </div>
     );
}
 
export default TodoHeader;