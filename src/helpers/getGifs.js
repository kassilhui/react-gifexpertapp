export const getGifts=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=vRJUD7ZlRhpwmjwniTx7uqAaXgcXb4ks`;
    const resp=await fetch(url);
    const {data}=await resp.json();

    const gifs=data.map(img=>{

        return{
           id:img.id, 
           title:img.title,
           gif:img.images.downsized_medium.url
        }
    })

   return gifs;
   //setImages(gifs);
}
