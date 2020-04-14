import React from "react";

const PollAnswered = ({ user, question, authedUser }) => {
  const optionOneLength = question.optionOne.votes.length;
  const optionTwoLength = question.optionTwo.votes.length;
  const total = optionOneLength + optionTwoLength;
  const optionOnePct = (optionOneLength / total) * 100;
  const optionTwoPct = (optionTwoLength / total) * 100;
  let optionOneColor = "";
  let optionTwoColor = "";

  if (question.optionOne.votes.includes(authedUser)) {
    optionOneColor = "blue";
  } else {
    optionTwoColor = "blue";
  }

  return (
    <div className="tweet" style={{ marginTop: 20 }}>
      <img
        src={user.avatarURL}
        alt={`Avatar of ${user.name}`}
        className="avatar"
      />
      <div className="tweet-info" style={{ textAlign: "left", width: "100%" }}>
        <div>
          <span>{user.name} question</span>
        </div>
        <br />
        <div style={{ color: optionOneColor }}>{question.optionOne.text}</div>
        <br />
        <div style={{ color: optionTwoColor }}>{question.optionTwo.text}</div>
      </div>
      <div className="tweet-info" style={{ textAlign: "left", width: "100%" }}>
        <div>
          <span>Estatitics</span>
        </div>
        <br />
        <div>
          {`${optionOneLength} / ${total}`} -> {`${optionOnePct}%`}
        </div>
        <br />
        <div>
          {`${optionTwoLength} / ${total}`} -> {`${optionTwoPct}%`}
        </div>
      </div>
    </div>
  );
};

export default PollAnswered;
