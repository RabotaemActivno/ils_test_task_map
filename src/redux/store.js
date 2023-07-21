import {configureStore} from '@reduxjs/toolkit'
import navigation from './navigationSlice'

export const store = configureStore({
    reducer:{navigation}
})