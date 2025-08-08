import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import Categories from "@/features/categories/Categories";
import Search from "@/features/search/Search";
import Slider from "@/features/slider/UI/Slider/Slider";
import { useGetCategoriesQuery } from "@/entities/category/Api/categoryApi";
import { setFilters } from "@/entities/news/Model/NewsSlice";
import { IFilters } from "@/interfaces";
import styles from './styles.module.css'



interface Props{
    filters:IFilters;
}


const NewsFilters = ({filters}:Props) =>{
    const {isDark} = useTheme();
    const dispatch = useAppDispatch();

    const {data}=useGetCategoriesQuery(null)
    return(

        <div className={styles.filters}>
            {data ? (<Slider>
            <Categories 
            categories={data?.categories} 
            setSelectedCategory={(category)=>dispatch(setFilters({key:'category',value:category}))}
            selectedCategory={filters.category}/>
            </Slider>) : null}


            <Search 
            keywords={filters.keywords}
            setKeywords={(keywords)=>dispatch(setFilters({key:'keywords',value:keywords}))}/>
        </div>
    )
}


export default NewsFilters