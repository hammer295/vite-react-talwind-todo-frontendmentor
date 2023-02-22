import IconCross from "./icon/IconCross";
import IconCheck from "./icon/IconCheck";

const TodoItem = ({todo,removeTodo,updateTodo}) => { 

    const {id,title,completed} = todo;

    return(
            <article className="flex gap-4 py-4 border-b border-b-gray-400">
               <button className={` w-5 h-5 border-2 rounded-full flex-none ${
                                     completed 
                                     ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                     : "inline-block"}`}
                onClick={() => updateTodo(id)}
                >
                { completed && <IconCheck />}
               </button>
               <p className={`text-gray-600 dark:text-gray-400 grow ${ completed && "line-through"}`}>{title}</p>
               <button className="flex-none"
                       onClick={() => removeTodo(id)}
                >
                   <IconCross />
               </button>
            </article>
    
           );
 };

export default TodoItem;