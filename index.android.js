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
import {
   ListView,
   View,
   AppRegistry,
   Navigator
} from 'react-native';

import MyPresentationalComponent from './MyPresentationalComponent';

var REQUEST_URL = 'http://whereistheparty.com.ua/getEvents?';
var dateee = new Date();
var wholeDate = dateee.getFullYear() + '-' + ('0' + (dateee.getMonth() + 1)).slice(-2) + '-' + ('0' + dateee.getDate()).slice(-2);
var town = "townId=14";

class StartPage extends React.Component{
  

   constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id_event !== r2.id_event});
      
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2'])
      };
      fetch(REQUEST_URL+'&dateId='+wholeDate+'&'+town)
      .then((response) => response.json())
      .then((responseData) => {
        
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        console.log(responseData.length);
        console.log(dateee.getTime());
         this.setState(state => ({
    dataSource: this.state.dataSource.cloneWithRows(responseData)
    }));


          console.log(this.state.dataSource);
          
      })
      .done();
      
   }
   
   
   render() {
      return (
         <View>
            <MyPresentationalComponent dataSource = {this.state.dataSource} />
         </View>
      );
   }
}

var AwesomeProject = React.createClass ({
render: function() {
         return (
          <Navigator
                 initialRoute={{id: 'StartPage', }}
                 renderScene={this.renderScene} />
        );
   },
   renderScene ( route, navigator ) {
    var routeId = route.id;
    if (routeId === 'StartPage') {
        return (
            <StartPage
                navigator={navigator}/>
        );
    }
    if (routeId === 'DetailPage') {
        return (
            <DetailPage
                navigator={navigator}/>
        );
    }
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
