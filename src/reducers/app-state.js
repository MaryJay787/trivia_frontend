const initialState = {
    cats: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATS': {
          return { ...state, cats: action.cats }
        }
        default: {
            return state;
          }
        }
};
