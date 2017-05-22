import React , {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    ListView,
    Navigator,
    StyleSheet
} from 'react-native';

import Drawer from 'react-native-drawer';

var REQUEST_URL = 'http://whereistheparty.com.ua/getCompanies?townId=14';

class NightClub extends React.Component{

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id_event !== r2.id_event});

        this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        isLoading: true,
        isLoadingData : true, 
      };

      fetch(REQUEST_URL)
      .then((response) => response.json)
      .then((responseData) =>{
            this.state(state => ({
                dataSource : this.state.dataSource.cloneWithRows(responseData),
                isLoading: false
            }))
      }).done();


    }

     static closeControlPanel = () => {
      console.log('sadsasddas');
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

    render(){
        return(
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
          <Text style={styles.titleText}>Нічні Клуби</Text>
          </Animated.View>
         <ListView
            style = {styles.listContainer}
            dataSource = {this.state.dataSource}
            renderRow = {
               (rowData) => (
                  <TouchableOpacity style={styles.row} > 
                      <Image
          style={styles.imageEvent}
          source={{uri: rowData.logo}}
        />
   <View>
       <Text  style = {styles.textName}>{rowData.address}</Text>
                <Text  style = {styles.textEvent}>{rowData.name}</Text>
      <Text numberOfLines={5} style =  {styles.textDescription}>{rowData.description}</Text>
      </View>
       </TouchableOpacity>
       
               )
            }
         />
       
        
      </View>
      </Drawer>
        )

    }

}

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


module.export = NightClub;
