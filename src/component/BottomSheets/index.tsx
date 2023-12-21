import React from "react";
import { Text, View, Alert} from "react-native";
import styles from "../Styles/BottomSheet";
import Input from "../AleBoxView/input";
import SearchIcon from "../Icons/SearchIcon";
import ArrowIcon from "../Icons/ArrowIcon";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";

const team = [
    {
        avatar:require("../../component/Images/Avatar-base(5).png"),
        firstName:"Humberto ",
        lastName:"Alonso",
        area:"UX&UI Manager"
    },
    {
        avatar:require("../../component/Images/Avatar-base(4).png"),
        firstName:"Luis ",
        lastName:"Mota",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images/Avatar-base(3).png"),
        firstName:"César",
        lastName:"Ramón",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images/Avatar-base(2).png"),
        firstName:"Aline",
        lastName:"Palacios",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images/Avatar-base(1).png"),
        firstName:"Nathali",
        lastName:"Ortiz",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images//Avatar-base.png"),
        firstName:"Vanessa",
        lastName:"Luna",
        area:"Trainne UX&UI "
    },
    {
        avatar:require("../../component/Images//Avatar-base.png"),
        firstName:"Vanessa",
        lastName:"Luna",
        area:"Trainne UX&UI "
    },
]

function FilterSheet(){
    const [rememberPass, setRememberPass] = useState(false)
    const [searchText,setSearchText] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={{alignItems:"center", flexDirection:"row", justifyContent:"space-between"}}>
                    <ArrowIcon/>
                <Text style={styles.text}>Todos</Text>
            </View>
            </View>
            <View style={styles.main}>
                <View style={styles.completeFilter}>
              
                    <Text style={styles.textOne}>Filtrar por:</Text>
                    <View style={styles.cleanFilter}>
                        <Text style={styles.textClean}>Limpiar filtro</Text>
                    </View>
                </View>
                <View style={styles.search}>
                    <SearchIcon/>
                    <Input 
                    onChangeText={(text)=> setSearchText(text)}
                    style={{marginLeft:12}}
                    placeholderTextColor={"#333"}
                    placeholder="Recursos"/>
                </View>
                <View style={{paddingHorizontal:24, paddingVertical:10}}>
                    <Text style={styles.textTwo}>Área</Text>
                </View>
                <View>
                    <View style={styles.departments}>
                        <Text style={styles.textTwo}>Recursos Humanos</Text>
                        <CheckBox 
                            value={rememberPass}
                            onValueChange={(event)=> {
                            console.log(event)
                            setRememberPass(event)}}/>
                    </View>
                    <View style={styles.departments}>
                        <Text style={styles.textTwo}>Finanzas</Text>
                        <CheckBox 
                            value={rememberPass}
                            onValueChange={(event)=> {
                            console.log(event)
                            setRememberPass(event)}}/>
                    </View>
                    <View style={styles.departments}>
                        <Text style={styles.textTwo}>Diseño</Text>
                        <CheckBox 
                            value={rememberPass}
                            onValueChange={(event)=> {
                            console.log(event)
                            setRememberPass(event)}}/>
                    </View>
                </View>
                <View style={styles.bottomFilter}>
                    <View style={styles.setFilter}>
                        <Text style={styles.textClean}>Cancelar</Text>
                    </View>                    
                    <View style={styles.setFilterTwo}>
                        <Text style={styles.textCleanTwo}>Filtrar</Text>
                    </View>
                </View>
            </View>

            
        </View>
        
    );
};
export default FilterSheet;