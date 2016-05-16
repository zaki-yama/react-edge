import React from 'react';

export default class AnswerRadioInput extends React.Component {
  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" />
          ラベルの文字列
        </label>
      </div>
    );
  }
}
