﻿import { INCREMENT } from '../actions/actionConstants';

const initialState = {
    count: 0
}

export const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { ...state, count: state.count + 1 };
    }

    return state;
};
