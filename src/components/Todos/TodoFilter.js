const TodoFilter = ({ filterTodo, active}) => {
    const buttons = [
        {status:"all", label:"All", id:"1"},
        {status:"active", label:"Active", id:"2"},
        {status:"completed", label:"Completed", id:"3"}
    ]
    return ( 
        <div className="todo-filter">
            {
                buttons.map(button => {
                    if(button.status === active){
                        return <button key={button.id} className='active-filter' onClick={e => filterTodo(button.status)}>{button.label}</button>
                    }else{
                        return <button key={button.id} onClick={e => filterTodo(button.status)}>{button.label}</button>
                    }
                })
            }

        </div>
     );
}
 
export default TodoFilter;