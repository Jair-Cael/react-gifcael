import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    /* const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; */

    const [categories, setCategories] = useState([''])

    /* const handleAdd = () =>{        
        setCategories([...categories, 'Naruto']);        
    } */

    
    return (
        <div>                    
            <h2 className="title">Gif Cael's</h2>                      
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                categories.map(category =>(                    
                    <GifGrid key={category}category={category} />                  
                ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;