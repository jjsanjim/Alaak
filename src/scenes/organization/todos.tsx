import React, {useRef, useMemo} from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity} from "react-native";
import Input from "../../component/AleBoxView/input";
import Box from "../../component/AleBoxView/2ndscreen";
import styles from "../../component/Styles/BowViewStyles";
import FilterIcon from "../../component/Icons/FilterIcon";
import NotificationIcon from "../../component/Icons/NotificationIcon";
import SearchIcon from "../../component/Icons/SearchIcon";
import ArrowIcon from "../../component/Icons/ArrowIcon";
import SettingIcon from "../../component/Icons/SettingIcon";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import FilterSheet from "../../component/BottomSheets";




function OrgantScene(){
   const navigation = useNavigation()
   const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['60%', '60%'], []);
   return (
       
           <SafeAreaView style={styles.container}>
           <View style={styles.header}>
               <View style={{alignItems:"flex-end", flexDirection:"row", justifyContent:"space-between"}}>
                    <ArrowIcon/>
                    <Text style={styles.textone}> Perfil Empresarial </Text>
                    <View style={{flexDirection:"row"}}>
                        <NotificationIcon/>
                        <SettingIcon/>
                    </View>
               </View>
           </View>
           <View style={styles.buttonSearch}>
                <View style={{
                    flexDirection:"row",
                    backgroundColor: "#fff",
                    borderRadius:100,
                    height:56,
                    borderWidth:0.5,
                    borderColor:"#E8E8E9",
                    paddingHorizontal:24,
                    alignItems:"center"
                }}>
                    <SearchIcon/>
                    <Input style={{marginLeft:12}}
                    placeholderTextColor={"#333"}
                    placeholder="Buscar en Mi empresa"/>
                </View>
               
           </View>
           <View style={styles.filter}>
               <View style={styles.buttonShape}><Text style={styles.textFiltwo}>Filtros</Text></View>   
               <TouchableOpacity onPress={()=>bottomSheetRef.current.expand(BottomSheet)} style={styles.buttonShapeFour}><FilterIcon/></TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate("Organization")}>
                <View style={styles.buttonShapeTwoF}><Text style={styles.textFiltwoF}>Mi equipo</Text></View>
               </TouchableOpacity>
               
               <View style={styles.buttonShapeThreeF}><Text style={styles.textFilThreeF}>Todos</Text></View>
           </View>



           <View style={styles.main}>
           <ScrollView>
               <Text style={styles.texthree}> Resultados de tu búsqueda </Text>
               <Box/>
           </ScrollView>
          
          


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
                <FilterSheet/>
            </ScrollView>
            </BottomSheet>
            
       </SafeAreaView>


   );


}
export default OrgantScene;
