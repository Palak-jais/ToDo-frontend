import React from 'react'


function Pages({AddPerPage,totalAdd,paginate}){
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalAdd/AddPerPage);i++){
        pageNumber.push(i);
    }
return(
    <nav>
    <ul className='pagination'>
    {
        pageNumber.map(number=>(
            <li key={number} className='page-item'>
            <a href="#" className='page-link' onClick={()=>paginate(number)}>
                {number}
            </a>
            </li>
        ))
    }

    </ul>
    </nav>
)
    

}
export default Pages;
