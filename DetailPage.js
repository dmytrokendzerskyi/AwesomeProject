'use string'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Navigator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class DetailPage extends React.Component{
  goBack(){
    this.props.navigator.pop({
      id: 'StartPage'
    });
  }
  render(){
    return (
        <View style={styles.background}>
          <ScrollView>
          <View style={styles.backImage}> 
          <TouchableOpacity onPress={(this.goBack.bind(this))}>
        <Image style={{width:30 , height:30}} source={require('./image/ic_arrow.png')}/>
         </TouchableOpacity>
        </View>
           <Image style={styles.imageEvent} source={{uri: this.props.data.image_event}}/>
           <View>
              <Text style={styles.titleText}>{ this.props.data.name_event}</Text>
           </View> 
           <Text style = {styles.textEvent}>{this.props.data.description_event}</Text>
           <Text style = {styles.textEvent}>{this.props.data.date_event}</Text>
           <Text style = {styles.textEvent}>{this.props.data.name_company}</Text>
           </ScrollView>
        </View>
    );

}
}

const styles = StyleSheet.create({
  background: {
        flex: 1,
         backgroundColor : '#1C2124',

    },
   titleText: {
    paddingTop:10,
    paddingBottom:10,
    color: 'white',    
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backImage:{
    alignSelf : 'stretch',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    flex:0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
 
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
    height:500,
    resizeMode: 'cover'
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
      row: {
    flexDirection: 'row',
    margin:3,
    marginLeft:10,
    padding: 3,
    backgroundColor: '#323639',
    alignSelf: "stretch"
  },
});

module.exports =DetailPage;
