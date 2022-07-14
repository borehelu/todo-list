const TodoFilter = ({ setFilter, filter}) => {

    const buttons = [
        {
            id:1,
            title:"All",
            filter:"all"
        },
        {
            id:2,
            title:"Active",
            filter:"active"
        },
        {
            id:3,
            title:"Completed",
            filter:"completed"
        }
    ]
    
    return ( 
        <div className="todo-filter">
            {
                buttons.map(button =>{
                   return <button key={button.id} onClick={()=>setFilter(button.filter)} className={filter===button.filter? "active-filter":""}>{button.title}</button>
                })
            }
          
               </div>
     );
}
 
export default TodoFilter;