//import { t } from '@/styles/index';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Modal, PanResponder, StyleSheet, View } from 'react-native';

const windowHeight = Dimensions.get('window').height;

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  height?: number | string;
  backdropColor?: string;
  style?: object;
  children?: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  height = '50%',
  backdropColor = 'rgba(29, 29, 29, 0.79)',
  style,
}) => {
  const position = useRef(new Animated.Value(isOpen ? 0 : windowHeight)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          position.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > windowHeight * 0.1) {
          closeSheet();
        } else {
          openSheet();
        }
      },
    }),
  ).current;

  const openSheet = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(position, {
      toValue: windowHeight,
      duration: 300,
      useNativeDriver: false,
    }).start(onClose);
  };

  useEffect(() => {
    if (isOpen) {
      openSheet();
    } else {
      closeSheet();
    }
  }, [isOpen]);

  return (
    <Modal transparent={true} visible={isOpen} onRequestClose={onClose}>
      <Animated.View
        /*style={[
          t.flex1,
          t.justifyEnd,
          t.z10,
          {
            backgroundColor: backdropColor,
            opacity: position.interpolate({
              inputRange: [0, windowHeight],
              outputRange: [1, 0],
            }),
          },
        ]}*/
      >
        <View
          style={[t.flex1]}
          onStartShouldSetResponder={panResponder.panHandlers.onStartShouldSetResponder}
          onResponderRelease={closeSheet}
        />
        <Animated.View
          style={[
            styles.container,
            t.wFull,
            t.roundedT3xl,
            t.bgWhite,
            {
              height: typeof height === 'number' ? height : windowHeight * (parseInt(height) / 100),
              transform: [{ translateY: position }],
              ...style,
            },
          ]}
          {...panResponder.panHandlers}
        >
          {children}
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default BottomSheet;