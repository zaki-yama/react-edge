import React from 'react';

export default class AnswerRadioInput extends React.Component {
  constructor(props) {
    this.state = {
      checked: !!this.props.checked,
      id: this.props.id ? this.props.id : uniqueId('radio-')
    };
  }

  handleChanged(e) {
    const checked = e.target.checked;
    this.setState({checked});
    if (checked) {
      this.props.onChanged(this.props.value);
    }
  }

  render() {
    return (
      <div className="radio">
        <label htmlFor={this.state.id}>
          <input type="radio"
            name={this.props.name}
            id={this.state.id}
            value={this.props.value}
            checked={this.state.checked}
            onChange={this.handleChanged} />
          {this.props.label}
        </label>
      </div>
    );
  }
}

AnswerRadioInput.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool,
  onChanged: React.PropTypes.func.isRequired
};

AnswerRadioInput.defaultProps = {
  id: null,
  checked: false
};
