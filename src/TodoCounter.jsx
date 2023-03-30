
import React from 'react';



function TodoCounter(props){

    console.log('Funciona');
    return (
        <div className="mb-5">
            <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-l  from-pink-500 to-teal-400 text-center mb-2">Your Task</h2>
            <h3 className="contador font-bold text-center w-full">Has completado {props.completed} de {props.total}</h3>
        </div>
        
    )
    
}

export {TodoCounter}; 


