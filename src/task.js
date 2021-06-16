import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity } from 'react-native';


const Task = (props) =>{

    return(
        <View style = {Style.items}>
            <View style ={Style.itemsLeft}>
                <TouchableOpacity style = {Style.Square}></TouchableOpacity>
                <Text style ={Style.itemText}>{props.text}</Text>
            </View>
                <View style ={Style.circular}></View>            
        </View>
            
    )
}

const Style = StyleSheet.create({
    items:{
        backgroundColor : 'white',
        padding : 15,
        borderRadius : 10,
        justifyContent : 'space-between',
        marginBottom : 20,
        alignItems : 'center',
        flexDirection: 'row'

    },
    itemsLeft:{
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center'
    },
    itemText:{
        maxWidth : '80%'
    }, 
    Square :{
        width : 24,
        height : 24,
        backgroundColor : '#55BCF6',
        opacity : 0.4,
        borderRadius : 7,
        marginRight : 15
    },
    circular:{
        width : 10,
        height : 10,
        borderColor : '#55BCF6',
        borderRadius : 5,
        borderWidth : 2,
        

    },
});

export default Task;