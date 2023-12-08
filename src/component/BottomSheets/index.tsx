import React from "react";
import { Text, View} from "react-native";
import styles from "../Styles/BottomSheet";
import Input from "../AleBoxView/input";
import SearchIcon from "../Icons/SearchIcon";


function FilterSheet(){
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
            </View>

            
        </View>
        
    );
};
export default FilterSheet;