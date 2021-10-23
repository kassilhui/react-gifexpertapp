import {useState, useEffect} from 'react';
import { getGifts } from '../helpers/getGifs';
//los hooks son funciones


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifts(category)
        .then(imgs=>{
            
            setState({
                data:imgs,
                loading:false
            });
            
        })
    },[category])

//useEffect para que solo cambie cuando cambie la categoria
    return state;

}

