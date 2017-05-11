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

import OpenDetailPage from './OpenDetailPage.js';


  class MyPresentationalComponent extends Component{
   constructor(props) {
    super(props);
   }
  render(){
   return (
      <View style = {styles.background}>
        <View>
          <Text style={styles.titleText}>Вечірки</Text>
          </View>
         <ListView
            style = {styles.listContainer}
            dataSource = {this.props.dataSource}
            renderRow = {
               (rowData) => (
                  <TouchableOpacity style={styles.row} onPress={this.open.bind(this,rowData)}> 
                      <Image
          style={styles.imageEvent}
          source={{uri: rowData.image_event}}
        />
   <View>
       <Text  style = {styles.textName}>{rowData.name_company}</Text>
                <Text  style = {styles.textEvent}>{rowData.name_event}</Text>
      <Text numberOfLines={10} style =  {styles.textDescription}>{rowData.description_event}</Text>
      </View>
       </TouchableOpacity>
       
               )
            }
         />
      </View>
   )
  }

}


const styles = StyleSheet.create ({
    background: {
        flex: 0,
        backgroundColor : '#1C2124'
    },
    titleText: {
        paddingTop:20,
    color: 'white',    
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
     row: {
    flexDirection: 'row',
   margin:3,
   marginLeft:10,
    padding: 3,
    backgroundColor: '#323639',
    alignSelf: "stretch"
  },
   listContainer: {
      marginTop: 0,
      flex: 0,
      alignSelf: "stretch",
      height: 587,
   },
   listItem: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   imageEvent: {
    height:220,
    width: 150
   },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
     alignItems: 'center',
  },
  textView : {
    flexDirection: 'column'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textName:{
    //   flexDirection: 'column',
     flexDirection: 'column',
     flex:1,
    fontSize: 22,   
    textAlign:'justify',
    alignItems: 'flex-end',
    // alignItems: 'center',
    // justifyContent: 'center',
    //  alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingLeft: 20 ,
    color: '#A9AAAD',
    fontWeight: 'bold',
    marginBottom: 0,
    paddingBottom :0,
    marginBottom: 0,
    paddingTop:0,
    marginTop :0,
    paddingTop:0
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
  textDescription  : {
    fontSize: 10,   
    textAlign: 'justify',
    padding:0,
    color: '#A9AAAD',
    fontWeight: 'bold',
    paddingLeft: 20 ,
    paddingRight:150,
    marginBottom: 5,
    marginRight:10,
   
  }
})

module.exports =MyPresentationalComponent;