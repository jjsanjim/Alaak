import React from "react"
import { SafeAreaView, Text, Image, View, Dimensions} from "react-native"
import styles from "../Styles/styles"
import Phone from "../Icons/Phone"
import FacebookIcon from "../Icons/FacebookIcons"
import LinkdIcon from "../Icons/LinkdIcon"
import DiscordIcon from "../Icons/DiscordIcon"
import Copy from "../Icons/Copy"
const {width}= Dimensions.get("screen")
const Credential =({dataProfile})=> 
    <View style={{position:"relative"}}>
        <View style={{backgroundColor:"#333", height:140, width}}/>
        <View style={{height:200, width}}/>

        <View style={styles.credShape}>
            <Image style={styles.fotostyle} source={dataProfile.avatar}/>
            <Text style={[styles.credName]}>
                {dataProfile.firstName} {dataProfile.lastName}
            </Text>
            <Text style={styles.textwo}>
                {dataProfile.area}
            </Text>
            <View style={styles.email}>
                <Text style={styles.texthree}>
                     nathali.oo@maanyuba.com      
                </Text>
                <Copy/>
            </View>
            <View style={styles.phonesocial}>
                <View style={styles.phone}>
                    <Phone/>
                    <Text style={styles.texthree}>  55 39 70 08 92 </Text>
                </View>
                <View style={styles.social}>
                    <View style={{paddingHorizontal:6}}>
                        <FacebookIcon/>
                    </View>
                    <View style={{paddingHorizontal:6}}>
                        <LinkdIcon/>
                    </View>
                    <View style={{paddingHorizontal:6}}>
                        <DiscordIcon/>
                    </View>
                    
                    
                </View>
            </View>
                       
</View>
    </View>


export default Credential;