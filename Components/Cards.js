import React from 'react'
import { View, Text,Image,StyleSheet,Button} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
const Cards = ({title,image,location,likes,onDelete,onEdit}) => {

    // card component 

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:image}} />
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:18,color:'grey'}} >{title}</Text>
                    <Text style={{fontSize:14,color:'grey'}} >{location}</Text>
                </View>
                
                <View>
                     <Text style={{fontSize:14,color:'grey'}}>{likes} likes</Text>
                </View>
                
            </View>
            <View style={styles.btn}>
            <TouchableOpacity onPress={onDelete}>
            <AntDesign name="delete" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onEdit}>
            <AntDesign name="edit" size={30} color="black" />       
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        width:'100%',
        height:100,
        flexDirection:'row',
        padding:10,
    },
    image:{
        flex:1
    },
    container:{
        flex:2,
        marginLeft:10,
        height:'100%',
        justifyContent:'space-between'
    },
    btn:{
        justifyContent:'space-around'
    },
    

})

export default Cards
