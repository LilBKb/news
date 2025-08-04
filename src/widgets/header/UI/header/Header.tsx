import { useTheme } from '@/app/providers/ThemeProvider';
import { themeIcons } from '@/shared/assets';
import { formatDate } from '@/shared/helpers/formatDate';
import './Header.css'





const Header=()=>{
    const{isDark,toggleTheme}=useTheme()
    return(
        <header className={`header ${isDark ? 'dark' : 'light'}`}>
            <div className='infoHeader'>
                <h1 className="title">News App</h1>
                <p className="date">{formatDate(new Date())}</p>
            </div>

            <img src={isDark ? themeIcons.dark : themeIcons.light} width={30} alt='theme' onClick={toggleTheme}/>

        </header>
    )
}
export default Header;