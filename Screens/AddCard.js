import React,{useState} from 'react'
import { View,Text ,TextInput,StyleSheet,Button } from 'react-native'
import firebase from 'firebase'
require('firebase/firestore')
const AddCard = (props) => {
    const [title,setTitle]=useState('')
    const [location,setLocation]=useState('')
    const [likes,setLikes]=useState('')
    const [image,setImage]=useState('')

    // in order to add card you need to fill all the inputs
    
    // adding new card in our collection
    const addCard=()=>{
        firebase.firestore()
        .collection('cards')
        .add({
            title,
            likes,
            location,
            imageURL:image
        }).then(()=>{
            // if card is added successfully we will go back to home screen
            props.navigation.goBack()
        })
    }

    return (
        <View style={styles.screen}>
            <TextInput 
            style={styles.input}
            value={image} 
            onChangeText={(text)=>setImage(text)}  
            placeholder="Enter Image URL" />

            <TextInput 
            style={styles.input}
            value={title} 
            onChangeText={(text)=>setTitle(text)}  
            placeholder="Card Title" />

            <TextInput 
            style={styles.input}
            value={location} 
            onChangeText={(text)=>setLocation(text)}  
            placeholder="Location" />

            <TextInput 
            keyboardType="number-pad"
            style={styles.input}
            value={likes} 
            onChangeText={(text)=>setLikes(text)}  
            placeholder='Likes' />

            <Button disabled={!title || !location || !image || !likes} onPress={addCard} title="Add Card" />
        </View>
    )
}

const styles=StyleSheet.create({

    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderBottomWidth:1,
        height:40,
        width:'80%',
        marginBottom:10

    }
})

export default AddCard
