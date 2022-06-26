import React from 'react';
// eslint-disable-next-line object-curly-newline
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Addition from '../components/Addition';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle}>リスト</Text>
        <Text style={styles.MemoDate}>2022年06月10日 10:00</Text>
      </View>
      <ScrollView style={styles.MemoBody}>
        <Text style={styles.MemoText}>
          リスト EMR
          ああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
      </ScrollView>
      <Addition
        style={{ top: 60, bottom: 'auto' }}
        name="pencil"
        onPress={() => {
          navigation.navigate('MemoEdit');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  MemoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  MemoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  MemoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  MemoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  MemoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
