import pageAction from '../actions/pageAction';

const { FETCH_START, FETCH_COMPLETE, FETCH_FAIL } = pageAction;

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, { loaded: false, error: false });
    case FETCH_COMPLETE:
      return Object.assign({}, state, { loaded: true, data: action.result });
    case FETCH_FAIL:
      return Object.assign({}, state, { error: true, message: action.err_msg });
    default:
      return state;
  }
}
