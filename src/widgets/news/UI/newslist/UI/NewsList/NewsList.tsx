import withSkeleton from "@/shared/hocs/withSkeleton";
import NewsItem from "@/entities/news/UI/NewsItem/NewsItem";
import './NewsList.css'
import { INews } from "@/entities/news/Model/types";


interface Props{
    news?:INews[];
}

const NewsList=({news}:Props)=>{
    return(
        <ul className='list'>
            {news?.map(item =>{
                return <NewsItem  key={item.id} item={item}/>
            })}
        </ul>
    );
    
}


const NewsListWithSkeleton = withSkeleton(NewsList,'item',10,'column');

export default NewsListWithSkeleton;