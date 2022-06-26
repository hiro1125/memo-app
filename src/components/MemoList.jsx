import React from 'react';
// eslint-disable-next-line object-curly-newline
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.MemoList}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.MemoListTitle}>リスト</Text>
          <Text style={styles.MemoListDate}>2022年06月10日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.MemoListDelete}
          onPress={() => {
            Alert.alert('Are you sure?');
          }}
        >
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.MemoList}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.MemoListTitle}>リスト</Text>
          <Text style={styles.MemoListDate}>2022年06月10日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.MemoListDelete}
          onPress={() => {
            Alert.alert('Are you sure?');
          }}
        >
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.MemoList}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.MemoListTitle}>リスト</Text>
          <Text style={styles.MemoListDate}>2022年06月10日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.MemoListDelete}
          onPress={() => {
            Alert.alert('Are you sure?');
          }}
        >
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MemoList: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  MemoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  MemoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  MemoListDelete: {
    padding: 8,
  },
});
