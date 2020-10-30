import React from 'react'

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data: images} = useFetchGifs(category);
   
    return (
        <>
        <h3 className="animate__animated animate__fadeIn title-category">{category}</h3> 
        
        
        <div className="card-grid">                                     
            {
                images.map(img =>(               
                    <GifGridItem key={img.id} {...img} category={category}/>
                ))
            }    
        </div>
        </>
    )
}
