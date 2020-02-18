const initialState = {
    categories: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATS': {
          return { ...state, categories: action.allcats }
        }
        default: {
            return state;
          }
        }
};
