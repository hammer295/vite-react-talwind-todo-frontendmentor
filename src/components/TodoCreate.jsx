import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    //se configura un stado de seguimiento para el texto
    const [title,setTitle] = useState(''); //lo relacionamos agregando la propiedad value y onChange
    
    const handledSumitAddTodo = (e) =>{
        e.preventDefault();
        
        if(!title.trim()){
            return setTitle('');
        }
        
        createTodo(title);
        setTitle('');
    }

    return(
            <form onSubmit={handledSumitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 mt-8">
                <span className="rounded-full p-3 border-2 w-3 h-3 inline-block"></span>
                <input 
                    className="w-full text-gray-400 outline-none" 
                    type="text" 
                    placeholder="Create a new todo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </form>
           )
 }

 export default TodoCreate;