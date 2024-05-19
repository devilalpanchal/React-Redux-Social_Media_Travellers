
import { actionType } from "./action"
const initialState = {
    count: 0,
    loading: false,
    user: null,
}

export const reducer = (state, action) => {
    console.log(action.Type)


    switch (action.type) {

        case "fetch":
            async function fetchData() {
                let resp = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                )
            }
            return { ...state, user: state.resp.data }
    }
    return { count: 0 }
}