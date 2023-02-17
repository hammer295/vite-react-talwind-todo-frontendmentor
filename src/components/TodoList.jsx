import TodoItems from "./TodoItem";

const TodoList = ({todos}) => { 

  return(
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
           
         {
          todos.map( todo =>{
            <TodoItems key={todo.id} todo={todo}/>
          })
         }
                
        </div>
    )
 }

export default TodoList;