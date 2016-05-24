import React from 'react';

export default class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ['B']
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);

    let checked = [];
    const sel = e.target;
    console.dir(sel);
    for (let i = 0; i < sel.length; i++) {
      const option = sel.options[i];
      if (option.selected) {
        checked.push(option.value);
      }
    }
    this.setState({ options: checked });
  }

  submitHandler(e) {
    e.preventDefault();
    alert(this.state.options);
  }

  render() {
    return (
      <select multiple="true" value={this.state.options} onChange={this.handleChange}>
        <option value="A">選択肢A</option>
        <option value="B">選択肢B</option>
        <option value="C">選択肢C</option>
      </select>
    );
  }
}
