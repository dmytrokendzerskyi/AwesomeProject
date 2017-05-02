import React, { Component } from 'react'
import {
   View,
   ListView,
   Text,
   StyleSheet,
   Image,
    Dimensions,
    TouchableOpacity

}  from  'react-native'


export default class OpenDetailPage extends  React.Component{
  constructor(props){
    super(props);

    console.log(props.navigator) // <- this will print in console if you are passing a navigator object.
  }
      open (){
        console.log("detail page run");
  var navigator = this.props.navigator
        navigator.replace({
            id: 'DetailPage',
        });
      }
}  
module.exports = OpenDetailPage;