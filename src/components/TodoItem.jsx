import CrossIcon from "./icon/CrossIcon";

const TodoItems = ({todo}) => { 

    return(
            <article className="flex gap-4 py-4 border-b border-b-gray-400">
               <button className="rounded-full p-3 border-2 w-3 h-3 inline-block flex-none"></button>
               <p className="text-gray-600 grow">{todo.title}</p>
               <button className="flex-none">
                   <CrossIcon />
               </button>
            </article>
    
           );
 };

export default TodoItems;