
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './stuff/loginPage.jsx';

export default function App() {
  return (
   



    
    <View style={styles.container}>
      <Text>Log in!</Text>
      <Login/>
    </View>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

  
});
