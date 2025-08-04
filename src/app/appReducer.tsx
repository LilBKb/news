import { categoryApi } from "@/entities/category/Api/categoryApi";
import { newsApi } from "@/entities/news/Api/newsApi";
import { newsSlice } from "@/entities/news/Model/NewsSlice";
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer =combineReducers({
    news:newsSlice.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
})