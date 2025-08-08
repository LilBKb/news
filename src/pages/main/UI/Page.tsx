import LatestNews from './latestNews/LatestNews';
import styles from './styles.module.css'
import NewsByFilters from './newsByFilters/NewsByFilters';




const Page=()=>{
    
    
    return(
        <main className={styles.main}>
            <LatestNews/>
            <NewsByFilters/>
            
        </main>
    )
}
export default Page;