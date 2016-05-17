import React from 'react';

export default class AnswerMultipleChoiceQuestion extends React.Component {
  construcor(props) {
    this.state = {
      id: uniqueId('multiple-choice-'),
      value: this.props.value
    };
  }

  renderChoices() {
    return this.props.choices.map((choice, i) => {
      return (
        <AnswerRadioInput
          key={"choice-" + i}
          name={this.state.id}
          label={choice}
          value={choice}
          checked={this.state.value === choice} />
      );
    }
  }

  render() {
    return (
      <div className="form-group">
        <label className="survey-item-label" htmlFor={this.state.id}>
          {this.props.label}
        </label>
        <div className="survey-item-content">
          {this.renderChoices()}
        </div>
      </div>
    );
  }
}

AnswerMultipleChoiceQuestion.propTypes = {
  value: React.PropTypes.string,
  choices: React.PropTypes.array.isRequired,
  onCompleted: React.PropTypes.func.isRequired
};

