import React,{useState} from 'react'
import { View,Text ,TextInput,StyleSheet,Button } from 'react-native'
import firebase from 'firebase'
require('firebase/firestore')
const EditCard = (props) => {

    // using params passed from home screen 

    const [title,setTitle]=useState(props.route.params.title)
    const [location,setLocation]=useState(props.route.params.location)
    const [likes,setLikes]=useState(props.route.params.likes)
    const [image,setImage]=useState(props.route.params.imageURL)


    // getting the card we want to update using the card id
    // and updating it
    const editCard=()=>{
        firebase.firestore()
        .collection('cards')
        .doc(props.route.params.id)
        .update({
          title,
          location,
          likes,
          imageURL:image
        })
        .then(() => {
            // if card is edited successfully we will go back to home screen
            props.navigation.goBack()
        });
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

            <Button disabled={!title || !location || !image || !likes} onPress={editCard} title="Save changes" />
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

export default EditCard
