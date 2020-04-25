const initialState = {
    categories: [],
    all_questions: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATS': {
          return { ...state, categories: action.all_categories }
        }
        case 'GET_POI_QUES': {
          return { ...state, all_questions: action.questions}
        }
        default: {
            return state;
          }
        }
};
