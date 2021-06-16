import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Footer extends React.Component {
  render()
  {
  return (
    <View style={styles.Footer}>
     <Text>Welcome All!</Text>
      <StatusBar style="auto" />
    </View> 
  );
  }
}
const styles = StyleSheet.create({
  Footer: {
    flex: 1,
    justifyContent : 'center',
    width : '100%',
    height : '15%',
    backgroundColor : 'Orange'
  },
});