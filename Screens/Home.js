import React,{useEffect, useLayoutEffect, useState} from 'react'
import { View, Text,TouchableOpacity, FlatList,StyleSheet  } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import firebase from 'firebase'
import { ActivityIndicator } from 'react-native'
import Cards from '../Components/Cards'
require('firebase/firestore')
const Home = ({navigation}) => {
    // using useState for setting up the list of all the cards
    const [cardsList,setCardsList]=useState([])

    // styling the header
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Cards',
            headerRight:()=>(
                <View style={{
                marginRight:20,
                flexDirection:'row',
                justifyContent:'space-between',
                }}>
                <TouchableOpacity>
                    <Ionicons
                     name="add-circle" 
                     size={30} 
                     color="black"
                     onPress={()=>navigation.navigate('add')} />
                </TouchableOpacity>
                </View>
            ),
           
        })
    })


    // getting the data of cards and setting in our cardsList array
    useEffect(()=>{
        
        firebase.firestore().collection('cards')
        .onSnapshot(snapshot=>{
            let cards=[]
            snapshot.docs.map(doc=>{
                let card={
                    id:doc.id,
                    likes:doc.data().likes,
                    title:doc.data().title,
                    location:doc.data().location,
                    imageURL:doc.data().imageURL
                }
                console.log(card);
                cards=[...cards,card]
            })
            
            setCardsList(cards)
        })
    },[])

    // onpressing delete icon card will be deleted using the id of card
    const deleteCard=(id)=>{
        firebase.firestore()
        .collection('cards')
        .doc(id).delete()
        .then(()=>console.log('deleted'))
    }


    // on clicking on edit icon you will move to edit screen
    // passing params to the edit screen
    const editCard=(id,likes,title,imageURL,location)=>{
        navigation.navigate('edit',{id,likes,title,imageURL,location})
    }


    // in case if there no cards available
    if(cardsList.length==0){
        return <View style={{...styles.screen,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Add Cards</Text>
        </View>
    }

    return (
        <View style={styles.screen}>
        {/* using FlatList in order to show all the cards and make it scrollable */}
            <FlatList data={cardsList} 
            renderItem={({item})=>{
                return <Cards likes={item.likes}
                            title={item.title}
                            image={item.imageURL}
                            location={item.location}
                            onDelete={()=>deleteCard(item.id)}
                            onEdit={()=>editCard(item.id,item.likes,item.title,item.imageURL,item.location)}
                               />
            }}
              />
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    }
})

export default Home
