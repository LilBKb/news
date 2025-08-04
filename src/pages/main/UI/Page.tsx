import LatestNews from './latestNews/LatestNews';
import './main.css'
import NewsByFilters from './newsByFilters/NewsByFilters';




const Page=()=>{
    
    
    return(
        <main className='main'>
            <LatestNews/>
            <NewsByFilters/>
            
        </main>
    )
}
export default Page;