import {createStore} from 'redux';

// Reducer function
const counterReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1};
        case 'DECREMENT':
            return { count: state.count - 1};
        default:
            return state;        
    }
};

// store created
const store = createStore(counterReducer);
//  const store = configureStore({
//   reduver: counterReducer
//  });

export default store;