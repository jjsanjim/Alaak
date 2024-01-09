import React, { useEffect } from "react";
import { Text, View, Alert} from "react-native";
import styles from "../Styles/BottomSheet";
import Input from "../AleBoxView/input";
import SearchIcon from "../Icons/SearchIcon";
import ArrowIcon from "../Icons/ArrowIcon";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


const areas = [
    {
        id:1,
        name:"Recursos Humanos",
        labelKey:"RH" 
    },
    {
        id:2,
        name:"Diseño",
        labelKey:"UX/UI" 
    },
    {
        id:3,
        name:"Finanzas",
        labelKey:"FN" 
    },
    {
        id:4,
        name:"Desarrollo",
        labelKey:"DEV" 
    },
]

function FilterSheet( {onClose,updateFilter} ){
    const [rememberPass, setRememberPass] = useState(false)
    const [searchText,setSearchText] = useState('')
    const [listFilter, setListFilter] = useState([]) 
    


    const onAddFilter = (area:any) =>{
        const validIndex = listFilter.findIndex((itemF)=> itemF.id === area.id)
        if(validIndex > 0){
            setListFilter(prevState => prevState.filter(item=> item.id != area.id) )
            /*
            const newArray = [...listFilter]
            newArray.splice(validIndex,0)
            setListFilter(newArray)
            */
        }else{
            setListFilter(prevState => [...prevState,area])
/*
            const newArray = [...listFilter]
            newArray.push(area)
            setListFilter(newArray)
            */
        }

    }
//useEffect "cuando un elemento se actualiza" "Cuando el componente se va a morir"
useEffect(()=>{
    updateFilter(listFilter)
},[listFilter.length])
//props digging
const onReset = ()=>{
        setListFilter([])
        setSearchText('')
        onClose?.()
}

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={{alignItems:"center", flexDirection:"row", justifyContent:"space-between"}}>
            <TouchableOpacity onPress={onReset}>
                        <ArrowIcon/>        
                    </TouchableOpacity>
                <Text style={styles.text}>Todos</Text>
            </View>
            </View>
            <View style={styles.main}>
                <View style={styles.completeFilter}>
              
                    <Text style={styles.textOne}>Filtrar por:</Text>
                    <TouchableOpacity onPress={()=>setListFilter([]) } style={styles.cleanFilter}>
                        <Text style={styles.textClean}>Limpiar filtro</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.search}>
                    <SearchIcon/>
                    <Input 
                    onChangeText={(text)=> setSearchText(text)}
                    style={{marginLeft:12}}
                    placeholderTextColor={"#333"}
                    placeholder="Recursos"
                    value={searchText}/>
        
                </View>
                <View style={{paddingHorizontal:24, paddingVertical:10}}>
                    <Text style={styles.textTwo}>Área</Text>
                </View>
                {/*content Filter */}
                <View>
                    {/* item filter*/}
                    {
                        areas.map((area)=>(
                            <View style={styles.departments} key={area.id}>
                        <Text style={styles.textTwo}>{area.name}</Text>
                        <CheckBox 
                            value={ listFilter.find((item)=> item.id === area.id) ? true : false}
                            onValueChange={event => {
                               onAddFilter(area)
                            }}
                           />
                    </View>
                        ))
                    }
                </View>
                <View style={styles.bottomFilter}>
                    <TouchableOpacity style={styles.setFilter} 
                    onPress={onReset}>
                        <Text style={styles.textClean}>Cancelar</Text>
                    </TouchableOpacity>                    
                    <View style={styles.setFilterTwo}>
                    <TouchableOpacity style={styles.setFilter} 
                     onPress={onClose}>
                        <Text style={styles.textCleanTwo}>Filtrar</Text>
                        </TouchableOpacity>  
                    </View>
                </View>
            </View>

            
        </View>
        
    );
};
export default FilterSheet;