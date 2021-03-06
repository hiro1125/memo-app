import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import Addition from '../components/Addition';

export default function MemoListScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <MemoList />
      <Addition
        name="plus"
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
