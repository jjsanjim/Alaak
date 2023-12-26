import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import Sig from "../Icons/Siguiente";
import { useNavigation } from "@react-navigation/native";


const Tds=()=> {
    const navigation=useNavigation()
   return (
       <TouchableOpacity onPress={()=>navigation.navigate("Organization")}>
           <View style={{
               marginTop:18,
               marginLeft:250,
               marginBottom:10,
               width:90,
               height:40,
               flexDirection:'row',
               backgroundColor:'#fff',
        
               justifyContent:'flex-end',
               alignItems:'flex-end',
               padding:10}}>
               <Text style={{
                   color:'#000000'
               }}> Ver todos </Text>
               <Sig/>
           </View>
       </TouchableOpacity>
   );
}
export default Tds;