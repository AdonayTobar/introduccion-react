import React from "react";

function TodoSearch({busValor, setBusValor}){

    const obsrvacionBuscador = (event) => {
        console.log(event.target.value);
        setBusValor(event.target.value);
    }
    return (

           <input type="text" placeholder="Search"className="buscar w-3/4 mx-auto rounded-md px-2" value={busValor} onChange={obsrvacionBuscador}/>

    )
}

export {TodoSearch};