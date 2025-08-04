import withSkeleton from "@/shared/hocs/withSkeleton";
import { NewsBanner } from "@/entities/news";
import './BannersList.css'
import { INews } from "@/entities/news/Model/types";


interface Props{
    banners?:INews[]|null;
}

const BannersList=({banners}:Props)=>{
    return(
        <ul className='banners'>
            {banners?.map(banner=>{
                return(
                    <NewsBanner key ={banner.id} item={banner}/>
                )
            })}
            
        </ul>
    )
}

const BannersListWithSkeleton = withSkeleton<Props>(BannersList,'banner',10,'row');

export default BannersListWithSkeleton