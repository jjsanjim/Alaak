import React, {useMemo,useRef} from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity} from "react-native";
import Box from "../../component/BoxView";
import styles from "../../component/Styles/styles";
import { useNavigation } from "@react-navigation/native";
import CardSend from "../../component/Icons/CardSend";
import ScanBar from "../../component/Icons/ScanBar";
import Add from "../../component/Icons/Add";
import Credential from "../../component/BoxView/credential";
import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import RhSheet from "../../component/BottomSheets/rhbottomsh";

function AlaakScene(){
    const navigation= useNavigation()
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '100%'], []);
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
                    <TouchableOpacity style={{alignItems:"center"}} onPress={()=>navigation.navigate("Home")}>
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

            <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enableOverDrag
            enablePanDownToClose={true}
            backgroundStyle={{backgroundColor:"#fff"}}
            backdropComponent={(props) => (
                <BottomSheetBackdrop
                {...props}
                opacity={0.5}
                enableTouchThrough={false}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                style={[{backgroundColor:'rgba(0, 0, 0, 1)'}, StyleSheet.absoluteFillObject]}
                />
            )}
        >
            <ScrollView>
                <RhSheet/>
            </ScrollView>
            </BottomSheet>
        </SafeAreaView>

    );

}
export default AlaakScene;

