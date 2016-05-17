import React from 'react';

export default class AnswerMultipleChoiceQuestion extends React.Component {
}

AnswerMultipleChoiceQuestion.propTypes = {
  value: React.PropTypes.string,
  choices: React.PropTypes.array.isRequired,
  onCompleted: React.PropTypes.func.isRequired
};

AnswerMultipleChoiceQuestion.defaultProps = {
  value: 
