import { createStore, combineReducers } from 'redux'
import toggleFavorite from './Reducers/favoriteReducers'
import setAvatar from './Reducers/avatarReducers'

export default createStore(combineReducers({toggleFavorite, setAvatar}))