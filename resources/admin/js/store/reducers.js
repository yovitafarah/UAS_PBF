import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/users/store/reducer'
import categories from '../modules/categories/store/reducer'
import products from '../modules/products/store/reducer'

export default combineReducers({ auth, user, categories, products})
