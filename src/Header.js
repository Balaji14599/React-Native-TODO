import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render()
    {  
            return (
                <View style={styles.Header}>
                    <Text >HAI </Text>
                <StatusBar style="auto" />
                </View>
                
            );
    };
}
const styles = StyleSheet.create({
    Header: {
        width : '100%',
        height : '15%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
  },
});
