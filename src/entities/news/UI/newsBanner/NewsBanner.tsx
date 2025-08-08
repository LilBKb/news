import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { INews } from '../../Model/types';
import styles from './styles.module.css'
import Image from '@/shared/UI/image/Image';
import { useTheme } from '@/app/providers/ThemeProvider';

interface Props{
    item:INews;

}



const NewsBanner =({item}:Props)=>{
    const {isDark}=useTheme()
    return(
        <div className={`${styles.banner} ${isDark?styles.dark : styles.light}`}>
            <Image image={item?.image}/>
            <h3 className={styles.title}>{item?.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item?.published)} by {item?.author}</p>
        </div>
    )
}




export default NewsBanner;