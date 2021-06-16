import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Boxes extends React.Component {
  render()
  {
  return (
    <View style={styles.container}>
      <View style = {styles.box}>
        <View style ={styles.innerBox}>
          <Text>The Box1</Text>
        </View>
      </View>
      <View style = {styles.box}>
        <View style ={styles.innerBox}>
          <Text>The Box2</Text>
        </View>
      </View>
      <View style = {styles.box}>
        <View style ={styles.innerBox}>
          <Text>The Box3</Text>
        </View>
      </View>
      <View style = {styles.box}>
        <View style ={styles.innerBox}>
          <Text>The Box4</Text>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
    
  );
  }
}

const styles = StyleSheet.create({
    container: {
    width :'100%',
    height : '85%',
    flexDirection : 'row',
    flexWrap : 'wrap'
  },
  box:{
    width :'50%',
    height : '55%',
    padding : 5,
  },
  innerBox :{
  flex: 1,
  justifyContent :'center',
  alignItems : 'center',
  backgroundColor : 'orange',
  flexDirection : 'row',
  flexWrap : 'wrap'
 }
});
