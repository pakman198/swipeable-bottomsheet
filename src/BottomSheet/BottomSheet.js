import './BottomSheet.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const BottomSheet = ({visibility}) => {

  const cssClasses = classnames('bottom-sheet', {
    'bottom-sheet__visible': visibility
  });

  const sheet = (
    <div className={cssClasses}>
      <h1>HOLA</h1>
    </div>
  );

  return ReactDOM.createPortal(sheet, document.querySelector('body'));
}

export default BottomSheet;