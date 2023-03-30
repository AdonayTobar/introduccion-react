import React from "react";
import { CreateTodoButton } from './CreateTodoButton' 

function TodoCreate(){
    return (
        <div className="shadow-lg flex flex-col bg-white bg-opacity-50 w-full p-5 rounded-xl">
           <h1 className="agregar text-4xl font-bold">Create new task</h1>
           <p>Task Name</p>
           <div className="flex flex-col"> 
            <input type="text" placeholder="Name"className="w-3/4 ml-0 rounded-md px-2"/> 
            <CreateTodoButton />
           </div>
           
           <img className="w-full mx-auto mt-5 rounded-xl hidden md:block" src="https://media.istockphoto.com/id/1155218967/es/vector/concepto-de-programaci%C3%B3n-de-planificaci%C3%B3n-estilo-de-dibujos-animados-planos-ilustraci%C3%B3n.jpg?s=170667a&w=0&k=20&c=AaP_4TSr4ZvRnwfzRSNsYj9p2g7etR8J-SAxQ_Xj5Lk=" alt="" />
        </div>
        
    )
    
}

export {TodoCreate};