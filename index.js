import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);
