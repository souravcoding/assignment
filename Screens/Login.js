import React, { useState } from 'react'
import { View,Image,TextInput,StyleSheet,Button,Alert } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
const Login = (props) => {
    const [mail,setMail]=useState('')
    const [password,setPassword]=useState('')
    const [validEmail,setValidEmail]=useState(false)
    const [isPassword,setIsPassword]=useState(false)
    const [isPasswordLength,setIsPasswordLength]=useState(false)
    const [isNumeric,setIsNumeric]=useState(false)
    const [isSpecialCharcter,setIsSpecialCharcter]=useState(false)

    // email validation
    const handleEmail=(text)=>{
            let reg =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (reg.test(text) === false) {
                setValidEmail(false)
            }
           else {
                setValidEmail(true)
           }
       
              setMail(text)
    }

    // password Validation 
    const handlePassword=(text) => {
        let txt = text
        if (txt.length > 0) {
          setIsPassword(true)
        } else {
          setIsPassword(false)
        }
    
        if (txt.length >= 8) {
            setIsPasswordLength(true)
        } else {
            setIsPasswordLength(false)
        }
    
        if (txt.match(/[0-9]/) != null) {
            setIsNumeric(true)
        } else {
            setIsNumeric(false)
        }
    
        if (txt.match(/[!@#$%^&*]/) != null) {
            setIsSpecialCharcter(true)
        } else {
            setIsSpecialCharcter(false)
        }
    
        setPassword(text)
      }

      
    
    // onLogin if email or password is not validate it will show an alert
    // else move to home screen
    const onLogin=(mail,password)=>{
        if(!validEmail){
            Alert.alert('InValid Email','Please check your Email')
            return;
        }

        if(!isPassword || !isPasswordLength || !isSpecialCharcter || !isNumeric){
            Alert.alert('Invalid Password','Your Password must include  a Numeric value, special character,And length must be greater or equal to 8 ')
            return;
        }

        console.log('logged in');
        props.navigation.replace('home')

    }

    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={{uri:'https://i.pinimg.com/originals/36/09/aa/3609aa05384b66c57c0417044228d8f6.jpg'}}/>
           <View style={styles.text_container}>
                <AntDesign name="mail" size={20} color="black" />
                <TextInput 
                        value={mail} 
                        onChangeText={text=>handleEmail(text)} 
                        style={styles.input} 
                        autoFocus 
                        placeholder='Enter an E-mail' />
                
           </View>
           
            <View style={styles.text_container}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput 
                    value={password} 
                    onChangeText={text=>handlePassword(text)} 
                    style={styles.input} 
                    secureTextEntry  
                    placeholder='Enter password' />
            </View>
            
            <View style={styles.btn}>
                <Button onPress={()=>onLogin(mail,password)} title="login"  />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        borderBottomWidth:1,
        width:'60%',
        padding:10,
        marginBottom:10
    },
    btn:{
        marginTop:10,
        width:'60%'
    },
    logo:{
        width:150,
        height:150,
        borderRadius:20,
        marginBottom:20
    },
    text_container:{
        flexDirection:'row',
        alignItems:'center'
    }
  });
  

export default Login
