const initialState = { viewedFilms: [] }
function toggleViewed(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOGGLE_VIEWED':
            const viewedIndex = state.viewedFilms.findIndex((item, index) => item.id === action.value.id)
            if (viewedIndex !== -1) {

                nextState = {
                  ...state,
                  viewedFilms: state.viewedFilms.filter( (item, index) => index !== viewedIndex)
                }
              }
              else {
                nextState = {
                  ...state,
                  viewedFilms: [...state.viewedFilms, action.value]
                }
              }
              return nextState || state
    
        default:
            return state
    }
}


export default toggleViewed