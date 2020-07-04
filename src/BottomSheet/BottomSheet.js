import './BottomSheet.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { animated, useSpring } from 'react-spring';

const BottomSheet = ({visibility}) => {

  const cssClasses = classnames('bottom-sheet', {
    'bottom-sheet__visible': visibility
  });

  const animation = useSpring({
    minHeight: visibility ? '274px' : '0px',
    maxHeight: visibility ? '500px' : '0px'
  });

  const sheet = (
    <animated.div className='bottom-sheet' style={animation}>
      <h1>HOLA</h1>
    </animated.div>
  );

  return ReactDOM.createPortal(sheet, document.querySelector('body'));
}

export default BottomSheet;