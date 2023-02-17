const TodoCreate = () => { 
    return(<form className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 mt-8">
                <span className="rounded-full p-3 border-2 w-3 h-3 inline-block"></span>
                <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo..." />
           </form>
           )
 }

 export default TodoCreate;