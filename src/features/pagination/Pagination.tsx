import { useTheme } from '@/app/providers/ThemeProvider';
import { PaginationProps } from '@/interfaces';
import './Pagination.css';



const Pagination=({totalPages,currentPage,handlePrevPage,handleNextPage,handlePageClick}:PaginationProps)=>{
    const {isDark} = useTheme();
    return(
        <>
            <div className={`pagination ${isDark?'dark' : 'light'}`}>
                <button onClick={handlePrevPage} disabled={currentPage===1} className='arrow'>{'<'}</button>
            <div className='list__pagination'>
                {[...Array(totalPages)].map((_,index)=>{
                    return  <button onClick={()=>handlePageClick(index+1)} disabled={index+1===currentPage} className='page__number' key={index}>{index+1}</button>
                })}

            </div>

                <button onClick={handleNextPage} disabled={currentPage>=totalPages} className='arrow'>{'>'}</button>
            </div>
        </>
    );
}


export default Pagination;