import React from "react";
import {Text, SafeAreaView, View, StyleSheet, Image,TouchableOpacity} from "react-native";
import styles from "../Styles/styles";
import Calendar from "../Icons/Calendar";
import Documents from "../Icons/Documents";
import { useNavigation } from "@react-navigation/native";
import Medal from "../Icons/Medal";


function Box(){ 
    const navigation=useNavigation();    
    return(
        <SafeAreaView>
            <View style={styles.squareShape}>
                <Text style={styles.textNames}>Información Personal </Text>
                <View style={styles.littleSquare}>
                    <View style={styles.icons}>
                        <Calendar/>
                    </View>
                    <View style={styles.textShape}>
                        <Text style={styles.textBox}> Fecha de Ingreso</Text>                    
                        <Text style={styles.textBox}> 04 de Septiembre de 2023</Text>
                    </View>
                </View>
                <View style={styles.littleSquare}>
                    <View style={styles.icons}>
                        <Documents/>
                    </View>
                    <View style={styles.textShape}>
                        <Text style={styles.textBox}> Cumpleaños</Text>
                        <Text style={styles.textBox}> 12 de Noviembre</Text>                        
                    </View>

                </View>
            </View>
            <View style={styles.squareShape}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.textNames}> Jefe </Text>
                        <Medal/>
                    </View>
                    <Text>Ver Todos  </Text>
                </View>
                <TouchableOpacity /*onPress={()=>navigation.navigate("SignUp")}*/>
                        <View style={styles.persons}>
                            <Image style={styles.fotoBox} source={require("../Images/Avatar-base(5).png")}/>
                            <Text style={styles.personsName}>Humberto</Text>
                            <Text style={styles.personsName}>Alonso</Text>
                        </View>
                                             
                    </TouchableOpacity>
                
                <Text style={styles.textNames}> Equipo de Humberto </Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View style={styles.persons}>
                            <Image style={styles.fotoBox} source={require("../Images/Avatar-base.png")}/>
                            <Text style={styles.personsName}>Vanessa</Text>
                            <Text style={styles.personsName}>Luna</Text>
                        </View>
                        <View style={styles.persons}>
                            <Image style={styles.fotoBox} source={require("../Images/Avatar-base(1).png")}/>
                            <Text style={styles.personsName}>Aline</Text>
                            <Text style={styles.personsName}>Palacios</Text>
                        </View>
                        <View style={styles.persons}>
                            <Image style={styles.fotoBox} source={require("../Images/Avatar-base(3).png")}/>
                            <Text style={styles.personsName}>Nathali</Text>
                            <Text style={styles.personsName}>Ortíz</Text>
                        </View>
                        <View style={styles.persons}>
                            <Image style={styles.fotoBox} source={require("../Images/Avatar-base(2).png")}/>
                            <Text style={styles.personsName}>Cesar</Text>
                            <Text style={styles.personsName}>Ramos</Text>
                        </View>
                    </View>    
                        
            </View>
        </SafeAreaView>
    );
};
export default Box;
