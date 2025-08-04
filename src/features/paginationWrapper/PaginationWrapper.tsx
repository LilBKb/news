import { PaginationProps } from "@/interfaces";
import Pagination from "../pagination/Pagination";



interface Props{
    top?:boolean;
    bottom?:boolean;
    children:React.ReactNode;
}

const PaginationWrapper=({top,bottom,children,...paginationProps}:Props & PaginationProps)=>{
    return(
        <>
            {top && <Pagination {...paginationProps}/>}
            {children}
            {bottom && <Pagination {...paginationProps}/>}
        </>
    )
}

export default PaginationWrapper;