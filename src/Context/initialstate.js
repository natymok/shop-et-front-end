import { fetch } from "../FectchLocalStorage/Fech"
const token=fetch()
export const initialstate={
    token:token,
    copmany:null,
    stock:null,
    newcompany:null,
    companyName:null,
    TotalSell:0,
    customer:0
    
}