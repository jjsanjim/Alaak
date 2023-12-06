import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import Fle from "../Icons/Flecha";


const ButtonIcon =()=> {
   return (
       <TouchableOpacity>
           <View style={{bottom:15}}>
           <View style={{
           marginStart:280,
           //marginBottom:7,
           width:127,
           height:30,
           flexDirection:'row',
           backgroundColor:'#fff',
           borderRadius:20,
           justifyContent:'space-between',
           alignItems:'center',
           paddingHorizontal:16,
           shadowOffset:{
               width:0,
               height:1,
           },
               shadowOpacity:0.22,
               shadowRadius:2.22,
               elevation:3}}>
               <Text style={{
                   color:'#333',
                   fontSize:14,
                   fontStyle:"normal",
                   fontWeight:"500"

               }}> Bool </Text>
               <Fle/>
           </View>
           </View>
       </TouchableOpacity>
   );
}
export default ButtonIcon;