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


