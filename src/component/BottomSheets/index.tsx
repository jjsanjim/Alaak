import React from "react";
import { Text, View, Alert} from "react-native";
import styles from "../Styles/BottomSheet";
import Input from "../AleBoxView/input";
import SearchIcon from "../Icons/SearchIcon";
import ArrowIcon from "../Icons/ArrowIcon";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";


function FilterSheet(){
    const [rememberPass, setRememberPass] = useState(false)
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
                    <Text style={styles.textOne}>Filtrar poooooooooooooooor:</Text>
                    <View style={styles.cleanFilter}>
                        <Text style={styles.textClean}>Limpiar filtro</Text>
                    </View>
                </View>
                <View style={styles.search}>
                    <SearchIcon/>
                    <Input style={{marginLeft:12}}
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