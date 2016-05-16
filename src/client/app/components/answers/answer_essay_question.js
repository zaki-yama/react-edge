import React from 'react';

export default class AnswerEssayQuestion extends React.Component {
  handleComplete(e) {
    this.callMethodOnProps('onCompleted', e.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <label className="survey-item-label">{this.props.label}</label>
        <div className="survey-item-content">
          <textarea className="form-control"
            rows="3" onBlur={this.handleComplete} />
        </div>
      </div>
    );
  }
}
