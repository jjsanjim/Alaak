import React from "react";
import { Text, View, Alert} from "react-native";
import styles from "../Styles/styles";
import Input from "../AleBoxView/input";
import SearchIcon from "../Icons/SearchIcon";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import Calendar from "../Icons/Calendar";
import Documents from "../Icons/Documents";


function RhSheet(){
    return(
        <View style={styles.squareShape}>
                <Text style={styles.textNames}>Información Personal </Text>
                <View>
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
                            <Text style={styles.textBox}> RFC</Text>
                            <Text style={styles.textBox}> NATA9602</Text>                        
                        </View>
                    </View>
                    <View style={styles.littleSquare}>
                        <View style={styles.icons}>
                            <Documents/>
                        </View>
                        <View style={styles.textShape}>
                            <Text style={styles.textBox}> CURP</Text>                    
                            <Text style={styles.textBox}> NATA960202MDFLML04</Text>
                        </View>
                    </View>
                    <View style={styles.littleSquare}>
                        <View style={styles.icons}>
                            <Documents/>
                        </View>
                        <View style={styles.textShape}>
                            <Text style={styles.textBox}> Dirección</Text>                    
                            <Text style={styles.textBox}> AV. Del Imán, Tlalpan CDMX</Text>
                        </View>
                    </View>
                    <View style={styles.littleSquare}>
                        <View style={styles.icons}>
                            <Documents/>
                        </View>
                        <View style={styles.textShape}>
                            <Text style={styles.textBox}> NSS</Text>                    
                            <Text style={styles.textBox}> 54781254NSS</Text>
                        </View>
                    </View>
                    <View style={styles.littleSquare}>
                        <View style={styles.icons}>
                            <Documents/>
                        </View>
                        <View style={styles.textShape}>
                            <Text style={styles.textBox}> CV</Text>                    
                            <Text style={styles.textBox}> ...</Text>
                        </View>
                    </View>
                </View>
            </View>
        
    );
};
export default RhSheet;