import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity} from "react-native";
import Box from "../../component/BoxView";
import styles from "../../component/Styles/styles";
import { useNavigation } from "@react-navigation/native";
import CardSend from "../../component/Icons/CardSend";
import ScanBar from "../../component/Icons/ScanBar";
import Add from "../../component/Icons/Add";
import Credential from "../../component/BoxView/credential";

function AlaakScene(){
    const navigation= useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
                <Text style={styles.textone}>
                    Organigrama
                </Text>
            </View>
                <View style={styles.main}>
                    <Credential/>
                    <View style={styles.buttonBox}>
                    <TouchableOpacity style={{alignItems:"center"}} /*onPress={()=>navigation.navigate("SignUp")}*/>
                        <View style={styles.items}>
                            <CardSend/>
                        </View>
                        <Text>Transferir</Text>                     
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center"}} /*onPress={()=>navigation.navigate("SignUp")}*/>
                        <View style={styles.items}>
                            <ScanBar/>
                        </View>
                        <Text>QR</Text>                     
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center"}} /*onPress={()=>navigation.navigate("SignUp")}*/>
                        <View style={styles.items}>
                            <Add/>
                        </View>                     
                    </TouchableOpacity>                         
                    </View>
                    <View style={styles.outext}>
                    </View>
                    <Box/>
                </View>
            </ScrollView>
        </SafeAreaView>

    );

}
export default AlaakScene;

