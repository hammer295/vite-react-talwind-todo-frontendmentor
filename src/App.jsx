import CrossIcon from "./components/icon/CrossIcon";
import MoonIcon from "./components/icon/MoonIcon";

const App = () =>{
  return (
          <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
            <header className="container mx-auto px-4 pt-8">
              <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">TODO</h1>
                <button>
                  <MoonIcon className="fill-red-400"/>
                </button>
              </div>             
              <form className="bg-white rounded-md overflow-hidden py-4 flex gap-2 items-center px-4 mt-8">
                <span className="rounded-full p-3 border-2 w-3 h-3 inline-block"></span>
                 <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo..." />
              </form>
            </header>

            <main className="container mx-auto px-4 mt-8">
              <div className="bg-white rounded-md [&>article]:p-4">
              <article className="flex gap-4 py-4 border-b border-b-gray-400">
                 <button className="rounded-full p-3 border-2 w-3 h-3 inline-block flex-none"></button>
                 <p className="text-gray-600 grow">Complete online Javascrite curse in bluuweb</p>
                 <button className="flex-none">
                    <CrossIcon />
                 </button>
              </article>
              <article className="flex gap-4 border-b border-b-gray-400">
                 <button className="rounded-full p-3 border-2 w-3 h-3 inline-block flex-none"></button>
                 <p className="text-gray-600 grow">Complete online Javascrite curse in bluuweb</p>
                 <button className="flex-none">
                    <CrossIcon />
                 </button>
              </article>
              <article className="flex gap-4 border-b border-b-gray-400">
                 <button className="rounded-full p-3 border-2 w-3 h-3 inline-block flex-none"></button>
                 <p className="text-gray-600 grow">Complete online Javascrite curse in bluuweb</p>
                 <button className="flex-none">
                    <CrossIcon />
                 </button>
              </article>
              <article className="flex gap-4 border-b border-b-gray-400">
                 <button className="rounded-full p-3 border-2 w-3 h-3 inline-block flex-none"></button>
                 <p className="text-gray-600 grow">Complete online Javascrite curse in bluuweb</p>
                 <button className="flex-none">
                    <CrossIcon />
                 </button>
              </article>
              

              <section className="py-4 px-4 flex justify-between">
                <span className="text-gray-400">5 Items left</span>
                <button className="text-gray-400">Clear Completed</button>
              </section>
              </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
              <div className="flex justify-center gap-4 bg-white p-4 rounded-md">
                <button className="text-blue-600">All</button>
                <button className="hover:text-blue-600">Active</button>
                <button className="hover:text-blue-600">Complete</button>
              </div>
             
            </section>

            <p className="text-center py-4 px-4">Grag and Drop to reorder list</p>
           
          </div>
         )
}

export default App;