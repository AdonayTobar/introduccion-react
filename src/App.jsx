import { useState } from 'react';
import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import {TodoCreate} from './TodoCreate'
const Dtodos = [
  {text: "cortar cebolla", completed: false},
  {text: "Aprobar el curso de intro a React", completed: false},
  {text: "Llorar con la llorona", completed: false},
  {text: "Llorar con matias", completed: false},
]

function App() {
  const [todos, setTodos] =React.useState(Dtodos);
  const [busValor, setBusValor] = React.useState('');


  let todosCompletos = todos.filter(todo => !!todo.completed).length;//!!Es verdadero
  let totalTodos = todos.length;

  let buscarTodos = [];
  if(!busValor.length >= 1){
    buscarTodos =todos;
  } else {
    buscarTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const buscarText = busValor.toLowerCase();
      return todoText.includes(buscarText);
    });
    
  }

  //Esta es una nueva funcion para cambiar el estado de la tarea
  const completeTodos = (text) => {
    //Esto es para encontrar la posiciondentro de array
    const todoIndex = buscarTodos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    //Dandole el valor de completado a la tarea

    newTodos[todoIndex] = {
      text:       newTodos[todoIndex].text,
      completed:  !newTodos[todoIndex].completed
    }
    //newTodos[todoIndex].completed = true;
  
    
    //Actualizando el arreglo
    setTodos(newTodos);
  }

  const eliminarTodos = (text) => {
    // buscar el índice del elemento a eliminar
    const todoIndex = todos.findIndex(todo => todo.text === text);
  
    // llamar a splice() para eliminar el elemento en el índice dado
    const newTodos1 = [...todos];
    newTodos1.splice(todoIndex, 1);
  
    // actualizar el estado de Dtodos con el nuevo arreglo sin el elemento eliminado
    setTodos(newTodos1);
  }



  return (
    <div className='mt-20 mb-10 md:flex'>
      <div className="md:w-1/2">
        <TodoCreate/>
      </div>

      <div className="md:w-1/2 p-5 flex flex-col">
        <TodoCounter 
          total={totalTodos}
          completed={todosCompletos}
        />

        <TodoSearch 
          busValor={busValor}
          setBusValor={setBusValor}
        />
        <TodoList>
        {buscarTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => eliminarTodos(todo.text)}
              />
            ))}
        </TodoList> 

      </div>
        
      
    </div>
  )
}

export default App
