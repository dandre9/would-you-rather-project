import { RECEIVE_USERS, ADD_USER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTION:
      let newUser = state[action.user];
      newUser.questions.push(action.questionId);
      return {
        ...state,
        [action.user]: newUser,
      };
    default:
      return state;
  }
}
