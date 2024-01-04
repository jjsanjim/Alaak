import React from "react";
import {Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import styles from "../Styles/BowViewStyles";
import FilterIcon from "../Icons/FilterIcon";
import PenIcon from "../Icons/PenIcon";
import { useNavigation } from "@react-navigation/native";


//props = {data:[]}
function Box({data}){
    const navigation=useNavigation()
    return(
       <SafeAreaView>
 
    {        
       //map me genera un clone del arreglo y lo podemos modificar
        //array.map( (item,index,array,arrayOriginal)=>)
        //[]    //{ITEM={AVATAR,NAME,LAST,AREA}
        data.map((item,index)=>
        {
            return(     

                <TouchableOpacity key={index} onPress={()=>navigation.navigate("Perfil", {data:item})}>
                    <View style={styles.squareShape}>
                        <View style={{alignItems:"center", flexDirection:"row"}}>
                            <Image style={styles.fotostyle} source={item.avatar}/>
                                <View style={styles.textShape}>
                                    <Text style={styles.textNames}>{item.firstName} {item.lastName}</Text>
                                    <Text style={styles.textNamesTwo}>{item.area}</Text>
                                </View>
                        </View>
                        <PenIcon/>
                    </View>
                 </TouchableOpacity>
                )
        })
    }
       </SafeAreaView>
    )

}
export default Box;
