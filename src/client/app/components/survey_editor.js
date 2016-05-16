import React from 'react';

export default class SurveyEditor extends React.Component {
  render() {
    return (
      <div className='survey-editor'>
        <div className='row'>
          <aside className='sidebar col-md-3'>
            <h2>サーベイの部品</h2>
            <DraggableQuestions />
          </aside>

          <div className='survey-canvas col-md-9'>
            <div
              className={'drop-zone well well-drop-zone'}
              onDragOver={this.handleDragOver}
              onDragEnter={this.handleDragEnter}
              onDragLeave={this.handleDragLeave}
              onDrop={this.handleDrop}
            >
              左側の部品をドラッグアンドドロップしてください
            </div>
          </div>
        </div>
      </div>
    );
  }
};


