import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: []        
    })

    useEffect(()=>{
        getGifs(category)
        .then( imgs => {                        
                setState({
                    data: imgs,                   
                })           
        })
    }, [category])    

    return state;
}