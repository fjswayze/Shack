import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer'; 
import ErrorsReducer from './errors_reducer';
import SessionsReducer from './sessions_reducer'; 

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionsReducer,
    errors: ErrorsReducer
})

export default RootReducer; 