import React, { useContext } from 'react'
import { ValueContext } from './App';
function Search(){
 const {value,setvalue}=useContext(ValueContext);
     const searchPost=(e)=>{
        setvalue(e.target.value);    
       }
    return(

        
             <form>
             <div className='searching'>
            <input type="text"  placeholder='enter your search here'
            value={value}
            onChange={searchPost}
            />
            
            </div>
            </form>
      
    )
}
export default Search;