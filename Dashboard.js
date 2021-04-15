import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView} from 'react-native'
import Touchable from 'react-native-platform-touchable';
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { Title } from 'react-native-paper';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //default value of the date time
          date: '',
        };
      }
      componentDidMount(){
        var that = this;

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
       // var hours = new Date().getHours(); //Current Hours
       // var min = new Date().getMinutes(); //Current Minutes
        //var sec = new Date().getSeconds(); //Current Seconds
    
        that.setState({
          //Setting the value of the date time
          date: date + '/' + month + '/' + year
        });
      }
  render() {
    return(
      <ScrollView>
    <SafeAreaView>
        <Appbar style={styles.bottom}>
        <Appbar.Action
            icon="archive" onPress={() => console.log('Pressed archive')}/>
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete"onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
      <View style={styles.container}>
        
      <View style={styles.row}>
          <Touchable style={[styles.singlewidget]}>
            <View style={{alignItems:"center"}}>
            <Text style={{fontSize:20,color:"red",fontWeight: 'bold'}}>{this.state.date}</Text>   
            </View>
          </Touchable>

        </View>


        <View style={styles.row}>
          <Touchable style={[styles.widgets]}>
            <View style={{alignItems:"center"}}>
                <Avatar.Icon size={50} icon="folder"/>
                <Title style={{fontSize:12,fontWeight: 'bold'}}>Total Employees</Title>
                <Text style={{fontSize:20,color:"red",fontWeight: 'bold'}}>   12 </Text>
            </View>
          </Touchable>

          <Touchable style={styles.widgets}>
          <View style={{alignItems:"center"}}>
                <Avatar.Icon size={50} icon="folder"/>
                <Title style={{fontSize:12,fontWeight: 'bold'}}>Total Students</Title>
                <Text style={{fontSize:20,color:"red",fontWeight: 'bold'}}>50</Text>
            </View>
          </Touchable>
        </View>

        <View style={styles.row}>
          <Touchable style={[styles.widgets]}>
          <View style={{alignItems:"center"}}>
                <Avatar.Icon size={50} icon="folder"/>
                <Text style={{fontSize:20,color:"red",fontWeight: 'bold'}}> 1 </Text>
                <Title style={{fontSize:12,fontWeight: 'bold'}}>Leave Requests</Title>
               
            </View>
          </Touchable>

          <Touchable style={styles.widgets}>
          <View style={{alignItems:"center"}}>
                <Avatar.Icon size={50} icon="folder"/>
                <Text style={{fontSize:20,color:"red",fontWeight: 'bold'}}> 1 </Text>
                <Title style={{fontSize:12,fontWeight: 'bold'}}>Employee Present</Title>
               
            </View>
          </Touchable>
        </View>


        <View style={styles.row}>
          <Touchable style={[styles.widgets]}>
          <View style={{alignItems:"center"}}>
                <Avatar.Icon size={50} icon="folder"/> 
                <Text style={{fontSize:20,color:"red",fontWeight: 'bold'}}>3</Text>
                <Title style={{fontSize:12,fontWeight: 'bold'}}>Total Absentees</Title>
               
            </View>
          
          </Touchable>

          <Touchable style={styles.widgets}>
          <View style={{alignItems:"center"}}>
                <Avatar.Icon size={50} icon="folder"/> 
                <Text style={{fontSize:20,color:"red",fontWeight: 'bold'}}> 100000 </Text>
                <Title style={{fontSize:12,fontWeight: 'bold'}}>Total Salary Paid</Title>
               
            </View>
          </Touchable>
        </View>

        
        
    
      </View>
      </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor:"#E8E8E8"
  },
  row: {
    flex: 1,
    flexDirection: 'row',
     height:120,
     marginTop:20,
     marginBottom:10,

  },
  title:{
    height:20,
    backgroundColor:"green",
  },
  singlewidget: { 
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    elevation: 2,
    flex: 1,
    height:50, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  tinyLogo: {
    width:100,
    height: 100,
  },
  widgets: { 
    backgroundColor: 'white',
    elevation: 2,
    flex: 1,
    height:130,
    marginBottom:10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen;
