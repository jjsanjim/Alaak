import React, {useMemo, useRef} from "react";
import {Text, SafeAreaView, View, StyleSheet, Image,TouchableOpacity, ScrollView} from "react-native";
import styles from "../Styles/styles";
import Calendar from "../Icons/Calendar";
import Documents from "../Icons/Documents";
import { useNavigation } from "@react-navigation/native";
import Medal from "../Icons/Medal";
import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import RhSheet from "../BottomSheets/rhbottomsh";


function Box(){ 
    const navigation=useNavigation();
    const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '100%'], []);
  const designTeam = [

{
    avatar:require("../Images/Avatar-base(2).png"),
    firstName:"César",
    lastName:"Ramón",
    area:"Trainne UX&UI "
},
{
    avatar:require("../Images/Avatar-base(1).png"),
    firstName:"Aline",
    lastName:"Palacios",
    area:"Trainne UX&UI "
},
{
    avatar:require("../Images/Avatar-base(3).png"),
    firstName:"Nathali",
    lastName:"Ortiz",
    area:"Trainne UX&UI "
},
{
    avatar:require("../Images//Avatar-base.png"),
    firstName:"Vanessa",
    lastName:"Luna",
    area:"Trainne UX&UI "
}
]  
   
    return(
        <SafeAreaView>
            <View style={styles.squareShape}>
                <Text style={styles.textNames}>Información Personal </Text>
                <View>
                    <View style={styles.littleSquare}>
                        <View style={{flexDirection:"row"}}>
                            <View style={styles.icons}>
                                <Calendar/>
                            </View>
                            <View style={styles.textShape}>
                                <Text style={styles.textBox}> Fecha de Ingreso</Text>                    
                                <Text style={styles.textBoxtwo}> 04 de Septiembre de 2023</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.littleSquare}>
                        <View style={{flexDirection:"row"}}>
                            <View style={styles.icons}>
                                <Documents/>
                            </View>
                            <View style={styles.textShape}>
                                <Text style={styles.textBox}> Cumpleaños</Text>
                                <Text style={styles.textBoxtwo}> 02 de Febrero</Text>                        
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{alignItems:"flex-end"}}onPress={()=>bottomSheetRef.current?.expand(BottomSheet)}>
                    <Text>ver todo  </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.squareShape}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.textNames}> Jefe </Text>
                        <Medal/>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("Organization")}>
                    <Text>ver todos  </Text>
                    </TouchableOpacity>
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
                        {designTeam.map((item,index)=>{
                            return(
                                <View style={styles.persons}>
                                    <Image style={styles.fotoBox} source={item.avatar}/>
                                    <Text style={styles.personsName}>{item.firstName}</Text>
                                    <Text style={styles.personsName}>{item.lastName}</Text>
                                </View>
                            )
                        })}
                    </View>    
                        
            </View>
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
};
export default Box;
