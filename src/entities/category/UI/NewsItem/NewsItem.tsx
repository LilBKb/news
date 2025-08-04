
import { useTheme } from '@/app/providers/ThemeProvider';
import { INews } from '@/entities/news';
import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import './NewsItem.css';


interface Props{
    item:INews
}

const NewsItem=({item}:Props)=>{
    const {isDark} = useTheme();
    return(
        <li className='item'>
            <div className='wrappersmall' style={{backgroundImage:`url(${item.image})`}}></div>
            <div className={`info ${isDark ? 'dark' : 'light' }`}>
                <h3 className='title'>{item.title}</h3>
                <p className='extra'>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}


export default NewsItem