/* eslint-disable indent */
import React, { useRef, useState, useEffect } from 'react';
// eslint-disable-next-line object-curly-newline
import { Keyboard, Dimensions, Animated, ViewPropTypes } from 'react-native';
import { node } from 'prop-types';

export default function KeyboardSafeView({ children, style }) {
  const initialViewHeight = useRef(null);
  const animatedViewHeight = useRef(null);
  const [viewHeight, setViewHeight] = useState(null);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleShow);
    Keyboard.addListener('keyboardDidHide', handleHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', handleShow);
      Keyboard.removeListener('keyboardDidHide', handleHide);
    };
  }, []);

  useEffect(() => {
    if (
      [initialViewHeight, animatedViewHeight, viewHeight].some(
        // eslint-disable-next-line comma-dangle
        (val) => val === null
      )
    ) {
      return;
    }
    // height is not supported with useNativeDriver: true
    // https://github.com/react-native-community/react-native-modal/issues/163
    if (viewHeight === initialViewHeight.current) {
      Animated.timing(animatedViewHeight.current, {
        toValue: initialViewHeight.current,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedViewHeight.current, {
        toValue: viewHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [viewHeight]);

  const handleShow = ({ endCoordinates }) => {
    if (endCoordinates.height && initialViewHeight.current) {
      // eslint-disable-next-line operator-linebreak
      const keyboardHeight =
        Dimensions.get('window').height - endCoordinates.screenY;
      setViewHeight(initialViewHeight.current - keyboardHeight);
    }
  };

  const handleHide = () => {
    setViewHeight(initialViewHeight.current);
  };

  const handleLayout = ({ nativeEvent }) => {
    if (!initialViewHeight.current) {
      const { height } = nativeEvent.layout;
      // keep viewHeight as null not to trigger useEffect on mounting.
      // Don't do this: setViewHeight(height);
      initialViewHeight.current = height;
      animatedViewHeight.current = new Animated.Value(height);
    }
  };

  const animatedStyle = viewHeight
    ? {
        // eslint-disable-next-line indent
        height: animatedViewHeight.current,
        // eslint-disable-next-line indent
        flex: 0,
        // eslint-disable-next-line indent
      }
    : {};
  return (
    <Animated.View style={[style, animatedStyle]} onLayout={handleLayout}>
      {children}
    </Animated.View>
  );
}

KeyboardSafeView.propTypes = {
  children: node.isRequired,
  style: ViewPropTypes.style,
};

KeyboardSafeView.defaultProps = {
  style: null,
};
