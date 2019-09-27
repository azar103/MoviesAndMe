const intialState = {
    avatar: require('../../Images/ic_tag_faces.png')
}

function setAvatar(state = intialState, action) {
    let nextState
    switch(action.type) {
        case 'ADD_AVATAR':
            nextState = 
            {  ...state,
                 avatar: action.value
                    }

         return nextState||state
        
        default:
            return state 
    }
}

export default setAvatar