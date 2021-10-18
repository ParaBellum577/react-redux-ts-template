import {
  USER_LOGIN,
} from 'actions/actionTypes';
// import { IUserState } from 'types';

type ActionType =
  | { type: 'USER_LOGIN'; payload: any };

const initialState: any = {
  userData: null,
  isSignedIn: false,
};

const user = (state = initialState, action: ActionType): any => {
  switch (action.type) {
    // case USER_LOGIN:
    //   return {
    //     ...state,
    //     userData: { ...(state.userData || {}), ...action.payload },
    //   };
    default:
      return state;
  }
};

export default user;
