import { useTheme } from '@/app/providers/ThemeProvider';
import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { INews } from '../../Model/types';
import styles from './styles.module.css'


interface Props{
    item:INews
}

const NewsItem=({item}:Props)=>{
    const {isDark} = useTheme();
    return(
        <li className={styles.item}>
            <div className={styles.wrappersmall} style={{backgroundImage:`url(${item.image})`}}></div>
            <div className={`${styles.info} ${isDark ? styles.dark : styles.light }`}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}


export default NewsItem