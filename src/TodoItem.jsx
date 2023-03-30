import React from "react";

function TodoItem(props) {


    const OnDelete = () => {
        alert("Aqui eliminaste tu tarea")
    }
    return (
        <li className={`bg-white bg-opacity-50  mt-2 rounded-xl flex justify-center items-center p-3 shadow-lg ${props.completed && 'bg-opacity-30'}`}>
            <div className={`item w-5 h-5 border-2 border-pink-300 rounded-full cursor-pointer ${props.completed && 'bg-cyan-900'}`} onClick={props.onComplete}></div>
            <div className="flex justify-between ml-5 w-11/12">
                <p className={`texto text-start w-10/12 ${props.completed && 'line-through'}`}>{props.text}</p>
                <span className="cerrar px-2 text-red-500 font-bold text-xl cursor-pointer my-auto  active:scale-75" onClick={props.onDelete}>X</span>
            </div>
            
        </li>
    )
}

export {TodoItem};
