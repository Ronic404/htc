import { ActionTypes, IActions, IState } from '../types/forRedux';

const initialState: IState = {
  isAuthorized: true,
  isShowPopUp: false,
}

const reducer = (state: IState = initialState, action: IActions): IState => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        isAuthorized: true,
      };
    case ActionTypes.LOG_OUT:
      return {
        ...state,
        isAuthorized: false,
      };
    case ActionTypes.SHOW_POPUP:
      return {
        ...state,
        isShowPopUp: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;