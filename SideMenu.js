import React, { Component } from 'react'
import {
   View,
   ListView,
   Text,
   StyleSheet,
   Image,
    Dimensions,
    TouchableOpacity,
    Navigator

}  from  'react-native'

var NightClub = require('./NightClub');


import StartPage from './index.android';

export default class SideMenu extends  React.Component{
  constructor(props){
    super(props);

    console.log(props.navigator) // <- this will print in console if you are passing a navigator object.
  }
      openNightClub (){
        console.log("detail page run");
    this.props.navigator.push({
            id: 'NightClub',
        });
      }
      close (){
        StartPage.closeControlPanel;
      }
      
render(){
  
  return(
    <View style = {styles.background}>  
      {/*<TouchableOpacity onPress={(this.close.bind(this))}>
            <Image style={styles.image_menu} source={require('./image/ic_menu.png')} />
         </TouchableOpacity>*/}
         <Image style={styles.imageMenu} source={require('./image/menu_img.jpg')} />
      <TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.titleText}>Вечірки</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.openNightClub.bind(this)}>
      <View  style={styles.row}>
        <Text style={styles.titleText}>Нічні Клуби</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View  style={styles.row}>
        <Text style={styles.titleText}>Улюблені Вечірки</Text>
      </View>
      </TouchableOpacity>

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
         padding: 3,
         backgroundColor: '#323639',
         alignSelf: "stretch" 
    },
    titleText: {
    paddingTop:10,
    color: 'white',    
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageMenu : {
    height:200,
    width:370
  }

  })

module.exports = SideMenu;