import React from 'react'

export const GifGridItem = ({title,gif}) => {

   // console.log(props);
    return (
        <div className='card animate__animated animate__lightSpeedInLeft'>
            <img src={gif} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
