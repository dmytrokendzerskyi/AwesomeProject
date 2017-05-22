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


import StartPage from './index.android';

export default class SideMenu extends  React.Component{
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
      close (){
        StartPage.closeControlPanel;
      }
      
render(){
  
  return(
    <View style = {styles.background}>  
      <TouchableOpacity onPress={(this.close.bind(this))}>
            <Image style={styles.image_menu} source={require('./image/ic_menu.png')} />
         </TouchableOpacity>
      <View style={styles.row}>
        <Text>Вечірки</Text>
      </View>
      <View  style={styles.row}>
        <Text>Нічні Клуби</Text>
      </View>
      <View  style={styles.row}>
        <Text>Улюблені Вечірки</Text>
      </View>

    </View>

  )
}

}  

 const styles = StyleSheet.create ({
    background: {
        flex: 1,
        backgroundColor : '#1C2124'
    },
    row:{
         borderWidth: 1,
         flexDirection: 'row',
         margin:3,
         marginLeft:10,
         padding: 3,
         backgroundColor: '#323639',
         alignSelf: "stretch" 
    }

  })

module.exports = SideMenu;