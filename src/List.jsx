import React from "react";

const ItemList = ({items}) => {

    return(
        <div>
            <h1>List</h1>
            <ul>
                <div>
                {items.map(item => {
                    <li key={item.id}>{item.name}</li>
                })}
                </div>
                
            </ul>
        </div>
    )
}


export default ItemList;