import React from 'react';

export default class SurveyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropZoneEntered: false,
      title: '',
      introduction: '',
      questions: []
    };
  }

  handleFormChange(formData) {
    this.setState(formData);
  }

  handleDragOver(e) {
    // handleDrop が呼び出されるために必要
    // https://code.google.com/p/chromium/issues/detail?id=168387
    e.preventDefault();
  }

  handleDragEnter() {
    this.setState({dropZoneEntered: true});
  }

  handleDragLeave() {
    this.setState({dropZoneEntered: false});
  }

  handleDrop(e) {
    const questionType = e.dataTransfer.getData('questionType');
    let questions = this.state.questions;
    questions = questions.concat({ type: questionType });

    this.setState({
      questions,
      dropZoneEntered: false
    });
  }

  render() {
    const questions = this.state.questions;

    let dropZoneEntered = '';
    if (this.state.dropZoneEntered) {
      dropZoneEntered = 'drag-enter';
    }

    return (
      <div className='survey-editor'>
        <div className='row'>
          <aside className='sidebar col-md-3'>
            <h2>サーベイの部品</h2>
            <DraggableQuestions />
          </aside>

          <div className='survey-canvas col-md-9'>
            <SurveyForm
              title={this.state.title}
              introduction={this.state.introduction}
              onChange={this.handleFormChange}
            />

            <Divider>質問</Divider>

            <div
              className={'drop-zone well well-drop-zone ' + dropZoneEntered}
              onDragOver={this.handleDragOver}
              onDragEnter={this.handleDragEnter}
              onDragLeave={this.handleDragLeave}
              onDrop={this.handleDrop}
            >
              左側の部品をドラッグアンドドロップしてください
            </div>

            <div className='actions'>
              <button className="btn btn-save"
                onClick={this.handleSaveClicked}>保存</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


