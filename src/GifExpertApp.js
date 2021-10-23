import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp=()=>{

    //const categories=['Gatos','Perros','Conejos','Hamster'];

    // const [categories, setCategories] = useState(['Gatos','Perros','Conejos','Hamster']);
    const [categories, setCategories] = useState(['CNBLUE']);

    //const handleAdd=()=>{
       // setCategories([...categories,'cuyo']);

       // setCategories(cats=>[...cats,'cuyo']);
    //}

    return(

        <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
        {/* <button onClick={handleAdd}>Agregar</button> */}
        
        <ul>
                { 
                    categories.map(category =>(
                    <GifGrid 
                    key={category}
                    category={category}/>
                    ))
                }
        </ul>

        </>

    );

}

export default GiftExpertApp;
