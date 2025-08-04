export interface IFilters{
    page_number:number;
    page_size:number;
    category:string|null;
    keywords:string;
}

export interface IParams{
    page_number?:number;
    page_size?:number;
    category?:string|null;
    keywords?:string|null;
}

export interface PaginationProps{
    totalPages:number;
    currentPage:number;
    handlePrevPage:()=>void;
    handleNextPage:()=>void;
    handlePageClick:(page:number)=>void;
}


export type SkeletonType = 'banner'|'item'
export type DirectionType = 'row'|'column'


export type ParamsType=Partial<IFilters>