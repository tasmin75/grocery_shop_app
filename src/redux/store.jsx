import {configureStore} from  "@reduxjs/toolkit"
import UserSlice from './userSlice'


const store = configureStore({
    reducer:{
        cart:UserSlice
    }
})


export default store