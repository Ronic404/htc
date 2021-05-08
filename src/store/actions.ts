import { ActionTypes, IActions } from '../types/forRedux';

const logInAction = (): IActions => {
  return {
    type: ActionTypes.LOG_IN,
  }
}

const logOutAction = (): IActions => {
  return {
    type: ActionTypes.LOG_OUT,
  }
}

const showPopUpAction = (action: boolean): IActions => {
  return {
    type: ActionTypes.SHOW_POPUP,
    payload: action,
  }
}

export { logInAction, logOutAction, showPopUpAction };