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
  Animated,
  Dimensions,
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
          
           <Animated.View  style={styles.backImage}> 
          <TouchableOpacity onPress={(this.goBack.bind(this))}>
        <Image style={{width:30 , height:30, marginLeft:5, marginTop:7, opacity:1}} source={require('./image/ic_arrow.png')}/>
         </TouchableOpacity>
        </Animated.View >
          <ScrollView>
           <Image style={styles.imageEvent} source={{uri: this.props.data.image_event}}/>
           <View>
              <Text style={styles.titleText}>{ this.props.data.name_event}</Text>
           </View>
           <View style={styles.detailitems}>
              <Text style = {styles.detaillabel}>Опис</Text>
              <Text style = {styles.textEvent}>{this.props.data.description_event}</Text>
           </View>
           <View style={styles.detailitems}>
              <Text style = {styles.detaillabel}>Дата</Text>
              <Text style = {styles.textEvent}>{this.props.data.date_event}</Text>
           </View>
           <View style={styles.detailitems}>
           <Text style = {styles.detaillabel}>Місце</Text>
           <Text style = {styles.textEvent}>{this.props.data.name_company}</Text>
           </View>
           <View style={styles.detailitems}>
            <Text style = {styles.detaillabel}>Ціна</Text>
            <Text style = {styles.textEvent}>Хлопці:  {this.props.data.price_m}</Text>
            <Text style = {styles.textEvent}>Дівчата: {this.props.data.price_w}</Text>
           </View>
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
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    flex:1,
    width: Dimensions.get('window').width,
    opacity:0.5,
    backgroundColor: 'black',
    zIndex:1,
    position:'absolute',
    height:45
 
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
    height:Dimensions.get('window').height*0.7,
    resizeMode: 'cover'
  },
 textEvent : {
    flex:1,
    //     alignSelf: 'stretch',
    //  alignItems: 'center',
    paddingLeft: 20 ,
    alignItems: 'flex-end',
    fontSize: 18,   
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

        detailitems: {
    flexDirection: 'column',
    margin:3,
    marginLeft:10,
    padding: 3,
    backgroundColor: '#323639',
    alignSelf: "stretch"
  },

   detaillabel : {
      flex:1,
      //     alignSelf: 'stretch',
      //  alignItems: 'center',
      paddingLeft: 20 ,
      alignItems: 'flex-end',
      fontSize: 18,   
      textAlign:'justify',
      color: '#7E3094',
      fontWeight: 'bold',
      marginBottom: 5,
      paddingTop:0,
      marginTop :0,
      paddingTop:0
    
    },

});

module.exports =DetailPage;
