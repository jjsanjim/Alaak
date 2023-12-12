import React from "react";
import { Text, View, Alert} from "react-native";
import styles from "../Styles/BottomSheet";
import Input from "../AleBoxView/input";
import SearchIcon from "../Icons/SearchIcon";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";

function FilterSheet(){
    const [rememberPass, setRememberPass] = useState(false)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textOne}>Todos</Text>
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
                    <Input style={{marginLeft:12}}
                    placeholderTextColor={"#333"}
                    placeholder="Recursos"/>
                </View>
                <View style={{paddingHorizontal:24, paddingVertical:10}}>
                    <Text style={styles.textOne}>Área</Text>
                </View>
                <View>
                    <View style={styles.departments}>
                        <Text style={styles.textOne}>Recursos Humanos</Text>
                        <CheckBox 
                            value={rememberPass}
                            onValueChange={(event)=> {
                            console.log(event)
                            setRememberPass(event)}}/>
                    </View>
                    <View style={styles.departments}>
                        <Text style={styles.textOne}>Finanzas</Text>
                        <CheckBox 
                            value={rememberPass}
                            onValueChange={(event)=> {
                            console.log(event)
                            setRememberPass(event)}}/>
                    </View>
                    <View style={styles.departments}>
                        <Text style={styles.textOne}>Diseño</Text>
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
                    <View style={styles.setFilter}>
                        <Text style={styles.textClean}>Filtrar</Text>
                    </View>
                </View>
            </View>

            
        </View>
        
    );
};
export default FilterSheet;