import './SwipeableBottomSheet.scss';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { animated, useSpring, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const SwipeableBottomSheet = ({visibility, visibilityToggler}) => {
  const sheetRef= useRef();
  const SHEET_HEIGHT = useRef();

  const spring = useSpring(() => {
    return { minHeight: '0px' };
  });
  const [{minHeight}, setStyles] = spring;

  const close = (velocity = 0) => {
    // set({ y: height, config: { ...config.stiff, velocity } })
    visibilityToggler(false);
  }


  const bind = useDrag((props) => {
    const { first, last, cancel, movement: [mx, my] } = props;
    const update = (reset) => setStyles({ minHeight: `${ reset ? SHEET_HEIGHT.current : SHEET_HEIGHT.current - my}px`, immediate: false, config: config.stiff });

    console.log(SHEET_HEIGHT.current)
    console.log({ props });
    console.log({ mx, my });

    // if this is the first frame, set the initial height of the bottom sheet
    if (first) {
      SHEET_HEIGHT.current = sheetRef.current.offsetHeight;
    }

    // dont allow the user to keep dragging up
    if (my < -70) {
      cancel();
    }

    if(last) {
      console.log({last})
      const threshold = ((my * 100) / SHEET_HEIGHT.current) / 100;
      console.log({ threshold });

      threshold >= 0.4 ? close() : update(true);
    } else {
      console.log('last condition')
      update();
    }

  }, { axis: 'y'});

  useEffect(() => {

    if(visibility) {
      setStyles({
        minHeight: '274px',
        // maxHeight: '500px',
        config: config.stiff
      });
    } else {
      setStyles({
        minHeight: '0px',
        config: { ...config.stiff }
      });
    }
  }, [visibility, setStyles]);


  const sheet = (
    <animated.div {...bind()} className='swipeable-bottom-sheet' style={{ minHeight, touchAction: 'pan-x' }} ref={sheetRef} >
      <h1>HOLA</h1>
    </animated.div>
  );

  return ReactDOM.createPortal(sheet, document.querySelector('body'));
}

export default SwipeableBottomSheet;