import { FETCH_BEERS_START, FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILURE } from './ActionType';

const initialState = {
    beers: [],
    isLoading: false,
    error: null
  }

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BEERS_START:
        return { ...state, isLoading: true };
      case FETCH_BEERS_SUCCESS:
        return { ...state, isLoading: false, beers: action.payload };
      case FETCH_BEERS_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  }
  
  export default rootReducer;