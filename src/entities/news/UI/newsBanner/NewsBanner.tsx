import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { INews } from '../../Model/types';
import './NewsBanner.css'
import Image from '@/shared/UI/image/Image';

interface Props{
    item:INews;
}



const NewsBanner =({item}:Props)=>{
    return(
        <div className='banner'>
            <Image image={item?.image}/>
            <h3 className='title'>{item?.title}</h3>
            <p className='extra'>{formatTimeAgo(item?.published)} by {item?.author}</p>
        </div>
    )
}




export default NewsBanner;