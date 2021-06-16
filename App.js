import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View ,KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import Task  from './src/task';



export default function App () {
  
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleTask = () => {
    setTaskItems([...taskItems ,task]);
    setTask(null);
  }
  const completeTask = (index) =>{
    let itemsCopy = ([...taskItems]);
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }
  
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitles}>TODAY'S TASK</Text>
        <View style = {styles.Items}>
          {
            taskItems.map((items,index) => {
              return (
                <TouchableOpacity key = {index} onPress = {() =>completeTask(index)}>
                    <Task  text = {items} />
                </TouchableOpacity>
              )
            })
          }
        </View>
        <KeyboardAvoidingView
         behaviour = {Platform.OS === "ios" ? "padding" : "height"}
         style = {styles.TextWrapper}
         >
           <TextInput style = {styles.input} placeholder = {"write a task"} Value = {task} onChangeText = {text =>setTask(text)}/>

          <TouchableOpacity  onPress = {() => handleTask()}>
           <View style = {styles.addWrapper}>
             <Text style = {styles.inputText}>+</Text>
           </View>
          </TouchableOpacity>
          
        </KeyboardAvoidingView>
      </View>
    
      <StatusBar style="auto" />
    </View> 
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'gray'
  },
  tasksWrapper:{
    paddingTop : 80,
    paddingHorizontal :20,
  },
  sectionTitles:{
    fontSize : 24,
    fontWeight : 'Bold',
    
  },
  Items:{
    marginTop: 30,
  },
  TextWrapper:{
    position : 'absolute',
    bottom : -160,
    width : '100%',
    justifyContent : 'space-round',
    alignItems : 'center',
    flexDirection :'row'
  },
  input:{
    paddingHorizontal : 10,
    paddingVertical : 20,
    backgroundColor : 'white',
    borderRadius : 30,
    width : 300,
    borderWidth : 1,
    borderColor : "#c0c0c0"
  },
  addWrapper:{
    width : 50,
    height : 50,
    borderWidth : 1,
    borderColor : "#c0c0c0",
    backgroundColor : "white", 
    borderRadius : 30,
    justifyContent : "center",
    alignItems : "center"
  },
  inputText:{},
});
