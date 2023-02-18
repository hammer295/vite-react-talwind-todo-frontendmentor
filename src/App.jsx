import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

//Los estados se hacen desde un elemento padre hacia un elemento hijo
const initialStateTodos = [
  { id: 1, title:"Complete online JavasScript bluueweb Curse", completed: true},
  { id: 2, title:"Go to the Gym", completed: false},
  { id: 3, title:"Pick up groceries", completed: false},
  { id: 4, title:"Complete todo app on Frontend Mentor", completed: true}
];

const App = () =>{

  const [todos,setTodos] = useState(initialStateTodos);

  const createTodo = (title) =>{
      
    const newTodo = {
                      id: Date.now(),
                      title,
                      completed: false
                    }

      //actualizar el objeto todo con setTodos, 
      //haciendo la clonacion del todos que ya existen y le agrego el nuevo todo (newTodo)
      setTodos([...todos, newTodo]);          

  }

  const updateTodo = (id) =>{
      setTodos(todos.map((todo) =>( todo.id === id ? {...todo, completed: !todo.completed } : todo)) )
  }

  const removeTodo = (id) => { 
      setTodos(todos.filter((todo) => todo.id !== id))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length

  const clearCompleted = () =>{
     setTodos(todos.filter((todos) => !todos.completed));
  }

  const [filter,setFilter] = useState('all');

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch(filter){
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }

  return (
          <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
             <Header />

            <main className="container mx-auto px-4 mt-8">
              <TodoCreate createTodo={createTodo}/>

              <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>  
              
              <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />

              <TodoFilter changeFilter={changeFilter} filter={filter}/>
            </main>

            <footer className="text-center py-4 px-4">Grag and Drop to reorder list</footer>
           
          </div>
         )
}

export default App;