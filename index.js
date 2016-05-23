import React from 'react';
import ReactDOM from 'react-dom';

/*
class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    // ref 経由で input 要素に直接アクセスする
    const helloTo = ReactDOM.findDOMNode(this.refs.helloTo).value;
    alert(helloTo);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          ref="helloTo"
          type="text"
          defaultValue="Hello World!"
        />
        <button type="submit">送信</button>
      </form>
    );
  }
}
*/

class MyForm extends React.Component {
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

ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);
