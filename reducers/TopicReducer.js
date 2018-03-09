import {
  FETCH_TOPIC,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_FAILED
} from '../actions/types'

const INITIAL_STATE = {
  topic: {},
  pages: [],
  isLoading: false,
  error: ''
}


export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
      case FETCH_TOPIC:
        return { ...state, isLoading : true, error: ''};
      case FETCH_TOPIC_SUCCESS:
        return { ...state , topic : action.payload.coachbook , pages : action.payload.coachbook.pages, isLoading : false , error: ''};
      case FETCH_TOPIC_FAILED:
          return { ...state, isLoading : false, error : action.payload};
      default:
        return state;
    }
}
