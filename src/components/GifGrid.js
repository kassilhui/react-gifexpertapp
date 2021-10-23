//rafc
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifts } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images,loading}=useFetchGifs(category);

    // useEffect(()=>{ //sirve para que se llame una sola vez componentDidMount
    //     getGifts(category)
    //     .then(imgs=>setImages(imgs))
    // },[category]); //[] arreglo de dependencias

    // const [count,setCount]=useState(0);

 



    //getGifts();
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className='card-grid'>
                {
                    images.map(img=>(
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
            {/* 

            {
                images.map(image=>(
                    <GifGridItem key={image.id} {...image}/>
                ))
            } */}

            {/* <ol> */}
                {/* {
                    images.map((image)=>{
                    return(
                        <li key={image.id}>{image.title}</li>
                        )
                    })
                } */}
                {/* <li>imae</li> */}
            {/* </ol> */}

            {/* <button onClick={()=>setCount(count+1)}></button> */}
                
        </>
    )
}
