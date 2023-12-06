import React from "react";
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




function OrganScene(){
   const navigation = useNavigation()
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
              
               <Input
                   placeholder="Buscar en Mi empresa"
                   placeholderTextColor={"black"}
                   style={styles.inputStyle}/>


           </View>
           <View style={styles.filter}>
               <View style={styles.buttonShape}><Text style={styles.textFiltwo}>Filtros</Text></View>   
               <View style={styles.buttonShapeFour}><FilterIcon/></View>
               <View style={styles.buttonShapeTwo}><Text style={styles.textFiltwo}>Mi equipo</Text></View>
               <TouchableOpacity onPress={()=>navigation.navigate("AllOrg")}>
                <View style={styles.buttonShapeThree}><Text style={styles.textFilThree}>Todos</Text></View>
               </TouchableOpacity>
               
           </View>








           <View style={styles.main}>
           <ScrollView>
               <Text style={styles.texthree}> Departamento de Diseño </Text>
               <Box/>
           </ScrollView>
          
          


           </View>
       </SafeAreaView>


   );


}
export default OrganScene;
