import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    squareShape:{
        minHeight: 278,
        width: 396,
        backgroundColor: "#FFFF",
        borderRadius:16,
        marginTop: 15,
        justifyContent: "space-between",
        padding:16,
        elevation:15,
    },
    textNames:{
        color: "#333",
        fontWeight: "bold",
        fontSize:18,
        paddingLeft:10
        

    },
    fotostyle: {
        borderRadius: 100,
        //borderColor:"green",
        //borderWidth:1,
        height: 141,
        width: 141,
        margin:10,
        alignSelf:"center",
        position:"absolute",
        top:-70,
        
    },
    container: {flex:1},
    header:{
        flex:2,
        backgroundColor:"#333",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    textone:{
        fontSize:20,
        color:"#FFF",
        fontWeight:"700",
        fontStyle: "normal",
        margin:20,
        fontFamily: "Poppins-Black"
    },
    main:{
        flex:8,
        backgroundColor:"#F5F7F8",
        alignItems:"center"
    },
    textwo:{
        fontSize:13,
        color:"#00B759",
        fontStyle: "normal",
        fontWeight: "500",
        alignSelf:"center",
        marginBottom:6,
        marginTop: 6
        
    },
    texthree:{
        fontSize:13,
        color:"#1D1D1B",
        fontStyle:"normal",
        fontWeight: "400",
        alignSelf:"center",
        marginRight:4
    },
    bottom:{
        flex:1,
        backgroundColor: "white",

    },
    credShape:{
        width: 363,
        height: 275,
        borderRadius:22,
        backgroundColor:"#FFF",
        //justifyContent: "center",
        //alignItems:"center",
        elevation: 15,
        position:"absolute",
        bottom:0,
        left:25,
        right:25
    },
    credName:{
        color:"#1D1D1B",
        fontSize:20,
        fontStyle: "normal",
        fontWeight: "700",
        alignSelf:"center",
        marginTop: 100
    },
    phonesocial:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:32,
        paddingTop:35
    },
    phone:{
        flexDirection:"row",
        alignItems:"center"
    },
    social:{
        margin:12,
        //alignSelf:"flex-end",
        flexDirection: "row",
        alignItems:"center",
    },
    buttonBox:{
        justifyContent:"space-around",
        flexDirection:"row",
        margin:10,
        alignContent:"space-between"
    },
    littleSquare:{
        minHeight: 63,
        width: 364,
        backgroundColor: "#FFFF",
        borderRadius:16,
        marginBottom:8,
        justifyContent: "space-between",
        padding:8,
        elevation:1,
        flexDirection:"row",
        alignItems:"center"
    }, 
    textBox:{
        fontSize:13,
        color:"#1D1D1B",
        fontStyle:"normal",
        fontWeight: "700",
        flexDirection:"column",
        //fontFamily: "Poppins-Black"
    },
    textBoxtwo:{
        fontSize:13,
        color:"#1D1D1B",
        fontStyle:"normal",
        fontWeight: "500",
        flexDirection:"column"
    },
    items:{
        height:70,
        width: 70,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF",
        margin:15
    },
    fotoBox:{
        borderRadius: 100,
        height: 63,
        width: 63,
        //margin:10,
            
    },
    textShape:{
        margin:10,
        justifyContent:"center"
    },
    icons:{
        width:51,
        height:51,
        borderRadius:100,
        backgroundColor:"#CDA100",
        justifyContent:"center",
        alignItems:"center"
    },
    iconsbs:{
        width:51,
        height:51,
        borderRadius:100,
        backgroundColor:"#333",
        justifyContent:"center",
        alignItems:"center"

    },
    email:{
        flexDirection:"row",
        alignSelf:"center",
        paddingLeft:10
    },
    outext:{
        flexDirection:"row",
        alignSelf:"flex-start",
        paddingHorizontal:70,
    },
    persons:{
        height:70,
        width: 70,
        borderRadius:100,
        alignItems:"center",
        backgroundColor:"#FFF",
        marginBottom:25,
        marginTop:10,
        //paddingLeft:10
    },
    personsName:{
        fontSize:10,
        color:"#333",
        fontStyle:"normal",
        fontWeight: "500",
    }
});

export default styles;