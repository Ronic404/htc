enum ActionTypes {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
  SHOW_POPUP = 'SHOW_POPUP'
}

interface IState {
  isAuthorized: boolean;
  isShowPopUp: boolean | undefined;
}

interface ILogInAction {
  type: ActionTypes.LOG_IN;
}

interface ILogOutAction {
  type: ActionTypes.LOG_OUT;
}

interface IShowPopUpAction {
  type: ActionTypes.SHOW_POPUP;
  payload: boolean;
}

type IActions = ILogInAction | ILogOutAction | IShowPopUpAction;

export { ActionTypes };
export type { IState, IActions };
