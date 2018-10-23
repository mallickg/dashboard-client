const actorDetails = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ACTOR':
            return {
                actor: action.actor,
                text: action.text,
                completed: false
            }

        default:
            return state
    }
}

export default actorDetails;