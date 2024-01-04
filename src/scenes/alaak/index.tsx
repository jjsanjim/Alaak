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
import { t } from "../../styles";
import { fontConfig } from "../../styles/Typography";

function AlaakScene({route}){
    const navigation= useNavigation()
    const bottomSheetRef = useRef<BottomSheet>(null);
    const SnapPoints = useMemo( ()=> ["25%", "75%"],[]);
    const dataProfile = route.params.data
    /*const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(points); */
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={[t.bgGray800, t.flex3, t.justifyStart, t.itemsCenter, t.p4]}>
                <Text style={[fontConfig["tag-title-level-2"], t.textWhite]}>
                    Organigrama
                </Text>
            </View>
                <View style={styles.main}>
                    <Credential dataProfile={dataProfile} />
                    <View style={styles.buttonBox}>
                    <TouchableOpacity style={[t.itemsCenter]} onPress={()=>navigation.navigate("Home")}>
                        <View style={styles.items}>
                            <CardSend/>
                        </View>
                        <Text>Transferir</Text>                     
                    </TouchableOpacity>
                    <TouchableOpacity style={[t.itemsCenter]} /*onPress={()=>navigation.navigate("SignUp")}*/>
                        <View style={styles.items}>
                            <ScanBar/>
                        </View>
                        <Text>QR</Text>                     
                    </TouchableOpacity>
                    <TouchableOpacity style={[t.itemsCenter]} /*onPress={()=>navigation.navigate("SignUp")}*/>
                        <View style={styles.items}>
                            <Add/>
                        </View>                     
                    </TouchableOpacity>                         
                    </View>
                    <View style={styles.outext}>
                    </View>
                    <Box onViewAll={()=>{
                        bottomSheetRef.current?.expand()}}/>
                </View>
            </ScrollView>

            <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={SnapPoints}
           /* handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight} */
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

