import React, { useRef } from 'react';
import './Slider.css'
import { useTheme } from '@/app/providers/ThemeProvider';




interface Props{
    children:React.ReactElement;
    step?:number;
}

const Slider =({children,step=150}:Props)=>{
    const {isDark} = useTheme();
    const sliderRef=useRef<HTMLElement|null>(null);

    const scrollLeft=()=>{
        if(!sliderRef.current) return
        sliderRef.current.scrollLeft-=step;
    }

    const scrollRight=()=>{
        if(!sliderRef.current) return
        sliderRef.current.scrollLeft+=step;
    }


    return(
        <div className={`slider ${ isDark ? 'dark' : 'light'}`}>
            <button className='arrow' onClick={scrollLeft}>{'<'}</button>
            {React.cloneElement(children,{ref:sliderRef})}
            <button className='arrow' onClick={scrollRight}>{'>'}</button>
        </div>
    )
}

export default Slider;