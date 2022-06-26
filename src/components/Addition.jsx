import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import Icon from './Icon';

export default function Addition(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.Addition, style]} onPress={onPress}>
      <Icon name={name} size={40} color="white" />
    </TouchableOpacity>
  );
}

Addition.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

Addition.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  Addition: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  AdditionButton: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
