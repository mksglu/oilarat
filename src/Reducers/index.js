import {combineReducers} from 'redux'
import FetchReducer from './FetchReducer'
import GraphReducer from './GraphReducer'

const RootReducer = combineReducers({
    graph: GraphReducer,
    users : FetchReducer
})
 
export default RootReducer