
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  RecyclerViewBackedScrollView,
  Image,
} from 'react-native';

class Cat_API_RN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => false, /*row1 !== row2,*/
      }),
      loaded: false,
    };
  }

  componentDidMount() {
   this._fetchData();
  }

  render() {
    var loaded = this.state.loaded;

    return (
      <View style={styles.container}>

      <View style={[{flex:1, flexDirection:'row', marginTop:20 }]}>
        <TouchableHighlight
          underlayColor={"#3333"}
          onPress={()=>
            this._onPressButton()
          }>
          <Text style={styles.button} >
            Call Cat API
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor={"#3333"}
          onPress={ () =>
            alert("Hello~")
          }>
          <Text style={styles.button} >
            Hello~
          </Text>
        </TouchableHighlight>
        </View>

        <ListView
        style={[
          {flex:10, backgroundColor:"#ffe",
          padding:0, margin:0,
          alignSelf:'stretch'}
        ]}
         dataSource={this.state.dataSource}
         renderRow={this._renderRow}
         /*
         renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
         */
        />

      </View>
    );
  }

  _renderRow (rowData: string, sectionID: number, rowID: number) {
    return (
        <View>
          <View style={styles.row}>
          <Image source={{uri: rowData[0]}} style={styles.catpic} />
          <Image source={{uri: rowData[1]}} style={styles.catpic} />
          </View>
        </View>
    );
  }

  _onPressButton() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([]),
      loaded: false,
    });
    this._fetchData();
  }

  _fetchData() {
      fetch("http://localhost:3000/api/cat-links?link-count=20", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          }}
        )
        .then((response) => response.json())
        .then((responseData) => {
          // console.log(responseData);
          var ar = [];
          for (var i = 0; i < responseData.length; i+=2) {
            ar.push([responseData[i], responseData[i+1]]);
          }
          this.setState({
          dataSource: this.state.dataSource.cloneWithRows(ar),
          loaded: true,
        });
        })
        .catch((error) => {
          console.warn(error);
        })
        .done();
  }
}

const styles = StyleSheet.create({
  base: {},
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
  flexDirection: 'row',
  justifyContent: 'center',
  padding: 0,
  backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  button: {
    padding:8, borderWidth:1, borderRadius:4, margin:10
  },
  catpic: {
    flex:1, padding:1, height:120, borderWidth:1,borderColor:"#fff"
  },
  text: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Cat_API_RN', () => Cat_API_RN);
