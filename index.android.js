/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


/**
 * DeepThoughts App v 0.1
 */

var ReactNative = require('react-native');
var React = require('react');
var DetailPage = require('./DetailPage');
var NightClub = require('./NightClub');

import {
   ListView,
   View,
   AppRegistry,
   Navigator,
      StyleSheet,
   Image,
   Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    ViewPagerAndroid,
     Animated,
} from 'react-native';

var ScrollingMenu = require('react-native-scrolling-menu');
import MyPresentationalComponent from './MyPresentationalComponent';
import Drawer from 'react-native-drawer';
import SideMenu from './SideMenu';

var REQUEST_URL = 'http://whereistheparty.com.ua/getEvents?';
var REQUEST_DATE = 'http://whereistheparty.com.ua/getEvents_dates';
var dateee = new Date();
var wholeDate = dateee.getFullYear() + '-' + ('0' + (dateee.getMonth() + 1)).slice(-2) + '-' + ('0' + dateee.getDate()).slice(-2);
var today = dateee.getFullYear() + '-' + ('0' + (dateee.getMonth() + 1)).slice(-2) + '-' + ('0' + dateee.getDate()).slice(-2);
var town = "townId=14";
let items = [];
var itemSpace;

class StartPage extends React.Component{
  

   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id_event !== r2.id_event});
      
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        date:  ds.cloneWithRows(['row 1', 'row 2']),
        isLoading: true,
        isLoadingData : true, 
      };

      fetch(REQUEST_DATE)
      .then((response) => response.json())
      .then((responseData) => {
        var dat = new Array(responseData.length);
        var it= new Array(responseData.length);
        for(i=0 ; i<responseData.length ; i++){
        dat[i] = responseData[i].date_event;
        console.log(dat);
      }
      for(i=0 ; i<dat.length ; i++){
        for(j=0; j<dat.length; j++){
          var dChange;
          if(dat[i].substring(0,4)*1000+dat[i].substring(5,7)*100+dat[i].substring(8,10) < dat[j].substring(0,4)*1000+dat[j].substring(5,7)*100+dat[j].substring(8,10)){
            dChange = dat[i];
            dat[i]=dat[j];
            dat[j]=dChange;
          }
        }
      }
      var k=0;
      var arrayLenght;
      for(i=0 ; i<dat.length ; i++){
        var j= 1;
        while(dat[i] == dat[i+j] ){
          j++;
        }
      it[k]= dat[i]; 
      if(dat[i] == dat[i+1]) {
      i=i+j;
      } else{
        i=i;
      }
      k++;
      arrayLenght =k;
    }
    console.log("fdsfdssfdfsdfsdf  "+arrayLenght);
    items = new Array(arrayLenght);
    itemSpace = arrayLenght;
    for(i=0 ; i<items.length; i++){
      console.log(it[i]);
      if(it[i] == null){
      }else{
        if(it[i]== wholeDate){
          items[i]= "Сьогодні"
        }else{
        items[i] = it[i];  
        }
      }
    }
    this.state.isLoadingData = false;
      });

      fetch(REQUEST_URL+'&dateId='+wholeDate+'&'+town)
      .then((response) => response.json())
      .then((responseData) => {
        
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        console.log(responseData.length);
        console.log(dateee.getTime());
         this.setState(state => ({
    dataSource: this.state.dataSource.cloneWithRows(responseData),
     isLoading: false
  }));       
      })
      .done();
      console.log(this.state.data);
          console.log(this.state.dataSource);
      
   }


    static closeControlPanel = () => {
      console.log('sadsasddas');
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
   
   render() {
     if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20 , backgroundColor:'black'}}>
          <ActivityIndicator />
        </View>
      );
    }
    /*if(this.state.isLoadingData){
      return(

            <View style = {styles.background}>
              <ScrollView>
        <View>
          <Text style={styles.titleText}>Вечірки</Text>
          </View>
          <ScrollingMenu
      items={items}
      callback={this.onClick.bind(this)}
      backgroundColor="#ffffff"
      textColor="#cccccc"
      selectedTextColor="#000000"
      itemSpacing={10} />
          <View style={{flex: 1, paddingTop: 20 , backgroundColor:'black'}}>
          <ActivityIndicator />
        </View>
         </ScrollView>
      </View>

      );

    }*/
      return (
         <Drawer
        ref={(ref) => this._drawer = ref}
        openDrawerOffset = {50}
        tapToClose ={false}
        type = {'overlay'}
        content={<SideMenu/>}
        >
      
            <View style = {styles.background}>
            
        <Animated.View>
          <TouchableOpacity onPress={(this.openControlPanel.bind(this))}>
            <Image style={styles.image_menu} source={require('./image/ic_menu.png')} />
         </TouchableOpacity>
          <Text style={styles.titleText}>Вечірки</Text>
          </Animated.View>
          <ScrollingMenu
      items={items}
      callback={this.onClick.bind(this)}
      backgroundColor="#ffffff"
      textColor="#cccccc"
      selectedTextColor="#000000"
      rowHasChanged = "red"
      arrayLenght = {itemSpace}
      itemSpacing={10} />
   
         <ListView
            style = {styles.listContainer}
            dataSource = {this.state.dataSource}
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
      <Text numberOfLines={5} style =  {styles.textDescription}>{rowData.description_event}</Text>
      </View>
       </TouchableOpacity>
       
               )
            }
         />
       
        
      </View>
      </Drawer>
      );
   }
   onClick(itemIndex) {
  console.log("Selected: " + items[itemIndex]);
  if(items[itemIndex] == "Сьогодні"){
    wholeDate = today;
  }else{
  wholeDate = items[itemIndex] ;
  }
        fetch(REQUEST_URL+'&dateId='+wholeDate+'&'+town)
      .then((response) => response.json())
      .then((responseData) => {
        
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        console.log(responseData.length);
        console.log(dateee.getTime());
         this.setState(state => ({
    dataSource: this.state.dataSource.cloneWithRows(responseData),
     isLoading: false
  }));       
      })
   
}
         open(rowData){
           
    this.props.navigator.push({
            id: 'DetailPage',
            data: rowData
        });
        
 }
 openMenu(){}
}

var AwesomeProject = React.createClass ({
render: function() {
         return (
          <Navigator
                 initialRoute={{id: 'StartPage'}}
                 renderScene={this.renderScene} 
     configureScene={(route) => {
    
      return Navigator.SceneConfigs.FloatFromRight;

  }}
                 />
        );
   },
   renderScene ( route, navigator) {
    var routeId = route.id;
    var routeData = route.data;
    if (routeId === 'StartPage') {
        return (
            <StartPage
                navigator={navigator}/>
        );
    }
    if (routeId === 'DetailPage') {
        return (
            <DetailPage
                navigator={navigator} data={routeData} />
        );
    }
    if(routeId === 'NightClub'){
      return (
        <NightClub
              navigator={navigator} />
      )
    }
}
})
   
  const styles = StyleSheet.create ({
    background: {
        flex: 0,
        backgroundColor : '#1C2124'
    },
    titleText: {
    paddingTop:10,
    color: 'white',    
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image_menu :{
    width:20,
    height: 20
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
//       flexDirection: 'column',
//    alignSelf: 'stretch',
    
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


module.exports =StartPage;



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
















/*'use strict';
 
var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView
} = ReactNative;
 
var MOCKED_DATA = [
  {title: 'Deep Thought #1', content: "If there's no 'there' there, where is it and what's there?"},
];
// The URL for the `posts` endpoint provided by WP JSON API
var REQUEST_URL = 'http://whereistheparty.com.ua/getEvents?dateId=2017-04-24&townId=14';

 var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var AwesomeProject = React.createClass({
  getInitialState: function() {
    return {
       dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  },
_renderRow(rowData, sectionID, rowID) {
      console.log(rowData);
       return (<View style={styles.row}>
               <Text>{rowData.name_event}</Text>
      <Text>{rowData.description_event}</Text>
      <Text>{rowData.name_company}</Text>
       </View>
    
       );
   },
  /*renderRow: function(rowData) {
  return (
    <View style={styles.row}>
      <Text>{rowData.name_event}</Text>
      <Text>{rowData.description_event}</Text>
      <Text>{rowData.name_company}</Text>
    </View>
  );
},*/
  // Automatically called by react when this component has finished mounting.
  /*componentDidMount: function() {
    this.fetchData();
  },
  // This is where the magic happens! Fetches the data from our API and updates the application state.
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        console.log(responseData.length);
         for (var i = 0; i < responseData.length; i++)
          {

        this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseData[i]),
        });
          }
          console.log(this.state.dataSource);
          
      })
      .done();
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <ListView 
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
            />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#ccc'
          >
            <Text style={styles.buttonText}>Hmmmmm...</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});
 
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
 
var styles = StyleSheet.create({
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
  buttonContainer: {
    bottom: 0,
    flex: .1,
    width: windowSize.width,
    backgroundColor: '#eee',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#666666',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);*/
