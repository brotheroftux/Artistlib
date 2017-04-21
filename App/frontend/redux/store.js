import { createStore } from 'redux'

import indexReducer from './reducers/indexReducer'

var store = createStore(indexReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store