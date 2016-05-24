import React from 'react';


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helloTo: 'Hello World!'
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      helloTo: e.target.value.toUpperCase()
    });
  }

  submitHandler(e) {
    e.preventDefault();
    alert(this.state.helloTo);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.helloTo}
          onChange={this.handleChange}
        />
        <button type="submit">送信</button>
      </form>
    );
  }
}

