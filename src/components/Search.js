import React from 'react';
import { searchPost } from '../utils/HandleApi';

const Search=(props)=>{

    return(
        <>
        <form>
            <div className='searching'>
                <input type="text"  placeholder='enter your search here'
                value={props}
                    onChange={(e)=>searchPost(e.target.value)}
                />
            </div>
        </form>
        </>
    )

}
export default Search