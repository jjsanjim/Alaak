import React from "react";
import { TouchableOpacity, View } from "react-native";


function Card(props) {
   return (
       <View
        style={{
           padding:16,
           width: '100%',
           minHeight:120,
           borderRadius: 15,
           marginBottom:10,
           backgroundColor:"white",
           shadowColor:"#000",
           shadowOffset:{ width:0, height:12},
           shadowOpacity:0.58,
           shadowRadius:16.00,
           elevation:24,
           
           }}>
               {props.children}
       </View>
   );


}
  
export default Card;