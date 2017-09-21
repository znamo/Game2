import {VisibilityFilters} from '.actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

// defaultna vrijednost parametra
function todoApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}