import React from "react";
import ActionAreaCard from "../card/card";

const List = (props) =>{
    return(
        <>
            {props.data.map((api)=>{
                <ActionAreaCard key={api.id} item ={api} />
            })}
        </>
    )
}

export default List;