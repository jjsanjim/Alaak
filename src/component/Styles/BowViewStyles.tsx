import { StyleSheet } from "react-native";


const styles =StyleSheet.create({
   squareShape:{
       height: 80,
       width: 366,
       backgroundColor: "white",
       borderRadius:16,
       marginTop: 15,
       justifyContent: "space-between",
       alignItems: "center",
       flexDirection:"row",
       paddingHorizontal:10
   },
textShape:{
       margin:2,


   },
   textFil:{
       fontSize:13,
       color:"white",
       margin:2,
       width:84,
   },
   textFiltwo:{
       color: "white",
       fontWeight: "bold",
       fontSize:13,
       margin:7,
   },
   textFilThree:{
       fontSize:13,
       color:"black",
       margin:2,
   },
   textNames:{
       color: "#333",
       fontWeight: "bold",
       fontSize:15


   },
   textNamesTwo:{
       color: "#333",
       fontWeight: "bold",
       fontSize:15


   },
   fotostyle: {
       borderRadius: 100,
       height: 63,
       width: 63,
       margin:10
   },
   icons: {
      
       height:24,
       width: 24,
       justifyContent: "flex-end",
       alignItems: "flex-end",
       flexShrink: 0,




   },
container: {flex:1},
   header:{
       //flex:1,
       backgroundColor:"#F5F7F8",
       justifyContent:"center",
       alignItems: "center",
       flexDirection: "column",
       height: 96,
       //width: 428,
       borderRadius:16,
       //marginTop: 15,
       paddingHorizontal:40
    
      
   },
   textone:{
       fontSize:18,
       color:"black",
       fontWeight:"bold",
       margin:15
   },
   texthree:{
       fontSize:18,
       color:"white",


   },


   filter:{
       flex:1,
       backgroundColor:"#333",
       alignItems: "flex-start",
       flexDirection:"row",
       justifyContent:"flex-start",
   },
   filtertwo:{
       flex:1,
       backgroundColor:"#333",
       alignItems: "flex-start",
       flexDirection:"row",
       justifyContent:"flex-start",
   },
   main:{
       flex:7,
       backgroundColor:"#333",
       alignItems: "center",
   },
   buttonSearch:{
       flex:1.5,
       height: 56,
       width: 420,
       backgroundColor: "#333",
       borderRadius:0.5,
       alignItems: "center",
       padding:0.5
   },
   inputStyle:{
       borderWidth: 0.5,
       borderColor: '#E8E8E9',
       backgroundColor: 'white',
       color: '#000',
       borderRadius:100,
       marginTop:20,
       paddingLeft:24,
       width: 366,
       height:56,


   },
   buttonShape:{


       width:64,
       height:33,
       borderRadius:100,
       borderColor:"#333333",
       borderWidth:1,
       backgroundColor: "#333333",
       marginLeft:10,
       justifyContent:"center",
       alignItems:"center"
    },
   buttonShapeFour:{


       width:74,
       height:33,
       borderRadius:100,
       borderColor:"white",
       borderWidth:1,
       backgroundColor: "white",
       marginLeft:29,
       justifyContent:"center",
       alignItems:"center"
   },


   buttonShapeTwo:{


       width:90,
       height:33,
       borderRadius:100,
       borderColor:"#CDA100",
       borderWidth:1,
       backgroundColor: "#CDA100",
       marginLeft:20,
       justifyContent:"center",
       alignItems:"center"
   },
   buttonShapeThree:{


       width:74,
       height:33,
       borderRadius:100,
       borderColor:"white",
       borderWidth:1,
       backgroundColor: "white",
       marginLeft:10,
       justifyContent:"center",
       alignItems:"center"
  
   }
});


export default styles
