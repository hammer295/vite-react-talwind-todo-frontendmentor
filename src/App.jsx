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
  { id: 4, title:"Complete todo app on Frontend Mentor", completed: false}
];


const App = () =>{

  const [todos,setTodos] = useState(initialStateTodos);

  return (
          <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
             <Header />

            <main className="container mx-auto px-4 mt-8">
              <TodoCreate />

              <TodoList todos={todos}/>  
              
              <TodoComputed />

              <TodoFilter />
            </main>

            <footer className="text-center py-4 px-4">Grag and Drop to reorder list</footer>
           
          </div>
         )
}

export default App;