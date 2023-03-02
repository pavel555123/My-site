import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const $api = axios.create({
    baseURL: API,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})
