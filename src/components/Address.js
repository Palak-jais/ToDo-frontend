import React from "react";
import{BiEdit} from 'react-icons/bi';
import{AiFillDelete} from 'react-icons/ai';

const Address=({name,number,updateAdd,deleteAdd})=>{
    return(
        <div className="addlist">
        
        <div className="name">{name}</div>
        <div className="number">{number}</div>
        <div className="icons">
        <BiEdit className="icon" onClick={updateAdd}/>
        <AiFillDelete className='icon' onClick={deleteAdd}/>
        </div>
        
        </div>
    )
}
export default Address