import { combineReducers } from 'redux'
import { articleLikeReducer } from './articleLikeReducer'

export const rootReducer = combineReducers({
    articleLikeState: articleLikeReducer,
})
