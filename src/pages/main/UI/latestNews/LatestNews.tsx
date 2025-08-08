import BannersList from "@/widgets/news/UI/bannersList/BannersList"
import { useGetLatestNewsQuery } from "@/entities/news/Api/newsApi"
import styles from './styles.module.css'

const LatestNews=()=>{

    const {data,isLoading}=useGetLatestNewsQuery(null)

    return(
        <section className={styles.section}>
            <BannersList  banners={data && data?.news} isLoading={isLoading}/>
        </section>
    )
}



export default LatestNews