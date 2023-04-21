import React from "react";
import { useEffect, useState } from "react";
import Address from "./components/Address";
import { addAddress, getAllAdd,updateAdd,deleteAdd} from "./utils/HandleApi";
import Search from "./Search";
import Pages from "./Pages";


export const ValueContext=React.createContext();

function App() {
  const [Add,setAdd]=useState([])
  const[name,setName]=useState("")
  const[number,setNumber]=useState("")
  const[isUpdate,setisUpdate]=useState(false)
  const[addid,setAddid]=useState("")
  const [value,setvalue]=useState("")
  const[currentPage,setCurrentPage]=useState(1);
  const[AddPerPage]=useState(10);
  useEffect(()=>{
    getAllAdd(setAdd)
  },[])
  
 const updateMode=(_id,name,number)=>{
  setisUpdate(true)
  setName(name)
  setNumber(number)
  setAddid(_id)

 }
 const indexofLastAdd=currentPage*AddPerPage;
 const indexofFirstAdd=indexofLastAdd-AddPerPage;
 const currentAdd=Add.slice(indexofFirstAdd,indexofLastAdd)
 const paginate=(pageno)=>{
  setCurrentPage(pageno)
 }
 
 
  return (
    
    <div className="App">
    <ValueContext.Provider value={{value,setvalue}}>
    <div className="parent">
    <div className="header">
      <h2>Address Book</h2>
    </div>
    <div className="child-One">
    <input type="text" placeholder="Add name here.."
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
      <input type="text" placeholder="Add number here.."
         value={number}
      onChange={(e)=>setNumber(e.target.value)}
      />
      <span className="add" 
      onClick={ isUpdate?()=>updateAdd(addid,name,setName,number,setNumber,setAdd,setisUpdate)
      :()=>addAddress(name,setName,number,setNumber,setAdd)}>
      {isUpdate?"UPDATE":"ADD"}
      </span>
    </div>

   <Search/>
   
    <div className="list">
    {
      currentAdd.filter(item=>{
        const searchTerm=value.toLowerCase();
        const name=item.name.toLowerCase().startsWith(searchTerm);
        const num=item.number.startsWith(searchTerm);

        return (name+num);
      })
      .map((item)=>
      <Address key={item._id}name={item.name}
       number={item.number}
        updateAdd={()=>updateMode(item._id,item.name,item.number)}
        deleteAdd={()=>deleteAdd(item._id,setAdd)}
       />
       
       )
      
      
    }
    
    </div>
    <Pages AddPerPage={AddPerPage} totalAdd={Add.length} paginate={paginate}/>
   
   
    </div>
    </ValueContext.Provider>
    </div>
  
  );
}

export default App;
