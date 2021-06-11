import logo from './logo.svg';
import './App.css';
import Mis_palabras from './Archivo_alfredo.js';
import Mensaje_personalizado from "./Archivo_alfredo2";

const Texto = () =>{

  return <h2>Estoy Programando con la libreria React</h2>
}

function Palabras(){

  return <h2>Funciones en React</h2>

}

function App() {
  return (
    <div className="App">
       <h1>Alfredo Utria Garcia </h1>
       <Texto/>
       <Palabras/>
       <Mis_palabras/>
       <Mensaje_personalizado color="yellow" palabra='Mi Nombre es' />
       <Mensaje_personalizado color= "blue" palabra='Alfredo'/>
       <Mensaje_personalizado  color= "red" palabra='Mis Apellidos Utria Garcia'/>
    </div>
  );
}

export default App;
