import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AppNavigationParamsList } from "./AppNavigationParamsList";

import AlaakScene from "./scenes/alaak";
import AlaakHome from "./scenes/home";
import OrganScene from "./scenes/organization";
import OrgantScene from "./scenes/organization/todos";

const AppStack = createNativeStackNavigator<AppNavigationParamsList>()


const AppNavigation: React.FC = () => {

    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen  name="Home" component={AlaakHome}/>
            <AppStack.Screen  name="Perfil" component={AlaakScene} />
            <AppStack.Screen name="Organization" component={OrganScene}/>
            <AppStack.Screen name="AllOrg" component={OrgantScene}/>
        </AppStack.Navigator>
    )
}

export default AppNavigation;