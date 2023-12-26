import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import {Button,  ScrollView, Alert, Image, SafeAreaView,Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, TouchableOpacity, } from "react-native";
import Card from "../../component/Cards";
import ButtonIcon from "../../component/ButtonIcons/button";
import Not from "../../component/Icons/Notificacion";
import Conf from "../../component/Icons/Configuracion";
import Frec from "../../component/ButtonIcons/frecuentesbutton";
import Eqp from "../../component/ButtonIcons/equipobutton";
import Tds from "../../component/ButtonIcons/todosbutton";
import Org from "../../component/Icons/Organigrama";
import Ser from "../../component/Icons/Servicios";
import Tra from "../../component/Icons/Tra";
import Mas from "../../component/Icons/Mas";
function AlaakHome (){
    const navigation=useNavigation()
    return(
       <SafeAreaView style={{flex:1,
       backgroundColor:'#333'}}>
           <View style={{
               zIndex:999,
               flexDirection:'row',
               backgroundColor:'#CDA100',
               justifyContent:'space-around',
               paddingHorizontal:16,
               alignItems:'center'}}>
            <View style={{position:'relative',width:124,height:90}}>
                <View style={{
                    top:30,
                    position:'absolute',
                    zIndex:999,
                    width:100,
                    height:100,
                    backgroundColor:'#CDA100',
                    overflow:'hidden',
                    borderRadius:100,
                    justifyContent:'center',
                    alignItems:'center',
                    padding:10
                }}>
                    
                    <Image source={require("../../component/Images/Rectangle5.png")}
                    style={{width: '100%', height: '100%', borderRadius:100}}/> 
                </View>


            </View>   
                <View >
                <Text style={{color:'#FFFFFF',
                    justifyContent:'center',
                    alignItems:'center',
                    fontSize:17.71,
                    fontWeight:"700",
                    marginTop:50}}> Hola, Luis </Text>
                    
                </View>
                    <View style={{ justifyContent:'center',
                        alignItems:'center',
                        marginTop:70,
                        marginBottom:20,
                        marginStart:140,
                        marginRight:5}}>
                        <Not/>
                    </View>
                    <View style={{justifyContent:'center',
                        alignItems:'center',
                        marginTop:70,
                        marginBottom:20}}>
                        <Conf/>
                    </View>                
           </View>


           <View style={{flex:21,
               backgroundColor:'#333',
               justifyContent:'center',
               alignItems:'center'}}>
                <ScrollView>
                  <View style={{padding:20}}>
                    <ButtonIcon/>
                  </View>
                  
                   <Card>
                       <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                           <TouchableOpacity style={{alignItems:"center"}} onPress={()=>navigation.navigate("Organization")}>
                              
                               <View style={{
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#CDA100",
                                   justifyContent:"center",
                                   alignItems:"center"
                                   }}>
                                   <Org/>
                               </View>
                               <Text style={{
                               color:'#000000',fontSize:13}}>Organigrama</Text>
                               
                           </TouchableOpacity>
                           <TouchableOpacity style={{alignItems:"center"}}>
                               <View style={{
                                   marginLeft:15,
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#CDA100",
                                   justifyContent:"center",
                                   alignItems:"center"
                                   }}>
                                   <Ser/>
                               </View>
                               <Text style={{marginLeft:19,
                               color:'#000000',fontSize:13}}>Pagar </Text>
                               <Text style={{marginLeft:19,
                               color:'#000000',fontSize:13}}>Servicios </Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{alignItems:"center"}} onPress={()=>navigation.navigate("Perfil")}>
                               <View style={{
                                   marginLeft:15,
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#CDA100",
                                   justifyContent:"center",
                                   alignItems:"center"
                                   }}>
                                   <Tra/>
                               </View>
                               <Text style={{marginLeft:15,
                               color:'#000000',fontSize:13}}>Transferir</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{alignItems:"center"}}>
                               <View style={{
                                   marginLeft:15,
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#ffffff",
                                   justifyContent:"center",
                                   alignItems:"center"
                                   }}>
                                   <Mas/>
                               </View>
                               <Text style={{marginLeft:15,
                               color:'#000000',fontSize:13}}>Ver Más</Text>
                           </TouchableOpacity>
                       </View>
                   </Card>
                   <Card>
                       <View style={{flexDirection:'row'}}>
                           <Frec/>
                           <Eqp/>
                       </View>
                       <View style={{flexDirection:'row'}}>
                          <View>
                               <Image source={require('../../component/Images/Avatar-base(5).png')}
                               style={{minWidth:63, minHeight:30, flexDirection:'column',justifyContent:'center',alignItems:'center',
                               }}/>
                               <Text style={{marginLeft:15,
                               color:'#000000',fontSize:13}}>Humberto </Text>
                               <Text style={{marginLeft:27,
                               color:'#000',fontSize:13}}>Alonso</Text>
                           </View>
                           <View>
                               <Image source={require('../../component/Images/Avatar-base.png')}
                               style={{minWidth:63, minHeight:30, flexDirection:'column',justifyContent:'center',alignItems:'center',}}/> 
                               <Text style={{marginLeft:15,
                               color:'#000000',fontSize:13}}> Vanessa</Text>
                               <Text style={{marginLeft:27,
                               color:'#000000',fontSize:13}}>Luna</Text>
                           </View>
                           <View>
                               <Image source={require('../../component/Images/Avatar-base(1).png')}
                               style={{minWidth:63, minHeight:30, flexDirection:'column',justifyContent:'center',alignItems:'center',}}/>
                               <Text style={{marginLeft:33,
                               color:'#000000',fontSize:13}}>Aline</Text>
                               <Text style={{marginLeft:25,
                               color:'#000000',fontSize:13}}>Palacios</Text>
                           </View>
                           <TouchableOpacity onPress={()=>navigation.navigate("Perfil")}>
                           <View>
                               <Image source={require('../../component/Images/Avatar-base(3).png')}
                               style={{minWidth:63, minHeight:30, flexDirection:'column',justifyContent:'center',alignItems:'center',}}/>
                               <Text style={{marginLeft:24,
                               color:'#000000',fontSize:13}}>Nathali</Text>
                               <Text style={{marginLeft:29,
                               color:'#000000',fontSize:13}}>Ortiz</Text>
                           </View>
                           </TouchableOpacity>   
                       </View>
                       <View style={{alignSelf:"flex-end"}}>
                           <Tds/>
                       </View>
                   </Card>
                   <Card>
                       <Text style={{fontSize:18,color:'#333'}}>Departamentos</Text>
                       <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-evenly"}}>
                      
                           <TouchableOpacity style={{alignItems:'center'}}>
                               <View
                                   style={{
                                   marginLeft:15,
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#CDA100",
                                   justifyContent:"center",
                                   alignItems:"center",
                                   marginTop:17
                                   }}>
                                   <Text style={{width:30,
                                   height:30,fontSize:16,color:'#FFF'}}> RH</Text>
                               </View>
                               <Text style={{marginLeft:15,
                                   color:'#000000',fontSize:13}}>Recursos</Text>
                                   <Text style={{marginLeft:15,
                                   color:'#000000',fontSize:13}}>Humanos</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{alignItems:'center'}}>
                               <View
                                   style={{
                                   marginLeft:30,
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#CDA100",
                                   justifyContent:"center",
                                   alignItems:"center"
                                   }}>
                                   <Text style={{width:30,
                                   height:60,fontSize:16,color:'#FFF'}}> DEV</Text>
                               </View>
                               <Text style={{marginLeft:30,
                                   color:'#000000',fontSize:13}}>Desarrollo</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{alignItems:'center'}}>
                               <View
                                   style={{
                                   marginLeft:40,
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#CDA100",
                                   justifyContent:"center",
                                   alignItems:"center"
                                   }}>
                                   <Text style={{width:40,
                                   height:20,fontSize:16,color:'#FFF'}}> OPS</Text>
                               </View>
                               <Text style={{marginLeft:40,
                                   color:'#000000',fontSize:13}}>Operaciones</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{alignItems:"center"}}>
                               <View style={{
                                   marginLeft:30,
                                   width:51,
                                   height:51,
                                   borderRadius:100,
                                   backgroundColor:"#ffffff",
                                   justifyContent:"center",
                                   alignItems:"center"
                                   }}>
                                   <Mas/>
                               </View>
                               <Text style={{marginLeft:30,
                               color:'#000000',fontSize:13}}>Ver Más</Text>
                           </TouchableOpacity>
                          
                       </View>
                           <View style={{alignSelf:"flex-end", paddingTop:10}}>
                               <Tds/>
                           </View>
                   </Card>
                 </ScrollView> 
           </View>
          










       </SafeAreaView>
   );
}


export default AlaakHome;