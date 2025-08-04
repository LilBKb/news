import { ForwardedRef, forwardRef } from 'react';
import './Categories.css';


interface Props{
    categories:string[];
    setSelectedCategory:(category:string|null)=>void;
    selectedCategory:string|null;
}

const Categories =forwardRef(({categories,setSelectedCategory,selectedCategory}:Props,ref:ForwardedRef<HTMLDivElement>)=>{
    return(
        <div ref={ref} className='categories'>
            {categories.map(category=>{
                return(
                    <button onClick={()=>setSelectedCategory(category)} className={selectedCategory === category ? 'active' : 'item'} key={category}>
                        {category}
                    </button>
                )
            })}
        </div>
    );
})
Categories.displayName = 'Categories';

export default Categories;