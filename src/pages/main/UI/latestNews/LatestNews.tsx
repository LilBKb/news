import BannersList from "@/widgets/news/UI/bannersList/BannersList"
import { useGetLatestNewsQuery } from "@/entities/news/Api/newsApi"
import '@/pages/main/UI/latestNews/LatestNews.css'


const LatestNews=()=>{

    const {data,isLoading}=useGetLatestNewsQuery(null)

    return(
        <section className='section'>
            <BannersList  banners={data && data?.news} isLoading={isLoading}/>
        </section>
    )
}



export default LatestNews