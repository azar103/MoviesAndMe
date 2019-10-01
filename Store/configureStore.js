import { createStore} from 'redux'
import { persistCombineReducers  } from 'redux-persist'
import toggleFavorite from './Reducers/favoriteReducers'
import setAvatar from './Reducers/avatarReducer'
import toggleViewed from './Reducers/viewedReducers'
import AsyncStorage from '@react-native-community/async-storage';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar, toggleViewed}))