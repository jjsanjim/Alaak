import React from "react";
import {Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import styles from "../Styles/BowViewStyles";
import FilterIcon from "../Icons/FilterIcon";
import PenIcon from "../Icons/PenIcon";
import { useNavigation } from "@react-navigation/native";


//props = {data:[]}
function Box(){
    const navigation=useNavigation()


    const team = [
        {
            avatar:require("../Images/Avatar-base(5).png"),
            firstName:"Humberto ",
            lastName:"Alonso",
            area:"UX&UI Manager"
        },
        {
            avatar:require("../Images/Avatar-base(4).png"),
            firstName:"Luis ",
            lastName:"Mota",
            area:"Trainne UX&UI "
        },
        {
            avatar:require("../Images/Avatar-base(3).png"),
            firstName:"César",
            lastName:"Ramón",
            area:"Trainne UX&UI "
        },
        {
            avatar:require("../Images/Avatar-base(2).png"),
            firstName:"Aline",
            lastName:"Palacios",
            area:"Trainne UX&UI "
        },
        {
            avatar:require("../Images/Avatar-base(1).png"),
            firstName:"Nathali",
            lastName:"Ortiz",
            area:"Trainne UX&UI "
        },
        {
            avatar:require("../Images//Avatar-base.png"),
            firstName:"Vanessa",
            lastName:"Luna",
            area:"Trainne UX&UI "
        },
        {
            avatar:require("../Images//Avatar-base.png"),
            firstName:"Vanessa",
            lastName:"Luna",
            area:"Trainne UX&UI "
        },
    ]
    return(
       <SafeAreaView>
    
        
    {        
        //.map me genera un clone del arreglo y lo podemos modificar
        //array.map( (item,index,array,arrayOriginal)=>)
        team.map((item,index)=>{
            return(

                <TouchableOpacity onPress={()=>navigation.navigate("Perfil")}>
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
