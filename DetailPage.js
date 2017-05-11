'use string'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image

} from 'react-native';

class DetailPage extends React.Component{
  render(){
    return (


        <View style={styles.background}>
           <View>
          <Text style={styles.titleText}>{ this.props.data.name_event}</Text>
          </View>
           <Image style={styles.imageEvent} source={{uri: this.props.data.image_event}}>
           <Text style = {styles.textEvent}>{this.props.data.description_event}</Text>
           <Text style = {styles.textEvent}>{this.props.data.date_event}</Text>
           <Text style = {styles.textEvent}>{this.props.data.name_company}</Text>
           </Image>
        </View>
    );

}
}

const styles = StyleSheet.create({
  background: {
        flex: 1,
         backgroundColor : '#1C2124',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
   titleText: {
    paddingTop:10,
    paddingBottom:10,
    color: 'white',    
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageEvent: {
   flex:1,
   height:300
  },
 textEvent : {
    flex:1,
    //     alignSelf: 'stretch',
    //  alignItems: 'center',
    paddingLeft: 20 ,
    alignItems: 'flex-end',
    fontSize: 15,   
    textAlign:'justify',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    paddingTop:0,
    marginTop :0,
    paddingTop:0
  
  },
});

module.exports =DetailPage;
