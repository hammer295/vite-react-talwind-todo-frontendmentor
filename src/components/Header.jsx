import { useEffect, useRef, useState } from "react";
import IconMoon from "./icon/IconMoon";
import IconSun from "./icon/IconSun";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => { 

    const [darkMode,setDarkMode] = useState(initialStateDarkMode);

    //capturar todo el header
    //const refHeader = useRef(null); //siempre me debe inizializar en null porque aun no se renderiza el componente

    //con useEffect estaremos pendientes del cambio de un estado para generar una accion
    useEffect(() =>{
      if(darkMode){
        document.documentElement.classList.add('dark');//lo hago controlando el html como en js
        //refHeader.current.classList.add('bg-gray-900');//pero lo recomendable es hacerlo directo en el virtualDOM de React
        localStorage.setItem('theme','dark');
      }else{
        document.documentElement.classList.remove('dark');
        //refHeader.current.classList.remove('bg-gray-900')
        localStorage.setItem('theme','light');
      }
    },[darkMode]); //entre los corchetes le indicamos a que poner atencion, si estuviera vacio se ejecutaria una sola vez

    const handleClickToggleTheme = () =>{
    }

    return(
        <header className="container mx-auto px-4 pt-8">
              <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">TODO</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                  { 
                      darkMode ? <IconSun /> : <IconMoon />
                  }
                </button>
              </div>             
            </header>
    )
    
 }

 export default Header;