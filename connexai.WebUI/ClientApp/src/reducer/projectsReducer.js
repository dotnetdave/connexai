import { GET_PROJECTS } from '../actions/actionConstants';

const initialState = {
    projects: []
}

export const reducer = (state = initialState, action) => {
    if (action.type === GET_PROJECTS) {
        return { ...state, projects: action.projects };
    }
    return state;
};
