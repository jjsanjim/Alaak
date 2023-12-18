import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1,
        height: 60,
        //width: 428,
        padding:16,
        flexDirection: "column",
        justifyContent:"flex-end",
        alignItems: "flex-start",
        backgroundColor:"white",
        borderRadius:16,
        paddingHorizontal:10
     
    },
    main:{
        flex:11,
        backgroundColor:"#F5F7F8"
    },
    text:{

    color:"#333",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    height: 24,
    width: 300,
    },
    textOne:{

        color:"#333",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        height: 24,
        width:86 ,
        },
    textTwo:{
        fontFamily:"Inter",
        fontSize:14,
        fontStyle:"normal",
        fontWeight:"500",
        color:"#333333",  
    },
    cleanFilter:{
        borderRadius:50,
        borderWidth:1,
        width:110,
        height:31,
        //padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#CDA100"
    },
    textClean:{

        color:"#CDA100",
        fontSize:14,
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontWeight:"500",
        //textAlign: "center"
        //height: 21,
        //width:104 ,
    },
    textCleanTwo:{
        color:"white",
        fontSize:14,
        fontFamily:"Poppins",
        fontStyle:"normal",
        fontWeight:"bold",
       textAlign: "center"

    },
    completeFilter:{
        width:"100%",
        minHeight:79,
        padding:24,
        backgroundColor:"#FFF",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15
    },
    search:{
        flexDirection:"row",
        //backgroundColor: "#fff",
        borderRadius:100,
        height:56,
        borderBottomWidth:2,
        borderColor:"#E8E8E9",
        paddingHorizontal:24,
        alignItems:"center"
    },
    departments:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:24
    },
    setFilter:{
        borderRadius:100,
        borderWidth:1,
        width:164,
        height:56,
        paddingHorizontal:24,
        paddingVertical:14,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#CDA100"
    },
    setFilterTwo:{
        borderRadius:100,
        borderWidth:1,
        width:164,
        height:56,
        paddingHorizontal:24,
        paddingVertical:14,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#CDA100",
        backgroundColor:"#CDA100"
    },
    bottomFilter:{
        width:"100%",
        minHeight:79,
        padding:24,
        backgroundColor:"#FFF",
        flexDirection:"row",
        justifyContent:"space-between",
    }
});
export default styles;