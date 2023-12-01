import React from "react";
import { TouchableOpacity, View, Text } from "react-native";


const  Frec=()=>{
   return(
       <TouchableOpacity>
           <View style={{
               marginEnd:30,
               width:120,
               height:37,
               backgroundColor:'#fff',
               borderRadius:70,
               justifyContent:'center',
               alignItems:'center',
               padding:10,
               shadowOffset:{
               width:0,
               height:1,
               },
               shadowOpacity:0.22,
               shadowRadius:2.22,
               elevation:3}}>
                   <Text style={{
                       color:'#000000'
                   }}>Frecuentes
                   </Text>
           </View>
       </TouchableOpacity>
   );
}
export default Frec;