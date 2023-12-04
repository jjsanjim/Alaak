import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import Fle from "../Icons/Flecha";


const ButtonIcon =()=> {
   return (
       <TouchableOpacity>
           <View style={{
           marginStart:280,
           marginBottom:7,
           width:94,
           height:30,
           flexDirection:'row',
           backgroundColor:'#fff',
           borderRadius:20,
           justifyContent:'center',
           alignItems:'center',
           padding:0,
           shadowOffset:{
               width:0,
               height:1,
           },
               shadowOpacity:0.22,
               shadowRadius:2.22,
               elevation:3}}>
               <Text style={{
                   color:'#000000'
               }}> Bool </Text>
               <Fle/>
           </View>
       </TouchableOpacity>
   );
}
export default ButtonIcon;