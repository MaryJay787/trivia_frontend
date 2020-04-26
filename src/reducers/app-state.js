const initialState = {
    categories: [],
    all_questions: [],
    clicked: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATS': {
          return { ...state, categories: action.all_categories }
        }
        case 'GET_POI_QUES': {
          return { ...state, all_questions: action.questions}
        }
        case 'CLICKED': {
            return { ...state, clicked: true}
        }
        default: {
            return state;
          }
        }
};
