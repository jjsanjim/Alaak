import React, {useMemo,useRef,useState,useInsertionEffect, useEffect} from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity, Touchable} from "react-native";
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
        avatar:require("../../component/Images/Avatar-base(6).png"),
        firstName:"Amaury ",
        lastName:"Almanza",
        area:"CEO "
    },
    {
        avatar:require("../../component/Images/Avatar-base(7).png"),
        firstName:"Emilio ",
        lastName:"Camargo",
        area:"CTO "
    },
    {
        avatar:require("../../component/Images/Avatar-base(8).png"),
        firstName:"César ",
        lastName:"Mendoza",
        area:"VP "
    },
    {
        avatar:require("../../component/Images/Avatar-base(9).png"),
        firstName:"Claudia ",
        lastName:"Rodríguez",
        area:"Product"
    },
    {
        avatar:require("../../component/Images/Avatar-base(10).png"),
        firstName:"Juan",
        lastName:"Rivera",
        area:"App MovileI"
    },
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
 const snapPoints = useMemo(() => ['25%', '93%'], []);
 //hook
 const [searchText,setSearchText] = useState('')
 const [buttonActive,setButtonActive] = useState("all") // "all" Vert todo - "mine" Mi equipo
 const [teamFilter,setTeamFilter] =useState ([])
 const myArea = "UX&UI";
 //console.log("search",team.filter((item)=> item.firstName.toLowerCase().includes(searchText.toLowerCase()) ))
  
 useEffect(()=>{
    const arrayFilter = team.filter((item)=> buttonActive === 'all' ? item : item.area.includes(myArea) )
    const newTeam = arrayFilter.filter((item)=> item.firstName.toLowerCase().includes(searchText.toLowerCase()) || item.lastName.toLowerCase().includes(searchText.toLowerCase()) )
    setTeamFilter(newTeam)
},[buttonActive,searchText] )
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
              <View style={styles.buttonShape}><Text style={styles.textFil}>Filtros</Text></View>   
              <TouchableOpacity onPress={()=>bottomSheetRef.current?.expand(BottomSheet)} style={styles.buttonShapeFour}>
                <FilterIcon />
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=> setButtonActive("mine")}
              style={[ buttonActive === "mine" ? styles.buttonShapeThree:styles.buttonShapeTwo]}>
                <Text style={[buttonActive === "mine" ? styles.textFilThree: styles.textFiltwo]}>Mi equipo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> setButtonActive("all")}>
                <View style={[ buttonActive === "all" ? styles.buttonShapeThree:styles.buttonShapeTwo]}>
                  <Text style={[buttonActive === "all" ? styles.textFilThree: styles.textFiltwo]}>Todos</Text>
                </View>
              </TouchableOpacity> 
          </View>
                  
         {/*Content*/}
          <View style={styles.main}>
          <ScrollView>
              <Text style={styles.texthree}> Resultado de tu búsqueda </Text>
              <Box data={
                teamFilter
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
               <FilterSheet onClose={()=>bottomSheetRef.current?.close()}/>
           </ScrollView>
           </BottomSheet>
           
       </SafeAreaView>


  );


}
export default OrganScene;
