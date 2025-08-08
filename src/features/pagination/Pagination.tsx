import { useTheme } from '@/app/providers/ThemeProvider';
import { PaginationProps } from '@/interfaces';
import styles from './styles.module.css'



const Pagination=({totalPages,currentPage,handlePrevPage,handleNextPage,handlePageClick}:PaginationProps)=>{
    const {isDark} = useTheme();
    return(
        <>
            <div className={`${styles.pagination} ${isDark?styles.dark : styles.light}`}>
                <button onClick={handlePrevPage} disabled={currentPage===1} className={styles.arrow}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_,index)=>{
                    return  <button onClick={()=>handlePageClick(index+1)} disabled={index+1===currentPage} className={styles.pageNumber} key={index}>{index+1}</button>
                })}

            </div>

                <button onClick={handleNextPage} disabled={currentPage>=totalPages} className={styles.arrow}>{'>'}</button>
            </div>
        </>
    );
}


export default Pagination;