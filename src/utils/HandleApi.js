
import axios from 'axios'
const baseurl='http://localhost:5000'

const getAllAdd=(setAdd)=>{
    axios.get(baseurl).then(({data})=>{
        //console.log('data--->',data);
        setAdd(data)

    })
}
const addAddress=(name,setName,number,setNumber,setAdd)=>{
    
    axios.post(`${baseurl}/save`,{name,number})

    .then((data)=>{
        setName("")
        setNumber("")
        getAllAdd(setAdd)
    })
    .catch((err)=>alert(err.response.data.msg))

}

const updateAdd=(addid,name,setName,number,setNumber,setAdd,setisUpdate)=>{
    axios.post(`${baseurl}/update`,{_id:addid,name,number})
    .then(()=>{
        
        setName("")
        setNumber("")
        setisUpdate(false)
        getAllAdd(setAdd)
    })
    .catch((err)=>alert(err))

}
const deleteAdd=(_id,setAdd)=>{
    axios.post(`${baseurl}/delete`,{_id})
    .then(()=>{
        getAllAdd(setAdd)
    })
    .catch((err)=>alert(err))

}

export {getAllAdd,addAddress,updateAdd,deleteAdd}
