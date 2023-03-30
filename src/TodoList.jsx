import React from "react";



function TodoList(props) {
    return (
        <section>
            <ul className="text-center">
                <div className="">{props.children}</div>
            </ul> 
        </section>
    )
}

export {TodoList};