import {
  RECEIVE_USERS,
  ADD_USER_QUESTION,
  ADD_USER_VOTE,
} from "../actions/users";

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
    case ADD_USER_VOTE:
      let newUserVote = state[action.voteInfo.authedUser];
      newUserVote.answers[action.voteInfo.qid] = action.voteInfo.vote;
      return {
        ...state,
        [action.voteInfo.authedUser]: newUserVote,
      };
    default:
      return state;
  }
}
