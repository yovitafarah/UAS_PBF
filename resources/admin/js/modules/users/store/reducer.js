import User from '../Users'
import { USER_UPDATE , USER_UNSET, USER_LIST, USER_REMOVE, USER_ADD} from './action-types'
import { AUTH_LOGOUT, AUTH_USER } from '../../auth/store/action-types'

const initialState = Object.assign({}, new User({}))

// const initialState = {
//   currentPage: 0,
//   data: [],
//   from: 0,
//   lastPage: 0,
//   nextPageUrl: '',
//   path: '',
//   perPage: 0,
//   prevPageUrl: null,
//   to: 0,
//   total: 0,
// }


const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case AUTH_USER:
      return authUser(state, payload)
    case USER_UPDATE:
      return update(state, payload);
    case AUTH_LOGOUT:
    case USER_UNSET:
      return unsetUser(state);
    case USER_LIST:
      return list(state, payload);
    case USER_REMOVE:
      return remove(state, payload);
    case USER_ADD:
      return add(state, payload);
    default:
      return state
  }
}

function updateUser(state, payload) {
  return {
    ...state, ...payload
  }
}


function unsetUser(state) {
  return {
    ...state, initialState
  }
}

function authUser(state, user) {
  return {
    ...state, ...user
  }
}

function list(state, payload) {
  state = Object.assign({}, payload)

  return state
}

function remove(state, id) {
  const data = state.data.filter(obj => obj.id !== id)

  return Object.assign({}, state, { data })
}

function add(state, payload) {
  const category = state.data.find((category) => (category.id === payload.id))

  if (!category) {
    const data = [...state.data, payload]

    return Object.assign({}, state, { data })
  }

  return update(state, payload)
}

function update(state, payload) {
  const data = state.data.map(obj => {
    if (obj.id === payload.id) {
      return { ...obj, ...payload }
    }
    return obj
  })

  return Object.assign({}, state, { data })
}
export default reducer
