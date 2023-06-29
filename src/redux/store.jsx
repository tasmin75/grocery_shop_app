import {configureStore} from  "@reduxjs/toolkit"
import UserSlice from './userSlice'


const store = configureStore({
    reducer:{
        product:UserSlice
    }
})


export default store