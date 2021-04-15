import React,{useState,Component} from 'react';
import { Text, View, StyleSheet,Linking} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card,TextInput,Button} from 'react-native-paper';

const AddEmployee = ()=>{
  const [Name,setName]=useState("");
  const [Designation,setDesignation]=useState("");
  const [Phone,setPhone]=useState("");
  const [Email,setEmail]=useState("");
  const [Salary,setsalary]=useState("");
  const [Password,setPassword] = useState("");
  // A modal. . .
   // const [Name,setName]=useState("");
  return(
      <View style={styles.container}>
      <Card style={styles.card}>
      <TextInput style={styles.textInput} 
          theme={theme} 
          label="Enter Employee Name" 
          value={Name} 
          onChangeText={text=>this.setName(text)}/>

      <TextInput style={styles.textInput} 
          theme={theme} 
          label="Enter Designation" 
          value={Designation} 
          onChangeText={text=>this.setDesignation(text)}/>

        <TextInput style={styles.textInput} 
          theme={theme} 
          label="Enter Email Address" 
          value={Email} 
          onChangeText={text=>this.setEmail(text)}/>

          <TextInput style={styles.textInput} 
          theme={theme} 
          label="Enter Phone" 
          value={Phone} 
          keyboardType="number-pad"
          onChangeText={text=>this.setName(text)}/>

           <TextInput style={styles.textInput} 
          theme={theme} 
          label="Total Salary" 
          value={Salary} 
          keyboardType="number-pad"
          onChangeText={text=>this.setSalary(text)}/>

          <TextInput style={styles.textInput} 
          theme={theme} 
          label="Create a Password" 
          value={Password} 
          onChangeText={text=>this.setPassword(text)}/>

          <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>Add Employee</Button>
      </Card>
      </View>
  )
}


const theme ={
  colors:{
    primary:"#0000E7"
  }
}

const styles = StyleSheet.create({
  button:{
    marginTop:12,
    marginLeft:12,
    marginRight:12,
    marginBottom:12,
  },
  textInput:{   
    margin:5
  },

  container: {
    flex:1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddEmployee;
