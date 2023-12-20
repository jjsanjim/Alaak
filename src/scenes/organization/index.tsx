import React, {useMemo,useRef,useState,useInsertionEffect} from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity} from "react-native";
import Input from "../../component/AleBoxView/input";
import Box from "../../component/AleBoxView";
import styles from "../../component/Styles/BowViewStyles";
import FilterIcon from "../../component/Icons/FilterIcon";
import NotificationIcon from "../../component/Icons/NotificationIcon";
import SearchIcon from "../../component/Icons/SearchIcon";
import ArrowIcon from "../../component/Icons/ArrowIcon";
import SettingIcon from "../../component/Icons/SettingIcon";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import FilterSheet from "../../component/BottomSheets";

const team = [
    {
        avatar:require("../../component/Images/Avatar-base(5).png"),
        firstName:"Humberto ",
        lastName:"Alonso",
        area:"UX&UI Manager"
    },
    {
        avatar:require("../../component/Images/Avatar-base(4).png"),
        firstName:"Luis ",
        lastName:"Mota",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images/Avatar-base(2).png"),
        firstName:"César",
        lastName:"Ramón",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images/Avatar-base(1).png"),
        firstName:"Aline",
        lastName:"Palacios",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images/Avatar-base(3).png"),
        firstName:"Nathali",
        lastName:"Ortiz",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images//Avatar-base.png"),
        firstName:"Vanessa",
        lastName:"Luna",
        area:"Trainne UX&UI "
    }
]

function OrganScene(){
  const navigation = useNavigation()
  //ref
  const bottomSheetRef = useRef<BottomSheet>(null);
 // variables
 const snapPoints = useMemo(() => ['25%', '80%'], []);
 //hook
 const [searchText,setSearchText] = useState('')
 //console.log("search",team.filter((item)=> item.firstName.toLowerCase().includes(searchText.toLowerCase()) ))
  
 return (
      
       <SafeAreaView style={styles.container}>
          <View style={styles.header}>
              <View style={{alignItems:"flex-end", flexDirection:"row", justifyContent:"space-between"}}>
                   <ArrowIcon/>
                   <Text style={styles.text}> Perfil Empresarial </Text>
                   <View style={{flexDirection:"row"}}>
                       <NotificationIcon/>
                       <SettingIcon/>
                   </View>
              </View>
          </View>
          {/*SearchBar*/}
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
                   <Input 
                   onChangeText={(text)=> setSearchText(text)}
                   style={{marginLeft:12}}
                   placeholderTextColor={"#333"}
                   placeholder="Buscar en Mi empresa"/>
               </View>
              
          </View>
          {/*Buttons Filter*/}
          <View style={styles.filter}>
              <View style={styles.buttonShape}><Text style={styles.textFiltwo}>Filtros</Text></View>   
              <TouchableOpacity onPress={()=>bottomSheetRef.current?.expand(BottomSheet)} style={styles.buttonShapeFour}><FilterIcon/></TouchableOpacity>
              <View style={styles.buttonShapeTwo}><Text style={styles.textFiltwo}>Mi equipo</Text></View>
              <TouchableOpacity onPress={()=>navigation.navigate("AllOrg")}>
               <View style={styles.buttonShapeThree}><Text style={styles.textFilThree}>Todos</Text></View>
              </TouchableOpacity>
              
          </View>
          
          
         {/*Content*/}
          <View style={styles.main}>
          <ScrollView>
              <Text style={styles.texthree}> Departamento de Diseño </Text>
              <Box data={
                team.filter((item)=> item.firstName.toLowerCase().includes(searchText.toLowerCase()) || item.lastName.toLowerCase().includes(searchText.toLowerCase()) )
              }/>
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
export default OrganScene;
