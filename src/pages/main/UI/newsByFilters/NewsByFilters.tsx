import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/Api/newsApi";
import { setFilters } from "@/entities/news/Model/NewsSlice";
import PaginationWrapper from "@/features/paginationWrapper/PaginationWrapper";
import { TOTAL_PAGES } from "@/shared/constants/Constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { NewsList } from "@/widgets/news";
import NewsFilters from "../newsFilters/NewsFilters";
import './NewsByFilters.css'



const NewsByFilters=()=>{
    
    const handleNextPage=()=>{
        if(filters.page_number<TOTAL_PAGES){
            dispatch(setFilters({key:'page_number',value:filters.page_number+1}))
        }
    };

    const handlePrevPage=()=>{
        if(filters.page_number>1){
            dispatch(setFilters({key:'page_number',value:filters.page_number-1}))
        }
    };

    const handlePageClick=(pageNumber:number)=>{
        dispatch(setFilters({key:'page_number',value:pageNumber}))
    };

    const dispatch = useAppDispatch();

    const filters=useAppSelector((state)=>state.news.filters)
    const news=useAppSelector((state)=>state.news.news)

    const debouncedKeywords = useDebounce(filters.keywords,1500)
    const {isLoading}=useGetNewsQuery({
        ...filters,
        keywords:debouncedKeywords
    });
    


    return(
        <section className='section__news__by__filters'>
            <NewsFilters filters={filters}/>
            <PaginationWrapper
            top
            bottom
            handleNextPage={handleNextPage} 
            handlePrevPage={handlePrevPage} 
            handlePageClick={handlePageClick} 
            totalPages={TOTAL_PAGES} 
            currentPage={filters.page_number}>

                <NewsList news={news} isLoading={isLoading}/>
            </PaginationWrapper>
        </section>
    )

}

export default NewsByFilters;