import React from "react";
import {Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import styles from "../Styles/BowViewStyles";
import FilterIcon from "../Icons/FilterIcon";
import PenIcon from "../Icons/PenIcon";
import { useNavigation } from "@react-navigation/native";




function Box(){
    const navigation=useNavigation()
    return(
       <SafeAreaView>
           <View style={styles.squareShape}>
               <View style={{alignItems:"center", flexDirection:"row"}}>
                   <Image style={styles.fotostyle} source={require("../Images/Avatar-base(5).png")}/>
                       <View style={styles.textShape}>
                           <Text style={styles.textNames}> Humberto Alonso </Text>
                           <Text style={styles.textNamesTwo}> UX&UI Manager</Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
               <View style={{alignItems:"center", flexDirection:"row"}}>
                   <Image style={styles.fotostyle} source={require("../Images/Avatar-base(4).png")}/>
                       <View style={styles.textShape}>
                           <Text style={styles.textNames}> Luis Mota </Text>
                           <Text style={styles.textNamesTwo}> Trainne UX&UI </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
               <View style={{alignItems:"center", flexDirection:"row"}}>
                   <Image style={styles.fotostyle} source={require("../Images/Avatar-base(2).png")}/>
                       <View style={styles.textShape}>
                           <Text style={styles.textNames}> César Ramón </Text>
                           <Text style={styles.textNamesTwo}> Trainne UX&UI </Text>
                        </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
                <View style={{alignItems:"center", flexDirection:"row"}}>
                    <Image style={styles.fotostyle} source={require("../Images/Avatar-base(1).png")}/>
                        <View style={styles.textShape}>
                           <Text style={styles.textNames}> Aline Palacios </Text>
                           <Text style={styles.textNamesTwo}> Trainne UX&UI </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           <TouchableOpacity onPress={()=>navigation.navigate("Perfil")}>
           <View style={styles.squareShape}>
           <View style={{alignItems:"center", flexDirection:"row"}}>
               <Image style={styles.fotostyle} source={require("../Images/Avatar-base(3).png")}/>
               <View/>
                   <View style={styles.textShape}>
                       <Text style={styles.textNames}> Nathali Ortiz </Text>
                  
                       <Text style={styles.textNamesTwo}> Trainne UX&UI </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           </TouchableOpacity>
           <View style={styles.squareShape}>
           <View style={{alignItems:"center", flexDirection:"row"}}>
               <Image style={styles.fotostyle} source={require("../Images/Avatar-base.png")}/>
               <View/>
                   <View style={styles.textShape}>
                       <Text style={styles.textNames}> Vanessa Luna </Text>
                  
                       <Text style={styles.textNamesTwo}> Trainne UX&UI </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
       </SafeAreaView>
    )

}
export default Box;
