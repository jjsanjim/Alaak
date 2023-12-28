import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    main:{
        flex:11,
        backgroundColor:"#F5F7F8"
    },
    textOne:{
        fontFamily:"poppins",
        fontSize:16,
        fontStyle:"normal",
        fontWeight:"700",

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
        fontFamily:"poppins",
        fontStyle:"normal",
        fontWeight:"500"
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
    }
});
export default styles;