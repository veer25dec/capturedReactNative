import {
  FETCH_GROUP,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILED,
  FETCH_RESOURCES,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILED,
} from '../actions/types'

const INITIAL_STATE = {
  group: {},
  resources: {},
  isLoading: false,
  error: ''
}


export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
      case FETCH_GROUP:
        return { ...state, isLoading : true, error: ''};
      case FETCH_GROUP_SUCCESS:
        return { ...state , group : action.payload};
      case FETCH_GROUP_FAILED:
          return { ...state, isLoading : false, error : action.payload};
      case FETCH_RESOURCES:
          return { ...state };
      case FETCH_RESOURCES_SUCCESS:
          return { ...state , resources: {...state.resources, [action.payload.groupId]: action.payload.data} , isLoading : false, error : ''};
      case FETCH_RESOURCES_FAILED:
          return { ...state, isLoading : false, error : action.payload};
      default:
        return state;
    }
}
