
import { actionType } from "./action"
const initialState = {
    count:0,
    loading:false,
    user:null,
}

export const reducer = (state,action) =>{
    console.log(action.Type)
}