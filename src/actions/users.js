export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_VOTE = "ADD_USER_VOTE";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserQuestion(user, questionId) {
  return {
    type: ADD_USER_QUESTION,
    user,
    questionId,
  };
}

export function addUserVote(voteInfo) {
  return {
    type: ADD_USER_VOTE,
    voteInfo,
  };
}
