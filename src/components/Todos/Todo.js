import check from '../../assets/images/icon-check.svg';
import cross from '../../assets/images/icon-cross.svg';

const Todo = () => {
    return ( 
    <div className="todo completed">
        <div className="check">
          <img src={check} />
        </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>
            <img src={cross} alt="" />
          </button>
      </div>
     );
}
 
export default Todo;

