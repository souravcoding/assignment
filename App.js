import React from 'react';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Screens/Login';
import Home from './Screens/Home';
import AddCard from './Screens/AddCard';
import EditCard from './Screens/EditCard';


// using firebase in order to store the data
var firebaseConfig = {
  apiKey: "AIzaSyDdDtaq1fGQSL_7qfuXNhmgr5K5KOrY7Sk",
  authDomain: "cards-9bd83.firebaseapp.com",
  projectId: "cards-9bd83",
  storageBucket: "cards-9bd83.appspot.com",
  messagingSenderId: "658800437338",
  appId: "1:658800437338:web:ccdc94ab214497a9569063",
  measurementId: "G-9T8J0R3G8J"
};

if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig)
}

// stack Navigation
const stack=createStackNavigator()

export default function App() {
  

  return (
    <NavigationContainer >
    <stack.Navigator  initialRouteName='login'>
    <stack.Screen component={Login} name='login' 
      options={{ 
      headerShown:false,
      }} />

    <stack.Screen
     component={Home} 
     name='home' />


    <stack.Screen 
    component={AddCard} 
    name='add'
    options={{
      headerTitle:'Add Card'
    }} />


    <stack.Screen 
    component={EditCard} 
    name='edit'
    options={{
      headerTitle:'Edit Card'
    }} />

    </stack.Navigator>
    </NavigationContainer>

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
