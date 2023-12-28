import React from "react";
import {Text, SafeAreaView, View, StyleSheet, Image} from "react-native";
import styles from "../Styles/BowViewStyles";
import FilterIcon from "../Icons/FilterIcon";
import PenIcon from "../Icons/PenIcon";




const Box= () =>
       <SafeAreaView>
           <View style={styles.squareShape}>
               <View style={{alignItems:"center", flexDirection:"row"}}>
               <Image style={styles.fotostyle} source={require("../Images/Avatar-base(6).png")}/>
                       <View style={styles.textShape}>
                           <Text style={styles.textNames}> Amaury Almanza </Text>
                           <Text style={styles.textNamesTwo}> CEO</Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
               <View style={{alignItems:"center", flexDirection:"row"}}>
                   <Image style={styles.fotostyle} source={require("../Images/Avatar-base(7).png")}/>
                       <View style={styles.textShape}>
                           <Text style={styles.textNames}> Emilio Camargo </Text>
                           <Text style={styles.textNamesTwo}> CTO </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
               <View style={{alignItems:"center", flexDirection:"row"}}>
                   <Image style={styles.fotostyle} source={require("../Images/Avatar-base(8).png")}/>
                       <View style={styles.textShape}>
                           <Text style={styles.textNames}> César Mendoza </Text>
                           <Text style={styles.textNamesTwo}> VP </Text>
                        </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
                <View style={{alignItems:"center", flexDirection:"row"}}>
                    <Image style={styles.fotostyle} source={require("../Images/Avatar-base(5).png")}/>
                        <View style={styles.textShape}>
                           <Text style={styles.textNames}> Humberto Alonso </Text>
                           <Text style={styles.textNamesTwo}> UX&UI Manager </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
           <View style={{alignItems:"center", flexDirection:"row"}}>
               <Image style={styles.fotostyle} source={require("../Images/Avatar-base(9).png")}/>
               <View/>
                   <View style={styles.textShape}>
                       <Text style={styles.textNames}> Claudia Rodríguez </Text>
                  
                       <Text style={styles.textNamesTwo}> Product </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
           <View style={styles.squareShape}>
           <View style={{alignItems:"center", flexDirection:"row"}}>
               <Image style={styles.fotostyle} source={require("../Images/Avatar-base(10).png")}/>
               <View/>
                   <View style={styles.textShape}>
                       <Text style={styles.textNames}> Juan Rivera </Text>
                  
                       <Text style={styles.textNamesTwo}> App MovileI </Text>
                       </View>
               </View>
               <PenIcon/>
           </View>
       </SafeAreaView>
      


export default Box;
