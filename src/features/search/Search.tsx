import { useTheme } from '@/app/providers/ThemeProvider';
import './Search.css'


interface Props{
    keywords:string;
    setKeywords:(keywords:string)=>void;
}

const Search=({keywords,setKeywords}:Props)=>{
    const {isDark} = useTheme();
    return(
        <div className={`search ${isDark?'dark':'light'}`}>
            <input type='text' value={keywords} className='input' onChange={(e)=>setKeywords(e.target.value)}
            placeholder='JavaScript'/>
        </div>
    );
}

export default Search;