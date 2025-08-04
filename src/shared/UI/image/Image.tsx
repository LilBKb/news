import './Image.css';


interface Props{
    image:string;
}

const Image=({image}:Props)=>{
    return(
        <div className='wrapper'>
            {image ? <img src={image} alt='news' className='image'/> : null }
        </div>
    )
}

export default Image;